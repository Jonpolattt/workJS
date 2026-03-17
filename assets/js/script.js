window.addEventListener("DOMContentLoaded", function () {
  // DARK MODE
  const btnDark = document.querySelector(".darkMode-btn");

  const moonIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  class="lucide lucide-moon w-5 h-5">
  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
</svg>
`;
  const sunIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  class="lucide lucide-sun w-5 h-5">
  <circle cx="12" cy="12" r="4"></circle>
  <path d="M12 2v2"></path>
  <path d="M12 20v2"></path>
  <path d="m4.93 4.93 1.41 1.41"></path>
  <path d="m17.66 17.66 1.41 1.41"></path>
  <path d="M2 12h2"></path>
  <path d="M20 12h2"></path>
  <path d="m6.34 17.66-1.41 1.41"></path>
  <path d="m19.07 4.93-1.41 1.41"></path>
</svg>
`;

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    btnDark.innerHTML = sunIcon;
  } else {
    btnDark.innerHTML = moonIcon;
  }

  btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      btnDark.innerHTML = sunIcon;
      localStorage.setItem("theme", "dark");
    } else {
      btnDark.innerHTML = moonIcon;
      localStorage.setItem("theme", "light");
    }
  });

  //   Loader
  const loader = document.querySelector(".loader-wrapper");
  document.body.classList.add("loading");
  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.remove("loading");
    }, 500);
  }, 500);

  // Navbar
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 1) {
      nav.classList.add("fix");
    } else {
      nav.classList.remove("fix");
    }
  });

  //   Up BUTTON
  const upBtn = document.querySelector(".up-wrapper");
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 250) {
      upBtn.classList.add("show");
    } else {
      upBtn.classList.remove("show");
    }
  });

  upBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  //   BURGER
  const burger = document.querySelector(".nav-menu"),
    burgerBtn = document.querySelector(".burger-btn");

  burgerBtn.addEventListener("click", function () {
    burger.classList.toggle("nav-menu__active");
  });

  //   CARUSEL
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let currentIndex = 0;
  const slideWidth = slides[0].clientWidth;

  function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  let slideInterval;
  function autoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function nextSlide() {
    if (currentIndex === slides.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    updateSlide();
  }

  function prevSlide() {
    if (currentIndex === 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex--;
    }

    updateSlide();
  }

  nextBtn.addEventListener("click", () => {
    clearInterval(slideInterval);
    nextSlide();
    autoSlide();
  });
  prevBtn.addEventListener("click", () => {
    clearInterval(slideInterval);
    prevSlide();
    autoSlide();
  });

  autoSlide();

  // TABS
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContents = document.querySelectorAll(".tab_content"),
    tabParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabContents.forEach((item, index) => {
      item.classList.add('hide');
      item.classList.remove('show')
    });
  }

  hideTabContent()
});
