/* =====================================================================
   MAIN.JS — Core site functionality
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ── Footer year ── */
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Hero wallpaper slideshow ── */
  const slides = document.querySelectorAll(".hero-wallpaper-slide");
  if (slides.length > 1) {
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 6000);
  }

  /* ══════════════════════════════════════════════════════════════════
     MOBILE NAV
     ══════════════════════════════════════════════════════════════════ */
  const toggle = document.getElementById("navToggle");
  const links  = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.classList.toggle("active");
      toggle.setAttribute("aria-expanded", open);
    });
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ══════════════════════════════════════════════════════════════════
     STICKY HEADER
     ══════════════════════════════════════════════════════════════════ */
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  /* ══════════════════════════════════════════════════════════════════
     SCROLL ANIMATIONS (Intersection Observer)
     ══════════════════════════════════════════════════════════════════ */
  const animEls = document.querySelectorAll(
    ".anim-fade-up, .anim-fade-down, .anim-slide-left, .anim-slide-right, .anim-fade-in"
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  animEls.forEach(el => observer.observe(el));

  /* ══════════════════════════════════════════════════════════════════
     COUNTER ANIMATION
     ══════════════════════════════════════════════════════════════════ */
  // Update driver count dynamically from SITE_DATA
  const driverCountEl = document.querySelector(".stat-number[data-count='20']");
  if (driverCountEl && typeof SITE_DATA !== "undefined") {
    driverCountEl.setAttribute("data-count", SITE_DATA.drivers.length);
  }

  const counters = document.querySelectorAll(".stat-number[data-count]");
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObs.observe(c));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const duration = 2000;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  /* ══════════════════════════════════════════════════════════════════
     HERO PARALLAX (scroll-driven)
     ══════════════════════════════════════════════════════════════════ */
  const heroParallax = document.querySelector(".hero-parallax");
  if (heroParallax) {
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;
      // Move the background image at 40% speed of scroll for parallax
      heroParallax.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;
    }, { passive: true });
  }

  /* ══════════════════════════════════════════════════════════════════
     RENDER DRIVERS  (4×4 grid)
     ══════════════════════════════════════════════════════════════════ */
  const driversGrid = document.getElementById("drivers-grid");
  if (driversGrid && SITE_DATA.drivers) {
    const potm = SITE_DATA.drivers.find(d => d.pilotoMes);
    const rest = SITE_DATA.drivers.filter(d => !d.pilotoMes);

    const potmHTML = potm ? `
      <article class="driver-card-potm-featured anim-fade-up" aria-label="${potm.name}">
        <div class="potm-featured-left">
          <div class="potm-featured-img-wrap">
            ${potm.image
              ? `<img src="${potm.image}" alt="${potm.name}" loading="lazy" onerror="this.style.display='none';" />`
              : `<div class="driver-placeholder"><span>${potm.number}</span></div>`
            }
            <div class="driver-number">#${potm.number}</div>
          </div>
        </div>
        <div class="potm-featured-right">
          <div class="potm-featured-badge">⭐ Piloto do Mês</div>
          <h2 class="potm-featured-name">${potm.name}</h2>
          <p class="potm-featured-role">${potm.role}</p>
          <p class="potm-featured-series">${potm.series}</p>
          <div class="potm-featured-flag">
            <img src="https://flagcdn.com/w20/${({'Portugal':'pt','Brasil':'br','Cabo Verde':'cv'}[potm.nationality]||'pt')}.png" alt="${potm.nationality}" width="22" height="16">
            <span>${potm.nationality}</span>
          </div>
          <a href="https://www.dg-edge.com/players/${potm.role}" target="_blank" rel="noopener" class="potm-edge-link">
            <img src="images/EDGE.png" alt="Edge" style="height:28px;width:auto;opacity:0.9;" />
          </a>
        </div>
      </article>` : '';

    const cardsHTML = rest.map((d, i) => `
      <article class="driver-card anim-fade-up delay-${Math.min(i % 4, 3)}" aria-label="${d.name}">
        <div class="driver-img-wrap">
          ${d.image
            ? `<img src="${d.image}" alt="Photo of ${d.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
               <div class="driver-placeholder" style="display:none;"><span>${d.number}</span></div>`
            : `<div class="driver-placeholder"><span>${d.number}</span></div>`
          }
          <div class="driver-number">#${d.number}</div>
          <div class="driver-nationality-badge">
            <img src="https://flagcdn.com/w20/${({'Portugal':'pt','Brasil':'br','Cabo Verde':'cv'}[d.nationality]||'pt')}.png" alt="${d.nationality}" width="18" height="13">
            <span>${d.nationality}</span>
          </div>
        </div>
        <div class="driver-info" style="display:flex;justify-content:space-between;align-items:flex-end;">
          <div>
            <h3 class="driver-name">${d.name}${d.admin ? ' <span style="background:#CCFF00;color:#000;font-size:0.65rem;font-weight:800;padding:2px 7px;border-radius:4px;letter-spacing:1px;vertical-align:middle;text-transform:uppercase;">Admin</span>' : ''}</h3>
            <p class="driver-role">${d.role}</p>
            <p class="driver-series">${d.series}</p>
          </div>
          <a href="https://www.dg-edge.com/players/${d.role}" target="_blank" rel="noopener" title="Ver perfil Edge de ${d.role}">
            <img src="images/EDGE.png" alt="Edge" style="height:20px;width:auto;opacity:0.9;transition:opacity 0.2s;margin-bottom:2px;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.9'" />
          </a>
        </div>
      </article>
    `).join("");

    driversGrid.innerHTML = potmHTML + cardsHTML;
    driversGrid.querySelectorAll(".anim-fade-up").forEach(el => observer.observe(el));
  }

  /* ══════════════════════════════════════════════════════════════════
     RENDER LEAGUES
     ══════════════════════════════════════════════════════════════════ */
  function renderLeagues() {
  const container = document.getElementById('leagues-grid');
  if (!container || !SITE_DATA.leagues) return;

  // Build the slider HTML
  let html = `
    <div class="leagues-slider-wrapper">
      <button class="leagues-arrow leagues-arrow-left" aria-label="Previous leagues">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <div class="leagues-slider-track">
  `;

  SITE_DATA.leagues.forEach((league, index) => {
    html += `
      <div class="league-slide" data-index="${index}">
        <a href="${league.url}" target="_blank" rel="noopener" class="league-card">
          <div class="league-logo-wrapper">
            <img src="${league.logo}" alt="${league.name}" class="league-logo"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="league-logo-fallback" style="display:none;">🏁</div>
          </div>
          <h3>${league.name}</h3>
          <span class="league-platform">${league.platform}</span>
          <p>${league.description}</p>
        </a>
      </div>
    `;
  });

  html += `
      </div>
      <button class="leagues-arrow leagues-arrow-right" aria-label="Next leagues">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
    <div class="leagues-dots"></div>
  `;

  container.innerHTML = html;

  // Slider logic
  const track = container.querySelector('.leagues-slider-track');
  const slides = container.querySelectorAll('.league-slide');
  const leftArrow = container.querySelector('.leagues-arrow-left');
  const rightArrow = container.querySelector('.leagues-arrow-right');
  const dotsContainer = container.querySelector('.leagues-dots');
  const totalSlides = slides.length;

  let currentIndex = 0;
  let visibleCount = 4;
  let autoplayInterval;

  function getVisibleCount() {
    const width = window.innerWidth;
    if (width <= 600) return 1;
    if (width <= 900) return 2;
    if (width <= 1100) return 3;
    return 4;
  }

  function buildDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = 'leagues-dot' + (i === currentIndex ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to card ' + (i + 1));
      dot.addEventListener('click', () => {
        currentIndex = i;
        // Clamp so we don't scroll past the end
        const maxIndex = totalSlides - visibleCount;
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        if (currentIndex < 0) currentIndex = 0;
        updateSlider();
        resetAutoplay();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateSlider() {
    visibleCount = getVisibleCount();
    const maxIndex = totalSlides - visibleCount;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    const slideWidth = 100 / visibleCount;
    slides.forEach(s => s.style.flex = `0 0 ${slideWidth}%`);

    const offset = -(currentIndex * slideWidth);
    track.style.transform = `translateX(${offset}%)`;

    // Update dots — highlight the "range" of visible cards
    const dots = dotsContainer.querySelectorAll('.leagues-dot');
    dots.forEach((d, i) => {
      const inView = i >= currentIndex && i < currentIndex + visibleCount;
      d.classList.toggle('active', inView);
    });

    // Update arrows
    leftArrow.style.opacity = currentIndex === 0 ? '0.3' : '1';
    leftArrow.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
    rightArrow.style.opacity = currentIndex >= maxIndex ? '0.3' : '1';
    rightArrow.style.pointerEvents = currentIndex >= maxIndex ? 'none' : 'auto';

    buildDots();
  }

  function nextSlide() {
    const maxIndex = totalSlides - visibleCount;
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  }

  function prevSlide() {
    const maxIndex = totalSlides - visibleCount;
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = maxIndex;
    }
    updateSlider();
  }

  function startAutoplay() {
    // Guard: clear any existing interval before starting a new one
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  // Event listeners
  leftArrow.addEventListener('click', () => { prevSlide(); resetAutoplay(); });
  rightArrow.addEventListener('click', () => { nextSlide(); resetAutoplay(); });

  // Pause autoplay on hover
  container.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
  container.addEventListener('mouseleave', () => startAutoplay());

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
      resetAutoplay();
    }
  }, { passive: true });

  // Handle resize
  window.addEventListener('resize', () => {
    visibleCount = getVisibleCount();
    updateSlider();
  });

  // Initialize
  visibleCount = getVisibleCount();
  updateSlider();
  startAutoplay();
}

   renderLeagues();

  /* ══════════════════════════════════════════════════════════════════
     RENDER GALLERY
     ══════════════════════════════════════════════════════════════════ */
  const galleryGrid    = document.getElementById("gallery-grid");
  const galleryFilters = document.getElementById("gallery-filters");
  if (galleryGrid && SITE_DATA.gallery) {

    const cats = ["Todos", ...new Set(SITE_DATA.gallery.map(g => g.category).filter(Boolean))];
    let activeCategory = "Todos";

    function renderGallery() {
      const filtered = activeCategory === "Todos"
        ? SITE_DATA.gallery
        : SITE_DATA.gallery.filter(g => g.category === activeCategory);

      galleryGrid.innerHTML = filtered.map((g, i) => `
        <div class="gallery-item gallery-event-card" data-event-index="${SITE_DATA.gallery.indexOf(g)}">
          ${g.cover
            ? `<img src="${g.cover}" alt="${g.event}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
               <div class="gallery-placeholder" style="display:none;"><span class="gallery-brevemente">Brevemente</span></div>`
            : `<div class="gallery-placeholder"><span class="gallery-brevemente">Brevemente</span></div>`
          }
          <div class="gallery-overlay">
            <span class="gallery-caption gallery-caption-title">${g.event}</span>
            <span class="gallery-caption gallery-caption-sub">${g.sub || ""}</span>
            ${g.images && g.images.length > 0 ? `<span class="gallery-count">${g.images.length} fotos</span>` : ""}
          </div>
          <div class="gallery-play-icon">▶</div>
        </div>
      `).join("");
      galleryGrid.querySelectorAll(".anim-fade-in").forEach(el => observer.observe(el));
    }

    if (galleryFilters) {
      galleryFilters.innerHTML = cats.map(c => `
        <button class="gallery-filter-btn${c === "Todos" ? " active" : ""}" data-cat="${c}">${c}</button>
      `).join("");
      galleryFilters.querySelectorAll(".gallery-filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          galleryFilters.querySelectorAll(".gallery-filter-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          activeCategory = btn.dataset.cat;
          renderGallery();
        });
      });
    }

    renderGallery();
  }

  /* ══════════════════════════════════════════════════════════════════
     RENDER SPONSORS — Single row, no tier categories
     ══════════════════════════════════════════════════════════════════ */
  const sponsorsContainer = document.getElementById("sponsors-container");
  if (sponsorsContainer && SITE_DATA.sponsors) {
    function sponsorCard(s, i) {
      const isEmpty = !s.name && !s.logo;
      const tag = isEmpty ? 'div' : 'a';
      const attrs = isEmpty
        ? `class="sponsor-card sponsor-gold sponsor-empty anim-fade-up delay-${Math.min(i % 3, 2)}"`
        : `href="${s.url}" target="_blank" rel="noopener noreferrer" class="sponsor-card sponsor-gold anim-fade-up delay-${Math.min(i % 3, 2)}" aria-label="${s.name}"`;
      return `
        <${tag} ${attrs}>
          <div class="sponsor-logo-wrap">
            ${isEmpty
              ? `<div class="sponsor-placeholder sponsor-available"><span>O seu logo aqui</span></div>`
              : s.logo
                ? `<img src="${s.logo}" alt="${s.name} logo" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
                   <div class="sponsor-placeholder" style="display:none;"><span>${s.name}</span></div>`
                : `<div class="sponsor-placeholder"><span>${s.name}</span></div>`
            }
          </div>
          <span class="sponsor-name">${isEmpty ? 'Em Breve' : s.name}</span>
        </${tag}>
      `;
    }

    const html = `<div class="sponsors-tier-section">
      <div class="sponsors-row sponsors-row-gold">
        ${SITE_DATA.sponsors.map((s, i) => sponsorCard(s, i)).join("")}
      </div>
    </div>`;

    sponsorsContainer.innerHTML = html;
    sponsorsContainer.querySelectorAll(".anim-fade-up").forEach(el => observer.observe(el));
  }

  /* ══════════════════════════════════════════════════════════════════
     CONTACT FORM (with Formspree + mailto fallback)
     ══════════════════════════════════════════════════════════════════ */
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      const action = form.getAttribute("action");
      const status = document.getElementById("form-status");
      const btnText = document.querySelector(".btn-text");
      const btnLoad = document.querySelector(".btn-loading");

      // If Formspree not configured, use mailto fallback
      if (!action || action.includes("YOUR_FORMSPREE_ID")) {
        e.preventDefault();
        const name    = form.name.value.trim();
        const email   = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !subject || !message) {
          status.textContent = "Please fill in all fields.";
          status.className = "form-status error";
          return;
        }

        const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
        const mailto = `mailto:rtp.racingteamproject@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        window.location.href = mailto;
        status.textContent = "A abrir o teu cliente de email... Se nada acontecer, contacta-nos diretamente em rtp.racingteamproject@gmail.com";
        status.className = "form-status success";
        return;
      }

      // Formspree submit (AJAX)
      e.preventDefault();
      if (btnText) btnText.hidden = true;
      if (btnLoad) btnLoad.hidden = false;

      try {
        const res = await fetch(action, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        });
        if (res.ok) {
          status.textContent = "Obrigado pelo contacto! Vamos responder o mais brevemente possível. — RTP";
          status.className = "form-status success";
          form.reset();
        } else {
          throw new Error("Server error");
        }
      } catch (err) {
        status.textContent = "Something went wrong. Please try again or email us directly.";
        status.className = "form-status error";
      } finally {
        if (btnText) btnText.hidden = false;
        if (btnLoad) btnLoad.hidden = true;
      }
    });
  }

  /* ══════════════════════════════════════════════════════════════════
     SMOOTH SCROLL for same-page anchors
     ══════════════════════════════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

});
