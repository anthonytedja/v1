(function () {
	"use strict"; // Start of use strict

	var mainNav = document.querySelector('#mainNav');

	if (mainNav) {

		var navbarCollapse = mainNav.querySelector('.navbar-collapse');

		if (navbarCollapse) {

			var collapse = new bootstrap.Collapse(navbarCollapse, {
				toggle: false
			});

			var navbarItems = navbarCollapse.querySelectorAll('a');

			// Closes responsive menu when a scroll trigger link is clicked

			for (var item of navbarItems) {
				item.addEventListener('click', function (event) {
					collapse.hide();
				});
			}

			document.querySelector('#navbar-logo').addEventListener('click', function (event) {
				collapse.hide();
			});
			document.querySelector('.scroll-to-top').addEventListener('click', function (event) {
				collapse.hide();
			});
		}

		// Collapse Navbar
		var collapse = new bootstrap.Collapse(navbarCollapse, {
			toggle: false
		});
		// Collapse now if page is not at top
		collapse.hide();
		// Collapse the navbar when page is scrolled
		document.addEventListener("scroll", collapse.hide());
	}

	// Scroll to top button appear
	var scrollToTop = document.querySelector('.scroll-to-top');
    var navbarlogo = document.querySelector('#navbar-logo');
    var mainnav = document.querySelector('#mainNav');
    var navbartoggle = document.querySelector('#navbartoggle');

	if (scrollToTop && navbarlogo && navbartoggle && mainnav) {

		// Scroll to top button appear
		window.addEventListener('scroll', function () {
			var scrollDistance = window.pageYOffset;

			if (scrollDistance > 100) {
				//scrollToTop.style.display = 'block';
                scrollToTop.classList.add("shown");
                navbarlogo.classList.add("shown");
                navbartoggle.classList.add("shown");
                
                scrollToTop.classList.remove("hidden");
                navbarlogo.classList.remove("hidden");
                navbartoggle.classList.remove("hidden");
                
                mainnav.classList.add("navbarblur");
			} else {
				//scrollToTop.style.display = 'none';
                scrollToTop.classList.add("hidden");
                navbarlogo.classList.add("hidden");
                navbartoggle.classList.add("hidden");
                
                scrollToTop.classList.remove("shown");
                navbarlogo.classList.remove("shown");
                navbartoggle.classList.remove("shown");
                
                mainnav.classList.remove("navbarblur");
			}
		});
	}
})(); // End of use strict
