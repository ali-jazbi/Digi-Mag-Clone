document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // 1. Mobile Menu
  // ==========================================
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenuBtn = document.getElementById("close-menu-btn");

  if (mobileMenuBtn && mobileMenu) {
    // Open menu
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-full");
      document.body.style.overflow = "hidden";
    });

    // Close menu
    const closeMenu = () => {
      mobileMenu.classList.add("translate-x-full");
      document.body.style.overflow = "";
    };

    if (closeMenuBtn) {
      closeMenuBtn.addEventListener("click", closeMenu);
    }

    // Close by clicking on overlay
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) {
        closeMenu();
      }
    });
  }

  // ==========================================
  // 2. Comment Form
  // ==========================================
  const commentForm = document.getElementById("comment-form");

  if (commentForm) {
    commentForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page refresh

      const name = document.getElementById("comment-name").value.trim();
      const email = document.getElementById("comment-email").value.trim();
      const message = document.getElementById("comment-message").value.trim();

      if (name && email && message) {
        // you can add actual form submission logic here
        alert(`دیدگاه شما با موفقیت ثبت شد، ${name} عزیز!\nپس از تایید مدیر نمایش داده می‌شود.`);
        commentForm.reset(); // Clear the form fields
      } else {
        alert("لطفاً تمام فیلدهای ستاره‌دار را پر کنید.");
      }
    });
  }

  // ==========================================
  // 3. (Search)
  // ==========================================
  const searchInputs = document.querySelectorAll('input[placeholder*="جستجو"]');
  searchInputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        alert(`شما عبارت "${input.value}" را جستجو کردید.`);
      }
    });
  });
});
// ==========================================
// 4. Slider (Auto Scroll)
// ==========================================
const relatedSlider = document.getElementById("related-products-slider");
const dotsContainer = document.getElementById("slider-dots");

if (relatedSlider) {
  const slider = new KeenSlider(
    "#related-products-slider",
    {
      loop: true,
      vertical: false,
      slides: {
        perView: 1,
        spacing: 0,
      },
    },
    [
      // پلاگین اتوپلی (Auto Play)
      (slider) => {
        let timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },

      (slider) => {
        if (!dotsContainer) return;

        function updateClasses(instance) {
          const slide = instance.track.details.rel;
          const dots = dotsContainer.querySelectorAll("button");

          dots.forEach((dot, idx) => {
            if (idx === slide) {
              dot.classList.remove("bg-gray-300");
              dot.classList.add("bg-psBlue");
            } else {
              dot.classList.add("bg-gray-300");
              dot.classList.remove("bg-psBlue");
            }
          });
        }

        slider.on("created", () => {
          const slidesCount = slider.track.details.slides.length;
          dotsContainer.innerHTML = ""; // claer previous dots if any

          for (let i = 0; i < slidesCount; i++) {
            const dot = document.createElement("button");
            dot.className = "h-1.5 w-1.5 rounded-full transition-colors cursor-pointer bg-gray-300 hover:bg-psBlue/50";

            dot.addEventListener("click", () => {
              slider.moveToIdx(i);
            });

            dotsContainer.appendChild(dot);
          }
          updateClasses(slider);
        });

        slider.on("slideChanged", updateClasses);
      },
    ],
  );
}
