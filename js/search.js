// SmartDeskDojo search index & UI
(function() {
  var idx = [
    {t:"Best Walking Pads 2026: Goplus, WalkingPad, Yagud", u:"/articles/active-workstation-walking-pads-2026.html", d:"Goplus vs WalkingPad vs Yagud: which under-desk treadmill lasts? 5 best walking pads compared: specs, noise data, durability.", k:"walking pad treadmill under desk walkingpad goplus yagud active workstation"},
    {t:"AI Mice vs Traditional: 2026 Productivity Test", u:"/articles/ai-mice-vs-traditional-productivity-2026.html", d:"AI Voice Mouse vs GQLQR vs Logitech MX Master 3S: 2026 comparison with voice accuracy benchmarks, ergonomics, and honest verdict.", k:"mouse ai mice logitech mx master voice productivity ergonomic"},
    {t:"Best Anti-Fatigue Mats & Footrests 2026 Tested", u:"/articles/best-anti-fatigue-mats-footrests-2026.html", d:"Topo vs ComfiLife vs Sky Solutions: 7 anti-fatigue mats and footrests tested for standing desk comfort.", k:"anti fatigue mat footrest standing comfort topo comfilife cushioned floor"},
    {t:"Best Desk Mats & Mousepads 2026: Tested", u:"/articles/best-desk-mats-mousepads-2026.html", d:"Grovemade vs Orbitkey vs Logitech: 7 desk mats tested for feel, durability, and desk presence.", k:"desk mat mousepad grovemade orbitkey logitech felt leather rgb"},
    {t:"Best Ergonomic Chairs Under $500: 2026 Guide", u:"/articles/best-ergonomic-chairs-under-500-2026.html", d:"Haworth Breck vs Steelcase Series 1 vs Sihoo Doro C300 Pro: 7 best ergonomic chairs under $500 tested & ranked.", k:"ergonomic chair haworth breck steelcase sihoo budget seating back pain"},
    {t:"Best Macropads & Stream Decks 2026: Elgato vs Mountain vs QMK", u:"/articles/best-macropads-stream-decks-2026.html", d:"Elgato Stream Deck MK.2 vs Mountain DisplayPad vs Megalodon vs DOIO: 7 macropads tested for productivity.", k:"macropad stream deck elgato mountain displaypad megalodon doio qmk shortcut macro"},
    {t:"Best Monitor Arms 2026: 6 Mounts Tested", u:"/articles/best-monitor-arms-2026.html", d:"Amazon Basics vs HUANUO vs Ergotron LX: 6 monitor arms tested for weight capacity, VESA compatibility, and real-world stability.", k:"monitor arm mount vesa amazon basics huanuo ergotron desk clamp screen"},
    {t:"Best Monitor Light Bars 2026: BenQ Halo 2 vs Quntis", u:"/articles/best-monitor-light-bars-2026.html", d:"BenQ Halo 2 vs Quntis ScreenLinear Pro: which monitor light bar reduces eye strain? CRI, color temp, asymmetric lighting.", k:"monitor light bar benq halo quntis screen lamp eye strain desk lighting"},
    {t:"Best Noise-Canceling Headphones for WFH 2026: Sony XM6 vs Bose vs AirPods Max 2", u:"/articles/best-noise-canceling-headphones-wfh-2026.html", d:"Sony WH-1000XM6 vs Bose QC Ultra 2 vs AirPods Max 2 vs Momentum 5: which ANC headphones crush leaf blowers, kids, and construction noise? Prime Day deal targets inside.", k:"headphones noise canceling anc sony xm6 bose airpods max sennheiser momentum wfh focus audio"},
    {t:"Best Under-Desk PC Mounts 2026: VIVO vs Dezctop", u:"/articles/best-under-desk-pc-mounts-2026.html", d:"VIVO vs Dezctop Bifrost vs Kendall Howard: which under-desk PC mount keeps your tower secure? 5 tested.", k:"pc mount under desk computer tower vivo dezctop kendall howard cpu holder"},
    {t:"Best USB-C Docking Stations & Thunderbolt Hubs 2026: TB5 Has Arrived", u:"/articles/best-usb-c-docking-stations-thunderbolt-2026.html", d:"CalDigit TS5 vs Kensington TB5 vs Anker PowerExpand: Thunderbolt 5 docking stations have arrived — but do you need one? Best USB-C and Thunderbolt docks for WFH 2026, all price tiers.", k:"docking station thunderbolt usb-c hub caldigit ts5 kensington anker plugable satechi satechi dock setup"},
    {t:"Best Webcams & Video Lighting 2026: Look Sharp on Every Zoom", u:"/articles/best-webcams-video-lighting-2026.html", d:"Logitech MX Brio vs Insta360 Link 2 Pro vs Obsbot Tiny 3: which 4K webcam makes you look good on Zoom?", k:"webcam camera video lighting logitech brio insta360 obsbot zoom conference"},
    {t:"Best Desk Depth for Ultrawide Monitors 2026", u:"/articles/depth-dilemma-ultrawide-desks.html", d:"Is your desk too shallow for a 49-inch ultrawide? Optimal depth specs, best monitor arms for depth recovery.", k:"desk depth ultrawide monitor 49 inch shallow dimension space ergonomics"},
    {t:"Best Hall Effect Keyboards 2026: Tested", u:"/articles/hall-effect-keyboards-productivity-2026.html", d:"Wooting 60HE+ vs Royal Kludge C98 vs Epomaker HE75: do Hall Effect switches improve productivity?", k:"keyboard hall effect mechanical wooting royal kludge epomaker typing switches magnetic"},
    {t:"Dual Monitor Setup: Exact Measurements for 24-32 inch Screens", u:"/articles/dual-monitor-setup-measurements-ergonomics.html", d:"Stop guessing at arm's length. Dual monitor measurements for 24, 27, and 32-inch screens: exact distance, angle, desk depth, and which monitor arms work.", k:"dual monitor setup measurements distance angle desk depth ergonomics screen size 24 27 32 inch"},
    {t:"Laptop Screen Extenders 2026: Tested & Compared", u:"/articles/laptop-screen-extenders-2026.html", d:"Cybotioe vs Hyangin vs KYY X90G: which laptop screen extender survives? 5 models tested.", k:"laptop screen extender monitor portable dual triple cybotioe hyangin kyy"},
    {t:"Standing Desk Cable Management 2026 Guide", u:"/articles/standing-desk-cable-management-guide-2026.html", d:"From $5 zip ties to $150 raceways: standing desk cable management guide with slack math, product tiers, and install tips.", k:"cable management standing desk wires cord organizer tray raceway zip tie"},
    {t:"Best Standing Desks 2026: Top 3 Picks Tested", u:"/articles/standing-desk-revolution-2026.html", d:"Standing desk market hit $9.1B in 2026. Uplift V3 vs FlexiSpot E7 Pro vs Branch Duo: specs, pricing.", k:"standing desk uplift flexispot branch motorized sit stand height adjustable"},
    {t:"Secretlab Magnus Pro vs Autonomous 2026 Review", u:"/articles/ultimate-ergonomic-desk-setup.html", d:"Secretlab Magnus Pro vs Autonomous SmartDesk Core: wobble tests, cable management, final verdict.", k:"secretlab magnus autonomous smartdesk desk setup ergonomic cable management wobble"},
    {t:"Battlestation Ergonomic Calculator", u:"/calculator.html", d:"Find your mathematically perfect chair, desk, and monitor distance. Stop guessing; start building.", k:"calculator ergonomic tool height measurement desk chair monitor distance setup"},
    {t:"About SmartDeskDojo", u:"/about.html", d:"Our mission, testing methodology, and who's behind the Dojo.", k:"about mission methodology contact team"}
  ];

  var query = '', sel = -1, visible = [];
  var container, input, dropdown;

  function createUI() {
    container = document.createElement('div');
    container.id = 'dojo-search';
    container.innerHTML =
      '<div class="ds-wrap">' +
        '<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
        '<input class="ds-input" type="text" placeholder="Search gear, guides..." autocomplete="off">' +
        '<button class="ds-clear" type="button">&times;</button>' +
      '</div>' +
      '<div class="ds-drop"></div>';

    var nav = document.querySelector('nav > div:last-child');
    nav.parentNode.insertBefore(container, nav);
    input = container.querySelector('.ds-input');
    dropdown = container.querySelector('.ds-drop');
    var clearBtn = container.querySelector('.ds-clear');

    input.addEventListener('input', onInput);
    input.addEventListener('keydown', onKey);
    input.addEventListener('focus', function() { if (input.value) filter(); });
    clearBtn.addEventListener('click', function() { input.value = ''; query = ''; filter(); input.focus(); });
    document.addEventListener('click', function(e) { if (!container.contains(e.target)) hide(); });
  }

  function onInput() {
    query = input.value.trim().toLowerCase();
    var clr = container.querySelector('.ds-clear');
    clr.style.display = query ? 'flex' : 'none';
    if (query.length < 2) { hide(); return; }
    filter();
  }

  function filter() {
    visible = [];
    if (query.length < 2) { hide(); return; }
    var qs = query.split(/\s+/);
    for (var i = 0; i < idx.length; i++) {
      var hay = (idx[i].t + ' ' + idx[i].d + ' ' + idx[i].k).toLowerCase();
      var match = true;
      for (var j = 0; j < qs.length; j++) {
        if (hay.indexOf(qs[j]) === -1) { match = false; break; }
      }
      if (match) visible.push(i);
    }
    sel = visible.length ? 0 : -1;
    render();
  }

  function render() {
    if (!visible.length) {
      dropdown.innerHTML = '<div class="ds-none">No results for "' + esc(query) + '"</div>';
      dropdown.style.display = 'block';
      return;
    }
    var html = '';
    for (var i = 0; i < visible.length; i++) {
      var a = idx[visible[i]];
      html += '<a class="ds-item' + (i === sel ? ' ds-sel' : '') + '" href="' + a.u + '" data-i="' + i + '">' +
        '<span class="ds-t">' + hl(a.t, query) + '</span>' +
        '<span class="ds-d">' + esc(a.d) + '</span>' +
      '</a>';
    }
    dropdown.innerHTML = html;
    dropdown.style.display = 'block';
  }

  function onKey(e) {
    if (!visible.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(sel + 1, visible.length - 1); render(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(sel - 1, 0); render(); }
    else if (e.key === 'Enter') { if (sel >= 0 && visible[sel] != null) window.location.href = idx[visible[sel]].u; }
    else if (e.key === 'Escape') { hide(); input.blur(); }
  }

  function hide() { dropdown.style.display = 'none'; sel = -1; }

  function esc(s) {
    var d = document.createElement('div');
    d.appendChild(document.createTextNode(s));
    return d.innerHTML;
  }

  function hl(text, q) {
    var t = esc(text);
    if (!q) return t;
    var words = q.split(/\s+/).filter(function(w){ return w.length > 1; });
    for (var i = 0; i < words.length; i++) {
      var re = new RegExp('(' + words[i].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'gi');
      t = t.replace(re, '<mark>$1</mark>');
    }
    return t;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', createUI);
  else createUI();
})();
