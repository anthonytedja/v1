const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
const cat = $('#cat');

// Animate Cat on Clicks
if (cat) {
	cat.on(touchEvent, animate);
	function animate(e) {
		if (!e) var e = window.event;
		e.cancelBubble = true;
		if (e.stopPropagation) e.stopPropagation();
		if (animate.isRunning) return;

		animate.isRunning = true;
		cat.attr('src', '/assets/img/cat-animate.gif');

		setTimeout(() => {
			cat.attr('src', '/assets/img/cat.gif');
			animate.isRunning = false;
		}, 3675);
	}
}
