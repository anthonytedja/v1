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
				scrollToTop.style.display = 'block';
			} else {
				scrollToTop.style.display = 'none';
			}
		});
	}
})(); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function (e) {
	this.addEventListener('click', onMapClickHandler);
	this.removeEventListener('mouseleave', onMapMouseleaveHandler);

	var iframe = this.querySelector('iframe');

	if (iframe) {
		iframe.style.pointerEvents = 'none';
	}
}

var onMapClickHandler = function (e) {
	// Disable the click handler until the user leaves the map area
	this.removeEventListener('click', onMapClickHandler);
	// Handle the mouse leave event
	this.addEventListener('mouseleave', onMapMouseleaveHandler);

	// Enable scrolling zoom
	var iframe = this.querySelector('iframe');

	if (iframe) {
		iframe.style.pointerEvents = 'auto';
	}
}

var maps = document.querySelectorAll('.map');

for (var map of maps) {
	// Enable map zooming with mouse scroll when the user clicks the map
	map.addEventListener('click', onMapClickHandler);
}
