// app.js — Main application logic
(function () {
  'use strict';

  // --- State ---
  let currentSection = 0;
  const totalSections = SECTIONS.length;

  // --- DOM refs ---
  const navList = document.getElementById('nav-list');
  const sectionContent = document.getElementById('section-content');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const prevLabel = document.getElementById('prev-label');
  const nextLabel = document.getElementById('next-label');
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  // --- Markdown renderer setup ---
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  // --- Build sidebar nav ---
  function buildNav() {
    navList.innerHTML = '';
    SECTIONS.forEach(function (sec) {
      const li = document.createElement('li');
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
  function renderSection(index) {
    const sec = SECTIONS[index];
    if (!sec) return;

    // Build section header + rendered markdown
    const headerHTML =
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

    const bodyHTML = marked.parse(sec.markdown);

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
        const wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });

    // Add copy button to code blocks
    sectionContent.querySelectorAll('pre code').forEach(function (codeEl) {
      const pre = codeEl.parentElement;
      if (pre.querySelector('.code-copy-btn')) return;
      const btn = document.createElement('button');
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

    // Style stat items: ✅ → good, ❌ → bad
    sectionContent.querySelectorAll('li').forEach(function (li) {
      const text = li.textContent;
      if (text.startsWith('✅')) li.classList.add('stat-good');
      else if (text.startsWith('❌')) li.classList.add('stat-bad');
    });

    // Add level classes to security table rows
    sectionContent.querySelectorAll('td').forEach(function (td) {
      const t = td.textContent.trim();
      if (t === '🟢 An toàn') td.parentElement.classList.add('level-safe');
      else if (t === '🟡 Cần xử lý') td.parentElement.classList.add('level-caution');
      else if (t === '🔴 Cấm') td.parentElement.classList.add('level-danger');
    });
    // Agenda links: navigate to section on click
    sectionContent.querySelectorAll('a.agenda-link[data-goto]').forEach(function (a) {
      a.style.cursor = 'pointer';
      a.addEventListener('click', function (e) {
        e.preventDefault();
        goTo(parseInt(a.dataset.goto, 10));
      });
    });

    // Style demo-links blockquotes and route links through viewer.html
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
    });  }

  // --- Update UI state ---
  function updateUI() {
    // Active nav item
    navList.querySelectorAll('.nav-item').forEach(function (item) {
      var link = item.querySelector('.nav-link');
      if (link) link.classList.toggle('active', +item.dataset.index === currentSection);
    });

    // Progress bar
    const pct = ((currentSection + 1) / totalSections) * 100;
    progressBar.style.width = pct + '%';
    progressText.textContent = (currentSection + 1) + ' / ' + totalSections;

    // Prev / Next buttons
    btnPrev.disabled = currentSection === 0;
    btnNext.disabled = currentSection === totalSections - 1;
    prevLabel.textContent = currentSection > 0 ? SECTIONS[currentSection - 1].shortTitle : '';
    nextLabel.textContent = currentSection < totalSections - 1 ? SECTIONS[currentSection + 1].shortTitle : '';
  }

  // --- Navigation ---
  function goTo(index) {
    if (index < 0 || index >= totalSections) return;
    currentSection = index;
    renderSection(currentSection);
    updateUI();
    saveState();
  }

  btnPrev.addEventListener('click', function () { goTo(currentSection - 1); });
  btnNext.addEventListener('click', function () { goTo(currentSection + 1); });

  // Keyboard shortcuts
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
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  themeToggle.addEventListener('click', toggleTheme);
  themeToggleMobile.addEventListener('click', toggleTheme);

  // Restore saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) setTheme(savedTheme);

  // --- Mobile menu ---
  function closeMobileMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    document.body.classList.remove('menu-open');
  }

  menuToggle.addEventListener('click', function () {
    const isOpen = sidebar.classList.contains('open');
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
    const saved = sessionStorage.getItem('currentSection');
    if (saved !== null) {
      const idx = parseInt(saved, 10);
      if (idx >= 0 && idx < totalSections) currentSection = idx;
    }
  }

  // --- Init ---
  restoreState();
  buildNav();
  renderSection(currentSection);
  updateUI();
})();
