/* =====================================================================
   GALLERY.JS — Event-based lightbox
   Click on event card → opens lightbox with all photos from that event
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const lightbox   = document.getElementById("lightbox");
  const lbImg      = document.getElementById("lightbox-img");
  const lbCaption  = document.getElementById("lightbox-caption");
  const lbClose    = document.querySelector(".lightbox-close");
  const lbPrev     = document.querySelector(".lightbox-prev");
  const lbNext     = document.querySelector(".lightbox-next");

  if (!lightbox || !SITE_DATA || !SITE_DATA.gallery) return;

  let currentImages = [];
  let currentIndex  = 0;
  let currentEvent  = "";

  function openLightbox(eventIndex) {
    const ev = SITE_DATA.gallery[eventIndex];
    if (!ev || !ev.images || ev.images.length === 0) return;
    currentImages = ev.images;
    currentEvent  = ev.event;
    currentIndex  = 0;
    updateLightbox();
    lightbox.setAttribute("aria-hidden", "false");
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function updateLightbox() {
    const src = currentImages[currentIndex];
    lbImg.classList.add("lb-fade");
    setTimeout(() => {
      lbImg.src = src || "";
      lbImg.alt = currentEvent;
      lbCaption.textContent = currentEvent + "  —  " + (currentIndex + 1) + " / " + currentImages.length;
      lbImg.classList.remove("lb-fade");
    }, 150);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateLightbox();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateLightbox();
  }

  const galleryGrid = document.getElementById("gallery-grid");
  if (galleryGrid) {
    galleryGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".gallery-event-card");
      if (card) {
        const idx = parseInt(card.getAttribute("data-event-index"), 10);
        if (!isNaN(idx)) openLightbox(idx);
      }
    });
  }

  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbPrev)  lbPrev.addEventListener("click", prevImage);
  if (lbNext)  lbNext.addEventListener("click", nextImage);

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape")     closeLightbox();
    if (e.key === "ArrowLeft")  prevImage();
    if (e.key === "ArrowRight") nextImage();
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
});
