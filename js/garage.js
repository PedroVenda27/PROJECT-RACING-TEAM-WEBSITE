/* =====================================================================
   GARAGE.JS — Garage page: filtering, rendering, lightbox, filter toggle
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ── References ── */
  const grid              = document.getElementById("garage-grid");
  const lightbox          = document.getElementById("garage-lightbox");
  const lbImg             = document.getElementById("garage-lb-img");
  const lbCaption         = document.getElementById("garage-lb-caption");
  const lbClose           = document.getElementById("garage-lb-close");
  const countEl           = document.getElementById("garage-count");
  const noResults         = document.getElementById("garage-no-results");
  const groupBtns         = document.querySelectorAll(".filter-btn[data-group]");
  const compBtns          = document.querySelectorAll(".filter-btn[data-comp]");
  const mfgInput          = document.getElementById("filter-manufacturer");
  const clearBtn          = document.getElementById("filter-clear");
  const filtersBar        = document.getElementById("garageFiltersBar");
  const filterToggle      = document.getElementById("garageFilterToggle");
  const filterSection     = document.getElementById("garageFiltersSection");
  const activeCountBadge  = document.getElementById("activeFilterCount");

  if (!grid || typeof GARAGE_DATA === "undefined") return;

  /* ── State ── */
  let activeGroup = "All";
  let activeComp  = "All";
  let mfgQuery    = "";
  let filtersOpen = false; // collapsed by default on mobile

  /* ── Filter Toggle (show/hide) ── */
  function updateToggleState() {
    if (!filterToggle || !filtersBar) return;

    const isMobile = window.innerWidth <= 900;

    if (isMobile) {
      filterToggle.style.display = "flex";
      if (filtersOpen) {
        filtersBar.classList.add("filters-visible");
        filtersBar.classList.remove("filters-hidden");
        filterToggle.setAttribute("aria-expanded", "true");
        filterToggle.querySelector(".garage-filter-toggle-text").textContent = "Hide Filters";
        filterToggle.classList.add("toggle-active");
      } else {
        filtersBar.classList.remove("filters-visible");
        filtersBar.classList.add("filters-hidden");
        filterToggle.setAttribute("aria-expanded", "false");
        filterToggle.querySelector(".garage-filter-toggle-text").textContent = "Show Filters";
        filterToggle.classList.remove("toggle-active");
      }
    } else {
      // Desktop: always show filters, hide toggle button
      filterToggle.style.display = "none";
      filtersBar.classList.remove("filters-hidden");
      filtersBar.classList.add("filters-visible");
    }

    // Update active filter count badge
    updateActiveFilterBadge();
  }

  function updateActiveFilterBadge() {
    if (!activeCountBadge) return;
    let count = 0;
    if (activeGroup !== "All") count++;
    if (activeComp !== "All") count++;
    if (mfgQuery !== "") count++;

    if (count > 0) {
      activeCountBadge.textContent = count;
      activeCountBadge.style.display = "inline-flex";
    } else {
      activeCountBadge.style.display = "none";
    }
  }

  if (filterToggle) {
    filterToggle.addEventListener("click", () => {
      filtersOpen = !filtersOpen;
      updateToggleState();
    });
  }

  // On resize, re-evaluate toggle state
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateToggleState, 150);
  }, { passive: true });

  // Initialize toggle state
  updateToggleState();

  /* ── Render grid ── */
  function renderGrid() {
    const filtered = GARAGE_DATA.filter(car => {
      const matchGroup = activeGroup === "All" || car.group === activeGroup;
      const matchComp  = activeComp  === "All" || car.competition === activeComp;
      const matchMfg   = mfgQuery === "" || car.manufacturer.toLowerCase().includes(mfgQuery);
      return matchGroup && matchComp && matchMfg;
    });

    grid.innerHTML = "";
    countEl.textContent = filtered.length;

    if (filtered.length === 0) {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
    }

    filtered.forEach((car, i) => {
      const card = document.createElement("div");
      card.className = "garage-card anim-fade-up";
      card.setAttribute("data-id", car.id);
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `View ${car.name}`);
      // stagger animation
      card.style.animationDelay = `${Math.min(i * 0.04, 0.6)}s`;

      card.innerHTML = `
        <div class="garage-thumb-wrap">
          <img
            src="${car.thumbnail}"
            alt="${car.name}"
            class="garage-thumb-img"
            loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          />
          <div class="garage-thumb-placeholder" style="display:none;">
            <span>🏎️</span>
          </div>
          <div class="garage-thumb-overlay">
            <span class="garage-zoom-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.49 4.49 0 0 1 9.5 14Zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2V7Z"/>
              </svg>
            </span>
          </div>
        </div>
        <div class="garage-card-info">
          <h3 class="garage-card-name">${car.name}</h3>
          <div class="garage-card-tags">
            <span class="garage-tag garage-tag-group">${car.group}</span>
            <span class="garage-tag garage-tag-comp">${car.competition}</span>
          </div>
          <span class="garage-card-mfg">${car.manufacturer}</span>
        </div>
      `;

      card.addEventListener("click", () => openLightbox(car));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(car);
        }
      });

      grid.appendChild(card);
    });

    // Re-trigger animations with Intersection Observer
    requestAnimationFrame(() => {
      grid.querySelectorAll(".garage-card").forEach(el => {
        garageObserver.observe(el);
      });
    });

    // Update badge
    updateActiveFilterBadge();
  }

  /* ── Intersection Observer for card animations ── */
  const garageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        garageObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });

  /* ── Lightbox ── */
  function openLightbox(car) {
    lbImg.src = car.fullsize || "";
    lbImg.alt = car.name || "";
    lbCaption.textContent = car.name || "";
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Handle image load error in lightbox
    lbImg.onerror = function() {
      this.src = "";
      this.alt = "Image not available";
      lbCaption.textContent = car.name + " — Image not available";
    };
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("garage-lb-backdrop")) {
      closeLightbox();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });

  /* ── Filter: Group buttons ── */
  groupBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      groupBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeGroup = btn.getAttribute("data-group");
      renderGrid();
    });
  });

  /* ── Filter: Competition buttons ── */
  compBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      compBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeComp = btn.getAttribute("data-comp");
      renderGrid();
    });
  });

  /* ── Filter: Manufacturer text input ── */
  if (mfgInput) {
    mfgInput.addEventListener("input", () => {
      mfgQuery = mfgInput.value.trim().toLowerCase();
      renderGrid();
    });
  }

  /* ── Clear all filters ── */
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      activeGroup = "All";
      activeComp  = "All";
      mfgQuery    = "";
      if (mfgInput) mfgInput.value = "";
      groupBtns.forEach(b => b.classList.remove("active"));
      compBtns.forEach(b => b.classList.remove("active"));
      // Set "All" active
      groupBtns.forEach(b => { if (b.getAttribute("data-group") === "All") b.classList.add("active"); });
      compBtns.forEach(b => { if (b.getAttribute("data-comp") === "All") b.classList.add("active"); });
      renderGrid();
    });
  }

  /* ── Initial render ── */
  renderGrid();

});
