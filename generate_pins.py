#!/usr/bin/env python3
"""Generate 1000x1500 Pinterest pin images for SmartDeskDojo articles."""

import os, sys
from PIL import Image, ImageDraw, ImageFont
from io import BytesIO
import urllib.request

REPO = "/home/joe/smartdeskdojo.com"
OUT_DIR = os.path.join(REPO, "images", "pins")
W, H = 1000, 1500

# Dark battlestation palette
BG = (9, 9, 11)          # #09090b
ACCENT = (0, 242, 254)    # #00f2fe
ACCENT2 = (79, 172, 254)  # #4facfe
SURFACE = (24, 24, 27)    # #18181b
TEXT = (244, 244, 245)    # #f4f4f5
SUBTEXT = (212, 212, 216) # #d4d4d8

PINS = [
    {
        "slug": "standing-desk-revolution",
        "image": os.path.join(REPO, "standing-desk-hero.jpg"),
        "title": "Standing Desk\nRevolution 2026",
        "subtitle": "4 Desks Tested Side-by-Side",
    },
    {
        "slug": "depth-dilemma-ultrawide",
        "image": os.path.join(REPO, "depth-dilemma-ultrawide.jpg"),
        "title": "The Depth\nDilemma",
        "subtitle": "Why Your Desk Is Too Shallow for a 49\" Ultrawide",
    },
    {
        "slug": "ergonomic-chairs-under-500",
        "image": os.path.join(REPO, "ergonomic-chair-hero.jpg"),
        "title": "Best Ergonomic\nChairs Under $500",
        "subtitle": "2026 Roundup — 5 Chairs, 1 Winner",
    },
    {
        "slug": "walking-pads",
        "image": os.path.join(REPO, "walking-pad-hero.jpg"),
        "title": "Walking Pads\nfor Standing Desks",
        "subtitle": "Tested for Real 8-Hour WFH Days",
    },
    {
        "slug": "laptop-screen-extenders",
        "image": os.path.join(REPO, "screen-extender-hero.jpg"),
        "title": "Laptop Screen\nExtenders 2026",
        "subtitle": "Triple Monitor From a Single Laptop?",
    },
    {
        "slug": "magnus-vs-smartdesk",
        "image": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=1200",
        "title": "Magnus Pro vs\nSmartDesk Core",
        "subtitle": "Motorized Desk Showdown — Which Wins?",
    },
]

def load_image(path_or_url):
    """Load an image from a local path or URL."""
    if path_or_url.startswith("http"):
        req = urllib.request.Request(path_or_url, headers={"User-Agent": "Mozilla/5.0"})
        data = urllib.request.urlopen(req).read()
        return Image.open(BytesIO(data)).convert("RGB")
    return Image.open(path_or_url).convert("RGB")

def gradient_overlay(img, start_y, end_y, color_start, color_end):
    """Draw a vertical gradient overlay on an image in-place."""
    overlay = Image.new("RGBA", (img.width, end_y - start_y))
    for y in range(overlay.height):
        t = y / overlay.height
        r = int(color_start[0] + (color_end[0] - color_start[0]) * t)
        g = int(color_start[1] + (color_end[1] - color_start[1]) * t)
        b = int(color_start[2] + (color_end[2] - color_start[2]) * t)
        a = int(180 * t)  # fade from transparent to semi-opaque
        for x in range(overlay.width):
            overlay.putpixel((x, y), (r, g, b, a))
    img.paste(overlay, (0, start_y), overlay)

def make_pin(pin):
    """Create a single pin image."""
    img = load_image(pin["image"])
    
    # Create canvas
    canvas = Image.new("RGB", (W, H), BG)
    
    # --- Image area: top 60% (900px tall) ---
    img_area_h = 880
    # Scale image to cover the area (crop to fit width)
    aspect = img.width / img.height
    target_aspect = W / img_area_h
    
    if aspect > target_aspect:
        # Image is wider — scale to height, crop sides
        new_h = img_area_h
        new_w = int(new_h * aspect)
        img_resized = img.resize((new_w, new_h), Image.LANCZOS)
        left = (new_w - W) // 2
        img_cropped = img_resized.crop((left, 0, left + W, new_h))
    else:
        # Image is taller — scale to width, crop top/bottom
        new_w = W
        new_h = int(new_w / aspect)
        img_resized = img.resize((new_w, new_h), Image.LANCZOS)
        top = (new_h - img_area_h) // 3  # bias toward upper portion
        img_cropped = img_resized.crop((0, top, new_w, top + img_area_h))
    
    canvas.paste(img_cropped, (0, 0))
    
    # --- Gradient fade at bottom of image ---
    gradient_overlay(canvas, 700, 880, (0, 0, 0, 0), (9, 9, 11))
    
    # --- Text area ---
    draw = ImageDraw.Draw(canvas)
    
    # Try to load Montserrat, fall back to default
    title_font = None
    subtitle_font = None
    for font_path in [
        "/nix/store/*/share/fonts/truetype/Montserrat-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/TTF/DejaVuSans-Bold.ttf",
    ]:
        import glob
        matches = glob.glob(font_path)
        if matches:
            title_font = ImageFont.truetype(matches[0], 60)
            subtitle_font = ImageFont.truetype(matches[0].replace("Bold", "SemiBold").replace("Bold", "Medium"), 32)
            break
    
    if title_font is None:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    
    # Draw title lines
    y = 940
    lines = pin["title"].split("\n")
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=title_font)
        tw = bbox[2] - bbox[0]
        x = (W - tw) // 2
        draw.text((x, y), line, fill=ACCENT, font=title_font)
        y += 70
    
    y += 20
    
    # Subtitle
    bbox = draw.textbbox((0, 0), pin["subtitle"], font=subtitle_font)
    tw = bbox[2] - bbox[0]
    x = (W - tw) // 2
    draw.text((x, y), pin["subtitle"], fill=SUBTEXT, font=subtitle_font)
    
    # --- Bottom branding ---
    y = 1430
    brand_font = None
    import glob
    matches = glob.glob("/nix/store/*/share/fonts/truetype/Montserrat-Bold.ttf")
    if matches:
        brand_font = ImageFont.truetype(matches[0], 28)
    else:
        brand_font = subtitle_font
    
    bbox = draw.textbbox((0, 0), "SMARTDESKDOJO", font=brand_font)
    tw = bbox[2] - bbox[0]
    x = (W - tw) // 2
    draw.text((x, y), "SMARTDESKDOJO", fill=SUBTEXT, font=brand_font)
    
    # --- Save ---
    os.makedirs(OUT_DIR, exist_ok=True)
    out_path = os.path.join(OUT_DIR, f"{pin['slug']}.jpg")
    canvas.save(out_path, "JPEG", quality=92)
    print(f"  ✓ {out_path}")
    return out_path

def main():
    print("Generating Pinterest pin images...")
    for pin in PINS:
        make_pin(pin)
    print(f"\nDone. {len(PINS)} pins saved to {OUT_DIR}/")

if __name__ == "__main__":
    main()
