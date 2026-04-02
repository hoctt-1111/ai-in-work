// app.js — Main application logic (slide-based navigation)
(function () {
  'use strict';

  // --- Build flat slides array from SECTIONS ---
  // Each section's markdown is split by '\n---\n' into individual slides
  var SLIDES = [];
  var sectionSlideMap = []; // sectionSlideMap[sectionId] = { start, count }

  SECTIONS.forEach(function (sec) {
    var parts = sec.markdown.split(/\n---\n/);
    var startIdx = SLIDES.length;
    parts.forEach(function (part, i) {
      SLIDES.push({
        sectionId: sec.id,
        sectionTitle: sec.title,
        shortTitle: sec.shortTitle,
        time: sec.time,
        icon: sec.icon,
        slideIndex: i,
        totalSlides: parts.length,
        markdown: part
      });
    });
    sectionSlideMap[sec.id] = { start: startIdx, count: parts.length };
  });

  // --- State ---
  var currentSlide = 0;
  var totalSlides = SLIDES.length;
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
      var slideCount = sectionSlideMap[sec.id].count;
      li.innerHTML =
        '<div class="nav-link">' +
          '<span class="nav-number">' + sec.icon + '</span>' +
          '<span>' + sec.shortTitle + '</span>' +
          '<span class="nav-time">' + sec.time + '</span>' +
        '</div>';
      li.addEventListener('click', function () {
        goToSlide(sectionSlideMap[sec.id].start);
        closeMobileMenu();
      });
      navList.appendChild(li);
    });
  }

  // --- Render a slide ---
  function renderSlide(slideIdx) {
    var slide = SLIDES[slideIdx];
    if (!slide) return;

    var slideIndicator = '';
    var slideDotsHTML = '';
    if (slide.totalSlides > 1) {
      slideIndicator = '<span class="slide-indicator">' + (slide.slideIndex + 1) + ' / ' + slide.totalSlides + '</span>';
      // Build dots + progress bar
      var dots = '';
      for (var d = 0; d < slide.totalSlides; d++) {
        var cls = 'slide-dot';
        if (d === slide.slideIndex) cls += ' active';
        else if (d < slide.slideIndex) cls += ' visited';
        dots += '<span class="' + cls + '" data-slide-offset="' + d + '"></span>';
      }
      var slidePct = ((slide.slideIndex + 1) / slide.totalSlides) * 100;
      slideDotsHTML =
        '<div class="slide-progress">' +
          '<div class="slide-dots">' + dots + '</div>' +
          '<div class="slide-progress-bar"><div class="slide-progress-fill" style="width:' + slidePct + '%"></div></div>' +
        '</div>';
    }

    // Build section header + rendered markdown
    var headerHTML =
      '<div class="section-header">' +
        '<span class="section-icon">' + slide.icon + '</span>' +
        '<div>' +
          '<h1 class="section-title">' + slide.sectionTitle + '</h1>' +
          '<div class="section-meta">' +
            '<span class="section-number">#' + slide.sectionId + '</span>' +
            '<span class="section-time">⏱ ' + slide.time + '</span>' +
            slideIndicator +
          '</div>' +
        '</div>' +
      '</div>' +
      slideDotsHTML;

    var bodyHTML = marked.parse(slide.markdown);

    // Store sectionId start for dot click navigation
    var sectionStart = sectionSlideMap[slide.sectionId].start;

    sectionContent.classList.add('fade-out');
    setTimeout(function () {
      sectionContent.innerHTML = headerHTML + '<div class="rendered-md">' + bodyHTML + '</div>';
      // Dot click navigation
      sectionContent.querySelectorAll('.slide-dot[data-slide-offset]').forEach(function (dot) {
        dot.style.cursor = 'pointer';
        dot.addEventListener('click', function () {
          goToSlide(sectionStart + parseInt(dot.dataset.slideOffset, 10));
        });
      });
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

    // Style stat items: ✅ → good, ❌ → bad
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

    // Agenda links: navigate to section on click
    sectionContent.querySelectorAll('a.agenda-link[data-goto]').forEach(function (a) {
      a.style.cursor = 'pointer';
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var sectionId = parseInt(a.dataset.goto, 10);
        goToSlide(sectionSlideMap[sectionId].start);
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
    });
  }

  // --- Get current section ID from slide index ---
  function getCurrentSectionId() {
    return SLIDES[currentSlide] ? SLIDES[currentSlide].sectionId : 0;
  }

  // --- Update UI state ---
  function updateUI() {
    var secId = getCurrentSectionId();

    // Active nav item — highlight current section
    navList.querySelectorAll('.nav-item').forEach(function (item) {
      var link = item.querySelector('.nav-link');
      if (link) link.classList.toggle('active', +item.dataset.index === secId);
    });

    // Progress bar — section-level
    var pct = ((secId + 1) / totalSections) * 100;
    progressBar.style.width = pct + '%';
    progressText.textContent = (secId + 1) + ' / ' + totalSections;

    // Prev / Next buttons
    btnPrev.disabled = currentSlide === 0;
    btnNext.disabled = currentSlide === totalSlides - 1;

    // Labels: show section shortTitle when crossing section boundary, else empty
    var prevSlide = currentSlide > 0 ? SLIDES[currentSlide - 1] : null;
    var nextSlide = currentSlide < totalSlides - 1 ? SLIDES[currentSlide + 1] : null;
    var currentSec = SLIDES[currentSlide];

    if (prevSlide && prevSlide.sectionId !== currentSec.sectionId) {
      prevLabel.textContent = prevSlide.shortTitle;
    } else {
      prevLabel.textContent = currentSlide > 0 ? '‹' : '';
    }

    if (nextSlide && nextSlide.sectionId !== currentSec.sectionId) {
      nextLabel.textContent = nextSlide.shortTitle;
    } else {
      nextLabel.textContent = currentSlide < totalSlides - 1 ? '›' : '';
    }
  }

  // --- Navigation ---
  function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    currentSlide = index;
    renderSlide(currentSlide);
    updateUI();
    saveState();
  }

  // Legacy goTo by section ID — jumps to first slide of that section
  function goTo(sectionId) {
    if (sectionSlideMap[sectionId]) {
      goToSlide(sectionSlideMap[sectionId].start);
    }
  }

  btnPrev.addEventListener('click', function () { goToSlide(currentSlide - 1); });
  btnNext.addEventListener('click', function () { goToSlide(currentSlide + 1); });

  // Keyboard shortcuts
  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); goToSlide(currentSlide - 1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); goToSlide(currentSlide + 1); }
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

  // Restore saved theme
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

  // --- Persist current slide ---
  function saveState() {
    sessionStorage.setItem('currentSlide', currentSlide);
  }

  function restoreState() {
    var saved = sessionStorage.getItem('currentSlide');
    if (saved !== null) {
      var idx = parseInt(saved, 10);
      if (idx >= 0 && idx < totalSlides) currentSlide = idx;
    }
  }

  // --- Init ---
  restoreState();
  buildNav();
  renderSlide(currentSlide);
  updateUI();
})();
