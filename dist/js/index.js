// Toggle dropdown display
const toggleDropdown = (dropdownSelector) => {
  const dropdown = document.querySelector(dropdownSelector);
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
};

// Initialize dropdowns
const initializeDropdowns = () => {
  for (let i = 1; i <= 2; i++) {
    const container = document.getElementById(`dropdown-container-${i}`);
    container.querySelectorAll('li').forEach((item) => {
      item.addEventListener("click", () => {
        document.querySelector(`#dropdown-button-${i} span:nth-child(1)`).textContent = item.textContent;
        container.style.display = "none";
      });
    });
  }
};

// Handle testimonials carousel
const initializeTestimonialsCarousel = () => {
  if (document.documentElement.clientWidth <= 900) {
    const testimonialsContainer = document.querySelector(".testimonials__container");
    testimonialsContainer.classList.add("siema");
  }

  new Siema({
    multipleDrag: false,
    loop: true,
    selector: ".siema",
    onChange: function () {
      const indicators = document.getElementsByClassName("testimonials__indicator");
      Array.from(indicators).forEach((indicator, index) => {
        indicator.style.backgroundColor = index === this.currentSlide ? "#E94F37" : "#fff";
      });
    },
  });
};

// Initialize everything on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeDropdowns();
  initializeTestimonialsCarousel();
});
