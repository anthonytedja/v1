const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
document.getElementById('cat').addEventListener(touchEvent, animate);

function animate() {
	if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();

	if (animate.isRunning) return;
	animate.isRunning = true;

	console.log('animate');
	image = document.getElementById('cat');
	image.src = '/assets/img/cat-animate.gif';

	setTimeout(() => {
		image.src = '/assets/img/cat.gif';
		animate.isRunning = false;
	}, 3675);
}

var image = (new Image().src = '/assets/img/cat.gif');
