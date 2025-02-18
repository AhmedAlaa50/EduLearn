document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-wrapper input");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const courseGrid = document.querySelector(".course-grid");
  const courseCards = document.querySelectorAll(".course-card");
  const nextButton = document.querySelector(".next-btn");
  const prevButton = document.querySelector(".prev-btn");

  let currentScroll = 0;
  const scrollAmount = 300;

  // Search functionality
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    courseCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const shouldShow = title.includes(searchTerm);

      // if (shouldShow && card.className === "available") {
      //   card.style.display = "block";
      // } else {
      //   card.style.display = "none";
      // }
      card.style.display =
        shouldShow && card.className !== "unavailable" ? "block" : "none";
    });
  });

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filterValue = button.textContent.trim();

      courseCards.forEach((card) => {
        const level = card.querySelector(".course-level").textContent;
        if (filterValue === "All Levels" || level === filterValue) {
          card.style.display = "block";
          card.className = "available";
        } else {
          card.style.display = "none";
          card.className = "unavailable";
        }
      });
    });
  });

  // Horizontal scroll functionality
  nextButton.addEventListener("click", () => {
    currentScroll += scrollAmount;
    if (currentScroll > courseGrid.scrollWidth - courseGrid.clientWidth) {
      currentScroll = courseGrid.scrollWidth - courseGrid.clientWidth;
    }
    courseGrid.scrollTo({
      left: currentScroll,
      behavior: "smooth",
    });
    updateScrollButtons();
  });

  prevButton.addEventListener("click", () => {
    currentScroll -= scrollAmount;
    if (currentScroll < 0) {
      currentScroll = 0;
    }
    courseGrid.scrollTo({
      left: currentScroll,
      behavior: "smooth",
    });
    updateScrollButtons();
  });

  function updateScrollButtons() {
    prevButton.style.display = currentScroll <= 0 ? "none" : "flex";
    nextButton.style.display =
      currentScroll >= courseGrid.scrollWidth - courseGrid.clientWidth
        ? "none"
        : "flex";
  }

  // Initial button state
  updateScrollButtons();

  // Update buttons on window resize
  window.addEventListener("resize", updateScrollButtons);
});
