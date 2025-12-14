document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // 1. Slider Settings (Keen Slider)
  // ==========================================
  const sliderContainer = document.getElementById("editor-choice-slider");
  const nextBtn = document.getElementById("slider-next");
  const prevBtn = document.getElementById("slider-prev");

  if (sliderContainer) {
    const slider = new KeenSlider("#editor-choice-slider", {
      loop: false,
      mode: "snap",
      rtl: true,
      slides: {
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 2, spacing: 16 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 16 },
        },
        "(min-width: 1280px)": {
          slides: { perView: 4, spacing: 16 },
        },
      },
      created(s) {
        updateNavigation(s);
      },
      slideChanged(s) {
        updateNavigation(s);
      },
    });

    if (nextBtn) {
      nextBtn.addEventListener("click", () => slider.next());
    }
    if (prevBtn) {
      prevBtn.addEventListener("click", () => slider.prev());
    }

    function updateNavigation(instance) {
      const current = instance.track.details.rel;
      const maxIdx = instance.track.details.maxIdx;

      if (prevBtn) {
        if (current > 0) {
          prevBtn.classList.remove("hidden");
          prevBtn.classList.add("flex");
        } else {
          prevBtn.classList.add("hidden");
          prevBtn.classList.remove("flex");
        }
      }

      if (nextBtn) {
        if (current < maxIdx) {
          nextBtn.classList.remove("hidden");
          nextBtn.classList.add("flex");
        } else {
          nextBtn.classList.add("hidden");
          nextBtn.classList.remove("flex");
        }
      }
    }
  }

  // ==========================================
  // 2. Video Modal Functionality
  // ==========================================
  const videoSection = document.querySelector(".group.relative.aspect-video");
  const videoModal = document.getElementById("video-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const videoFrame = document.getElementById("video-frame");

  const videoUrl = "https://www.aparat.com/video/video/embed/videohash/ia19665/vt/frame";

  if (videoSection && videoModal) {
    videoSection.addEventListener("click", function () {
      videoModal.classList.remove("hidden");
      videoModal.classList.add("flex");
      videoFrame.src = videoUrl;
    });

    const closeModal = () => {
      videoModal.classList.add("hidden");
      videoModal.classList.remove("flex");
      videoFrame.src = "";
    };

    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", closeModal);
    }

    videoModal.addEventListener("click", function (e) {
      if (e.target === videoModal) {
        closeModal();
      }
    });
  }
});
