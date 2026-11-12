/*
 * booking-modal.js  —  Goldrock Factory Tours booking modal
 * Self-contained: injects its own CSS + markup. Works with the existing page.
 *
 * Any element with class "js-open-booking" opens the modal.
 *   data-tour="standard" | "student" | "private"   (optional: preselects the tour)
 * With no data-tour, the modal opens on "Select a Tour Option" and the action
 * button stays disabled until a tour is chosen.
 */
(function () {
  'use strict';

  /* ===== CONFIG: complete these once approved (see "Items to confirm") ===== */
  var APPROVED_WEEKDAYS = null;  // e.g. [2,3,4] = Tue/Wed/Thu (0 = Sunday). null = any date until confirmed.
  var PRICES = {};               // per person, e.g. { standard: 0, student: 0 }. Empty = no price shown.
  var CURRENCY = 'KES';
  var BOOKING_ENDPOINT = '';     // URL that receives the booking as JSON (POST). Empty = demo mode, nothing sent.
  var PAYMENT_URL = '';          // payment page opened after a successful booking. Empty = none.
  var PRIVATE_CONTACT = { name: '', email: '', phone: '' };  // shown only when filled in
  /* ======================================================================== */

  var PAGE_INTRO = 'Discover the journey of coffee from farm to cup at Goldrock International. Whether you are visiting individually, learning as a student or planning a private group experience, choose the tour that best suits you.';

  var TOURS = {
    standard: {
      name: 'Standard Factory Tour',
      option: 'Standard Factory Tour \u2014 2 Hours',
      type: 'book', max: 10, guestsLabel: 'Guests',
      desc: 'Explore the world of coffee with our guided Farm to Cup Experience. Discover coffee history, processing, grading and roasting, visit our coffee museum and farm, enjoy a tea tasting and finish with a live coffee brewing demonstration and tasting. Ideal for individuals, families and general visitors.',
      details: ['Duration: 2 hours', 'Maximum group size: 10 guests', 'Start time: 10:30 AM']
    },
    student: {
      name: 'Student / Educational Tour',
      option: 'Student / Educational Tour \u2014 2 Hours',
      type: 'book', max: 12, guestsLabel: 'Students',
      desc: 'A practical, guided learning experience for school, college and university groups. Students begin at the coffee farm, explore how coffee is grown, harvested and processed, and learn about grading, roasting and related coffee products. The tour concludes with a live brewing demonstration and tasting. Content is adapted to the students\u2019 learning level.',
      note: 'Teachers and designated supervisors should be included in the same booking as their students. Up to two accompanying teachers may attend at no additional charge, with additional adults charged at the applicable educational tour rate.',
      details: ['Duration: 2 hours', 'Maximum group size: 12 students & up to 2 teachers', 'Start time: 10:30 AM']
    },
    'private': {
      name: 'Private Group Tour',
      option: 'Private Group Tour \u2014 By Arrangement',
      type: 'enquire',
      desc: 'Planning a visit for your company, organisation, delegation or other private group? Our team can help coordinate a tailored factory tour based on your group\u2019s interests and requirements. Private visits are arranged in advance and are subject to management approval and availability.',
      details: ['Duration, group size and schedule: by arrangement']
    }
  };

  var css = `
  .bk-overlay{position:fixed;inset:0;background:rgba(0,0,0,.65);display:none;align-items:center;justify-content:center;padding:16px;z-index:2000;font-family:'Montserrat','Inter',system-ui,sans-serif}
  .bk-overlay.is-open{display:flex}
  .bk-modal{background:#fff;color:#1a1a1a;width:100%;max-width:1000px;max-height:92vh;overflow:auto;border-radius:6px;position:relative;box-shadow:0 20px 60px rgba(0,0,0,.4)}
  .bk-hero{height:200px;background:#222 center/cover no-repeat;position:relative}
  .bk-close{position:absolute;top:14px;right:14px;width:34px;height:34px;border-radius:50%;border:0;background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.25)}
  .bk-body{display:grid;grid-template-columns:1.5fr 1fr;gap:32px;padding:28px 32px 32px}
  .bk-title{font-size:1.4rem;font-weight:500;margin:0 0 20px;text-transform:none}
  .bk-tabs{display:flex;gap:24px;border-bottom:1px solid #ddd;margin-bottom:20px}
  .bk-tab{background:none;border:0;padding:10px 0;font:inherit;font-size:.9rem;cursor:pointer;color:#666;border-bottom:2px solid transparent;margin-bottom:-1px}
  .bk-tab.is-active{color:#1a1a1a;border-bottom-color:#1a1a1a;font-weight:500}
  .bk-panel{display:none}
  .bk-panel.is-active{display:block}
  .bk-text{font-size:.92rem;line-height:1.6;font-weight:300;margin:0 0 12px}
  .bk-list{margin:0 0 12px;padding-left:18px;font-size:.92rem;line-height:1.8;font-weight:300}
  .bk-exp{border:1px solid #ddd;border-radius:6px;padding:16px}
  .bk-form{display:flex;flex-direction:column;gap:12px}
  .bk-label{font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:#555;margin:0 0 4px;display:block}
  .bk-field{width:100%;padding:12px;border:1px solid #ccc;border-radius:4px;font:inherit;font-size:.92rem;background:#fff;color:#1a1a1a;color-scheme:light}
  .bk-field:focus{outline:2px solid #1a1a1a;outline-offset:1px}
  .bk-fields{display:flex;flex-direction:column;gap:12px}
  .bk-fields[hidden],.bk-contact[hidden],[hidden]{display:none!important}
  .bk-hint{font-size:.78rem;color:#666;margin:4px 0 0}
  .bk-total{display:flex;justify-content:space-between;font-size:.92rem;padding:4px 2px}
  .bk-submit{padding:14px;border:0;border-radius:4px;background:#1a1a1a;color:#fff;font:inherit;font-weight:500;letter-spacing:.06em;text-transform:uppercase;cursor:pointer}
  .bk-submit:hover:not(:disabled){background:#000}
  .bk-submit:disabled{opacity:.4;cursor:not-allowed}
  .bk-note{font-size:.8rem;color:#666;margin:12px 0 0;font-weight:300}
  .bk-contact{border:1px solid #1a1a1a;border-radius:4px;padding:14px;font-size:.9rem}
  .bk-contact p{margin:4px 0}
  .bk-msg{font-size:.88rem;margin:0;padding:10px 12px;border-radius:4px;display:none}
  .bk-msg.is-ok{display:block;background:#e8f5e9;color:#1b5e20}
  .bk-msg.is-err{display:block;background:#fdecea;color:#b71c1c}
  body.bk-lock{overflow:hidden}
  @media (max-width:760px){.bk-body{grid-template-columns:1fr;padding:20px}.bk-hero{height:150px}}`;

  var html = `
  <div class="bk-overlay" id="bkOverlay" aria-hidden="true">
    <div class="bk-modal" role="dialog" aria-modal="true" aria-labelledby="bkTitle">
      <div class="bk-hero" id="bkHero">
        <button type="button" class="bk-close" id="bkClose" aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1a1a1a" stroke-width="1.6" stroke-linecap="round"><path d="M3 3l10 10M13 3L3 13"/></svg>
        </button>
      </div>
      <div class="bk-body">
        <section>
          <h2 class="bk-title" id="bkTitle"></h2>
          <nav class="bk-tabs" role="tablist">
            <button type="button" class="bk-tab is-active" role="tab" data-tab="overview">Overview</button>
            <button type="button" class="bk-tab" role="tab" data-tab="experiences">Experiences</button>
            <button type="button" class="bk-tab" role="tab" data-tab="photos">Photos</button>
          </nav>
          <div class="bk-panel is-active" id="bkPanel-overview"><p class="bk-text" id="bkOverview"></p><p class="bk-text" id="bkNote" hidden></p></div>
          <div class="bk-panel" id="bkPanel-experiences"><div class="bk-exp" id="bkExp"></div></div>
          <div class="bk-panel" id="bkPanel-photos"><p class="bk-text">Photo gallery coming soon.</p></div>
        </section>
        <aside>
          <form class="bk-form" id="bkForm" novalidate>
            <div>
              <label class="bk-label" for="bkTour">Select a Tour Option</label>
              <select id="bkTour" class="bk-field">
                <option value="" disabled selected>Select a Tour Option</option>
                <option value="standard"></option>
                <option value="student"></option>
                <option value="private"></option>
              </select>
            </div>

            <div class="bk-fields" id="bkFields" hidden>
              <div><label class="bk-label" for="bkName">Full name</label><input id="bkName" class="bk-field" autocomplete="name"></div>
              <div><label class="bk-label" for="bkEmail">Email</label><input id="bkEmail" type="email" class="bk-field" autocomplete="email"></div>
              <div><label class="bk-label" for="bkPhone">Phone / WhatsApp</label><input id="bkPhone" type="tel" class="bk-field" autocomplete="tel"></div>
              <div id="bkOrgWrap" hidden><label class="bk-label" for="bkOrg">School / institution</label><input id="bkOrg" class="bk-field"></div>
              <div><label class="bk-label" for="bkDate">Date</label><input type="date" id="bkDate" class="bk-field"></div>
              <div><label class="bk-label">Start time</label><input class="bk-field" value="10:30 AM \u2013 12:30 PM" readonly tabindex="-1"></div>
              <div><label class="bk-label" for="bkGuests" id="bkGuestsLabel">Guests</label><select id="bkGuests" class="bk-field"></select></div>
              <div id="bkTeachersWrap" hidden>
                <label class="bk-label" for="bkTeachers">Accompanying teachers / adults</label>
                <select id="bkTeachers" class="bk-field"></select>
                <p class="bk-hint">Up to 2 teachers free. Additional adults are charged at the educational tour rate.</p>
              </div>
              <div class="bk-total" id="bkTotalRow" hidden><span>Total</span><strong id="bkTotal"></strong></div>
            </div>

            <div class="bk-contact" id="bkContact" hidden></div>
            <p class="bk-msg" id="bkMsg" role="status"></p>
            <button type="submit" class="bk-submit" id="bkSubmit" disabled>Book Now</button>
          </form>
          <p class="bk-note" id="bkSideNote"></p>
        </aside>
      </div>
    </div>
  </div>`;

  function init() {
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    var wrap = document.createElement('div');
    wrap.innerHTML = html;
    document.body.appendChild(wrap.firstElementChild);

    var $ = function (id) { return document.getElementById(id); };
    var overlay = $('bkOverlay'), form = $('bkForm'), msg = $('bkMsg');
    var current = '', lastFocus = null;

    // Dropdown option labels come from TOURS
    var opts = $('bkTour').options;
    opts[1].textContent = TOURS.standard.option;
    opts[2].textContent = TOURS.student.option;
    opts[3].textContent = TOURS['private'].option;

    function money(n) { return CURRENCY + ' ' + n.toFixed(2); }
    function fill(sel, from, to) {
      sel.innerHTML = '';
      for (var i = from; i <= to; i++) sel.add(new Option(String(i), String(i)));
    }
    function setMsg(text, kind) { msg.textContent = text; msg.className = 'bk-msg' + (kind ? ' is-' + kind : ''); }

    function setTab(name) {
      overlay.querySelectorAll('.bk-tab').forEach(function (t) { t.classList.toggle('is-active', t.dataset.tab === name); });
      overlay.querySelectorAll('.bk-panel').forEach(function (p) { p.classList.toggle('is-active', p.id === 'bkPanel-' + name); });
    }

    function updateTotal() {
      var p = PRICES[current];
      var row = $('bkTotalRow');
      if (!p) { row.hidden = true; return; }
      var n = Number($('bkGuests').value) + (current === 'student' ? Math.max(0, Number($('bkTeachers').value) - 2) : 0);
      $('bkTotal').textContent = money(p * n);
      row.hidden = false;
    }

    // Re-render everything that depends on the selected tour
    function render(key) {
      current = key;
      $('bkTour').value = key;
      var t = TOURS[key];
      var submit = $('bkSubmit');
      setMsg('');
      $('bkContact').hidden = true;

      if (!t) {
        $('bkTitle').textContent = 'Goldrock Factory Tours';
        $('bkOverview').textContent = PAGE_INTRO;
        $('bkNote').hidden = true;
        $('bkExp').textContent = 'Select a tour option to see its details.';
        $('bkFields').hidden = true;
        $('bkSideNote').textContent = '';
        submit.disabled = true; submit.textContent = 'Book Now';
        return;
      }

      $('bkTitle').textContent = 'Goldrock \u2013 ' + t.name;
      $('bkOverview').textContent = t.desc;
      $('bkNote').hidden = !t.note;
      $('bkNote').textContent = t.note || '';

      var exp = $('bkExp'); exp.innerHTML = '';
      var strong = document.createElement('strong'); strong.textContent = t.name; exp.appendChild(strong);
      var ul = document.createElement('ul'); ul.className = 'bk-list';
      t.details.forEach(function (d) { var li = document.createElement('li'); li.textContent = d; ul.appendChild(li); });
      if (PRICES[key]) { var li = document.createElement('li'); li.textContent = 'Price: ' + money(PRICES[key]) + ' (per person)'; ul.appendChild(li); }
      exp.appendChild(ul);

      submit.disabled = false;
      if (t.type === 'book') {
        submit.textContent = 'Book Now';
        $('bkFields').hidden = false;
        $('bkGuestsLabel').textContent = t.guestsLabel;
        fill($('bkGuests'), 1, t.max);
        var student = key === 'student';
        $('bkOrgWrap').hidden = !student;
        $('bkTeachersWrap').hidden = !student;
        if (student) { fill($('bkTeachers'), 0, 4); $('bkTeachers').value = '1'; }
        $('bkSideNote').textContent = 'Only approved dates and available slots can be booked. Payment and confirmation follow your booking.';
        updateTotal();
      } else {
        submit.textContent = 'Enquire Now';
        $('bkFields').hidden = true;
        $('bkSideNote').textContent = 'Private visits are subject to management approval and availability. This is an enquiry, not a booking or payment.';
      }
    }

    function showContact() {
      var box = $('bkContact'); box.innerHTML = '';
      var any = false;
      [['Contact', PRIVATE_CONTACT.name], ['Email', PRIVATE_CONTACT.email], ['Telephone / WhatsApp', PRIVATE_CONTACT.phone]].forEach(function (r) {
        if (!r[1]) return; any = true;
        var p = document.createElement('p'), b = document.createElement('strong');
        b.textContent = r[0] + ': '; p.appendChild(b); p.appendChild(document.createTextNode(r[1])); box.appendChild(p);
      });
      if (!any) { var p = document.createElement('p'); p.textContent = 'Contact details will be shared here shortly.'; box.appendChild(p); }
      box.hidden = false;
    }

    function open(trigger) {
      var card = trigger.closest('.inverroche-book-an-experience--card');
      var img = card && card.querySelector('img');
      $('bkHero').style.backgroundImage = img ? 'url("' + (img.currentSrc || img.src) + '")' : 'none';
      $('bkDate').min = new Date().toISOString().split('T')[0];
      setTab('overview');
      render(TOURS[trigger.dataset.tour] ? trigger.dataset.tour : '');
      lastFocus = trigger;
      overlay.classList.add('is-open'); overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('bk-lock');
      $('bkClose').focus();
    }
    function close() {
      overlay.classList.remove('is-open'); overlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('bk-lock');
      if (lastFocus) lastFocus.focus();
    }

    // Capture phase + stopImmediatePropagation so the site's own click handlers never run for these buttons
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.js-open-booking');
      if (!btn) return;
      e.preventDefault(); e.stopImmediatePropagation();
      open(btn);
    }, true);

    $('bkClose').addEventListener('click', close);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && overlay.classList.contains('is-open')) close(); });
    overlay.querySelectorAll('.bk-tab').forEach(function (t) { t.addEventListener('click', function () { setTab(t.dataset.tab); }); });
    $('bkTour').addEventListener('change', function () { render($('bkTour').value); });
    $('bkGuests').addEventListener('change', updateTotal);
    $('bkTeachers').addEventListener('change', updateTotal);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var t = TOURS[current];
      if (!t) return;
      if (t.type === 'enquire') { showContact(); return; }   // no form, no payment for private tours

      var d = {
        tour: current, name: $('bkName').value.trim(), email: $('bkEmail').value.trim(),
        phone: $('bkPhone').value.trim(), date: $('bkDate').value, time: '10:30',
        guests: Number($('bkGuests').value)
      };
      if (current === 'student') { d.organisation = $('bkOrg').value.trim(); d.teachers = Number($('bkTeachers').value); }

      if (!d.name || !d.phone || !/^\S+@\S+\.\S+$/.test(d.email)) return setMsg('Please enter your name, a valid email and a phone number.', 'err');
      if (current === 'student' && !d.organisation) return setMsg('Please enter the school or institution name.', 'err');
      if (!d.date) return setMsg('Please choose a date.', 'err');
      var day = new Date(d.date + 'T00:00:00').getDay();
      if (APPROVED_WEEKDAYS && APPROVED_WEEKDAYS.indexOf(day) === -1) return setMsg('Tours do not run on that day. Please choose an available day.', 'err');
      if (d.guests > t.max) return setMsg('This tour is limited to ' + t.max + ' per session.', 'err');

      // NOTE: remaining-seat checks per date must be enforced on the server.
      if (BOOKING_ENDPOINT) {
        fetch(BOOKING_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) })
          .then(function (r) { if (!r.ok) throw new Error(); })
          .then(function () {
            setMsg('Booking received. A confirmation will be sent to ' + d.email + '.', 'ok');
            if (PAYMENT_URL) window.open(PAYMENT_URL, '_blank', 'noopener');
          })
          .catch(function () { setMsg('Something went wrong. Please try again.', 'err'); });
      } else {
        setMsg('Demo mode: booking and payment are not yet active, so nothing was sent.', 'ok');
      }
    });

    render('');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
