
if (window.innerWidth < 768) {
	[].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
		elem.classList.remove('animated');
		elem.removeAttribute('data-bss-hover-animate');
		elem.removeAttribute('data-aos');
		elem.removeAttribute('data-bss-parallax-bg');
		elem.removeAttribute('data-bss-scroll-zoom');
	});
}

document.addEventListener('DOMContentLoaded', function() {
	if ('AOS' in window) {
		AOS.init();
	}

	var hoverAnimationTriggerList = [].slice.call(document.querySelectorAll('[data-bss-hover-animate]'));
	var hoverAnimationList = hoverAnimationTriggerList.forEach(function (hoverAnimationEl) {
		hoverAnimationEl.addEventListener('mouseenter', function(e){ e.target.classList.add('animated', e.target.dataset.bssHoverAnimate) });
		hoverAnimationEl.addEventListener('mouseleave', function(e){ e.target.classList.remove('animated', e.target.dataset.bssHoverAnimate) });
	});

	var toastTriggers = document.querySelectorAll('[data-bs-toggle="toast"]');

	for (let toastTrigger of toastTriggers) {
		toastTrigger.addEventListener('click', function () {
			var toastSelector = toastTrigger.getAttribute('data-bs-target');

			if (!toastSelector) return;

			try {
				var toastEl = document.querySelector(toastSelector);

				if (!toastEl) return;

				var toast = new bootstrap.Toast(toastEl);
				toast.show();
			}
			catch(e) {
				console.error(e);
			}
		})
	}
}, false);