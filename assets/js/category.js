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
      mobileMenu.classList.remove("translate-x-full"); // Menu enters the page
      document.body.style.overflow = "hidden"; // Prevent page scroll
    });

    // Close menu
    const closeMenu = () => {
      mobileMenu.classList.add("translate-x-full"); // Menu leaves the page
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
  // 2. Show More Button for Description
  // ==========================================
  const toggleDescBtn = document.getElementById("toggle-desc-btn");
  const descText = document.getElementById("desc-text");
  const toggleIcon = document.getElementById("toggle-icon");

  if (toggleDescBtn && descText) {
    toggleDescBtn.addEventListener("click", () => {
      // Toggle line-clamp-3 class
      const isExpanded = !descText.classList.contains("line-clamp-3");

      if (isExpanded) {
        // Collapse text
        descText.classList.add("line-clamp-3");
        toggleDescBtn.innerHTML = `
            نمایش کامل
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>`;
      } else {
        // Expand text
        descText.classList.remove("line-clamp-3");
        toggleDescBtn.innerHTML = `
          مخفی کردن
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>`;
      }
    });
  }

  // ==========================================
  // 3. Sorting Dropdowns
  // ==========================================
  // Select all dropdown containers
  const dropdowns = document.querySelectorAll(".custom-dropdown");

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(".dropdown-trigger");
    const labelSpan = trigger.querySelector("span"); // The text to update
    const options = dropdown.querySelectorAll(".dropdown-item");

    options.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.preventDefault();
        // Change trigger text to selected item text
        if (labelSpan) {
          labelSpan.textContent = option.textContent.trim();
        }
        // You can add filter logic here
      });
    });
  });

  // ==========================================
  // 4. Search
  // ==========================================
  const searchInputs = document.querySelectorAll('input[placeholder*="جستجو"]');

  searchInputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        alert(`You searched for "${input.value}".\n(Backend connection required)`);
      }
    });
  });
});
