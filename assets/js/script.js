window.addEventListener("DOMContentLoaded", function () {
  // Dark mode
  const btnDark = document.querySelector(".darkMode-btn");

  btnDark.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("dark");
  });

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

  //   Navigator
  const navWrapper = document.querySelector(".navigator"),
    tabs = navWrapper.querySelectorAll("li a");

  function activeTab(index = 0) {
    tabs[index].classList.add("nav_active");
  }

  function hideTabs() {
    tabs.forEach((item) => {
      item.classList.remove("nav_active");
    });
  }

  navWrapper.addEventListener("click", function (e) {
    const target = e.target;

    if (target && target.tagName === "A") {
      tabs.forEach((item, index) => {
        if (item === target) {
          hideTabs();
          activeTab(index);
        }
      });
    }
  });

  const burger = document.querySelector(".nav-menu"),
    burgerBtn = document.querySelector(".burger-btn");

  burgerBtn.addEventListener("click", function () {
    burger.classList.toggle("active");
  });

  //   CARUSEL
  
});
