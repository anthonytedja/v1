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

	if (scrollToTop) {

		// Scroll to top button appear
		window.addEventListener('scroll', function () {
			var scrollDistance = window.pageYOffset;

			if (scrollDistance > 100) {
				//scrollToTop.style.display = 'block';
                scrollToTop.style.opacity = 1;
                scrollToTop.style.visibility = 'visible';
			} else {
				//scrollToTop.style.display = 'none';
                scrollToTop.style.opacity = 0;
                scrollToTop.style.visibility = 'hidden';
			}
		});
	}
})(); // End of use strict
