(function () {
  "use strict"; // Start of use strict

  var mainNav = document.querySelector(".navbar");

  if (mainNav) {
    var navbarCollapse = mainNav.querySelector(".navbar-collapse");

    if (navbarCollapse) {
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });

      var navbarItems = navbarCollapse.querySelectorAll("a");

      // Closes responsive menu when a scroll trigger link is clicked

      for (var item of navbarItems) {
        item.addEventListener("click", function (event) {
          collapse.hide();
        });
      }

      document
        .querySelector(".navbar-brand")
        .addEventListener("click", function (event) {
          collapse.hide();
        });
      document
        .querySelector(".scroll-to-top")
        .addEventListener("click", function (event) {
          collapse.hide();
        });
      // Collapse the navbar when page is scrolled
      window.onscroll = () => collapse.hide();
    }

    // Collapse Navbar
    var collapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });
    // Collapse now if page is not at top
    collapse.hide();
  }

  // Scroll to top button appear
  var scrollToTop = document.querySelector(".scroll-to-top");
  var navbarbrand = document.querySelector(".navbar-brand");
  var navbartoggle = document.querySelector(".navbar-toggler");

  if (scrollToTop && navbarbrand && navbartoggle) {
    // Scroll to top button appear
    window.addEventListener("scroll", function () {
      var scrollDistance = window.pageYOffset;

      if (scrollDistance > 100) {
        //scrollToTop.style.display = 'block';
        scrollToTop.classList.add("shown");
        navbarbrand.classList.add("shown");
        navbartoggle.classList.add("shown");

        scrollToTop.classList.remove("hidden");
        navbarbrand.classList.remove("hidden");
        navbartoggle.classList.remove("hidden");

        mainNav.classList.add("navbarblur");
      } else {
        //scrollToTop.style.display = 'none';
        scrollToTop.classList.add("hidden");
        navbarbrand.classList.add("hidden");
        navbartoggle.classList.add("hidden");

        scrollToTop.classList.remove("shown");
        navbarbrand.classList.remove("shown");
        navbartoggle.classList.remove("shown");

        mainNav.classList.remove("navbarblur");
      }
    });
  }
})(); // End of use strict
