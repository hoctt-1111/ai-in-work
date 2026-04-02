// app.js — Main application logic (section-based navigation)
(function () {
  'use strict';

  // --- State ---
  var currentSection = 0;
  var totalSections = SECTIONS.length;

  // --- DOM refs ---
  var navList = document.getElementById('nav-list');
  var sectionContent = document.getElementById('section-content');
  var progressBar = document.getElementById('progress-bar');
  var progressText = document.getElementById('progress-text');
  var btnPrev = document.getElementById('btn-prev');
  var btnNext = document.getElementById('btn-next');
  var prevLabel = document.getElementById('prev-label');
  var nextLabel = document.getElementById('next-label');
  var themeToggle = document.getElementById('theme-toggle');
  var themeToggleMobile = document.getElementById('theme-toggle-mobile');
  var menuToggle = document.getElementById('menu-toggle');
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('overlay');

  // --- Markdown renderer setup ---
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  // --- Build sidebar nav ---
  function buildNav() {
    navList.innerHTML = '';
    SECTIONS.forEach(function (sec) {
      var li = document.createElement('li');
      li.className = 'nav-item';
      li.dataset.index = sec.id;
      li.innerHTML =
        '<div class="nav-link">' +
          '<span class="nav-number">' + sec.icon + '</span>' +
          '<span>' + sec.shortTitle + '</span>' +
          '<span class="nav-time">' + sec.time + '</span>' +
        '</div>';
      li.addEventListener('click', function () {
        goTo(sec.id);
        closeMobileMenu();
      });
      navList.appendChild(li);
    });
  }

  // --- Render a section ---
  function renderSection(secIdx) {
    var sec = SECTIONS[secIdx];
    if (!sec) return;

    var headerHTML =
      '<div class="section-header">' +
        '<span class="section-icon">' + sec.icon + '</span>' +
        '<div>' +
          '<h1 class="section-title">' + sec.title + '</h1>' +
          '<div class="section-meta">' +
            '<span class="section-number">#' + sec.id + '</span>' +
            '<span class="section-time">⏱ ' + sec.time + '</span>' +
          '</div>' +
        '</div>' +
      '</div>';

    var bodyHTML = marked.parse(sec.markdown);

    sectionContent.classList.add('fade-out');
    setTimeout(function () {
      sectionContent.innerHTML = headerHTML + '<div class="rendered-md">' + bodyHTML + '</div>';
      postProcess();
      sectionContent.classList.remove('fade-out');
      sectionContent.scrollTop = 0;
      document.querySelector('.main-content').scrollTop = 0;
    }, 150);
  }

  // --- Post-process rendered HTML ---
  function postProcess() {
    // Wrap tables for horizontal scroll
    sectionContent.querySelectorAll('table').forEach(function (table) {
      if (!table.parentElement.classList.contains('table-wrapper')) {
        var wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });

    // Add copy button to code blocks
    sectionContent.querySelectorAll('pre code').forEach(function (codeEl) {
      var pre = codeEl.parentElement;
      if (pre.querySelector('.code-copy-btn')) return;
      var btn = document.createElement('button');
      btn.className = 'code-copy-btn';
      btn.textContent = 'Copy';
      btn.setAttribute('aria-label', 'Copy code');
      btn.addEventListener('click', function () {
        navigator.clipboard.writeText(codeEl.textContent).then(function () {
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
          }, 1500);
        });
      });
      pre.style.position = 'relative';
      pre.appendChild(btn);
    });

    // Style stat items
    sectionContent.querySelectorAll('li').forEach(function (li) {
      var text = li.textContent;
      if (text.startsWith('✅')) li.classList.add('stat-good');
      else if (text.startsWith('❌')) li.classList.add('stat-bad');
    });

    // Add level classes to security table rows
    sectionContent.querySelectorAll('td').forEach(function (td) {
      var t = td.textContent.trim();
      if (t === '🟢 An toàn') td.parentElement.classList.add('level-safe');
      else if (t === '🟡 Cần xử lý') td.parentElement.classList.add('level-caution');
      else if (t === '🔴 Cấm') td.parentElement.classList.add('level-danger');
    });

    // Agenda links
    sectionContent.querySelectorAll('a.agenda-link[data-goto]').forEach(function (a) {
      a.style.cursor = 'pointer';
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var sectionId = parseInt(a.dataset.goto, 10);
        goTo(sectionId);
      });
    });

    // Demo-links: route through viewer.html
    sectionContent.querySelectorAll('blockquote').forEach(function (bq) {
      var links = bq.querySelectorAll('a[href*="demo-data/"]');
      if (links.length > 0) {
        bq.classList.add('demo-links');
        links.forEach(function (a) {
          var originalHref = a.getAttribute('href');
          a.setAttribute('href', 'viewer.html?file=' + encodeURIComponent(originalHref));
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener');
        });
      }
    });
  }

  // --- Update UI state ---
  function updateUI() {
    navList.querySelectorAll('.nav-item').forEach(function (item) {
      var link = item.querySelector('.nav-link');
      if (link) link.classList.toggle('active', +item.dataset.index === currentSection);
    });

    var pct = ((currentSection + 1) / totalSections) * 100;
    progressBar.style.width = pct + '%';
    progressText.textContent = (currentSection + 1) + ' / ' + totalSections;

    btnPrev.disabled = currentSection === 0;
    btnNext.disabled = currentSection === totalSections - 1;

    var prevSec = currentSection > 0 ? SECTIONS[currentSection - 1] : null;
    var nextSec = currentSection < totalSections - 1 ? SECTIONS[currentSection + 1] : null;

    prevLabel.textContent = prevSec ? prevSec.shortTitle : '';
    nextLabel.textContent = nextSec ? nextSec.shortTitle : '';
  }

  // --- Navigation ---
  function goTo(sectionId) {
    if (sectionId < 0 || sectionId >= totalSections) return;
    currentSection = sectionId;
    renderSection(currentSection);
    updateUI();
    saveState();
  }

  btnPrev.addEventListener('click', function () { goTo(currentSection - 1); });
  btnNext.addEventListener('click', function () { goTo(currentSection + 1); });

  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(currentSection - 1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); goTo(currentSection + 1); }
  });

  // --- Theme toggle ---
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  themeToggle.addEventListener('click', toggleTheme);
  themeToggleMobile.addEventListener('click', toggleTheme);

  var savedTheme = localStorage.getItem('theme');
  if (savedTheme) setTheme(savedTheme);

  // --- Mobile menu ---
  function closeMobileMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    document.body.classList.remove('menu-open');
  }

  menuToggle.addEventListener('click', function () {
    var isOpen = sidebar.classList.contains('open');
    sidebar.classList.toggle('open', !isOpen);
    overlay.classList.toggle('show', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  overlay.addEventListener('click', closeMobileMenu);

  // --- Persist current section ---
  function saveState() {
    sessionStorage.setItem('currentSection', currentSection);
  }

  function restoreState() {
    var saved = sessionStorage.getItem('currentSection');
    if (saved !== null) {
      var idx = parseInt(saved, 10);
      if (idx >= 0 && idx < totalSections) currentSection = idx;
    }
  }

  // --- Init ---
  restoreState();
  buildNav();
  renderSection(currentSection);
  updateUI();
})();
