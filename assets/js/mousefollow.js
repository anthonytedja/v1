const frontpage = $("#frontpage");
const fullname = document.getElementById("fullname");
const isTouchDevice = ('ontouchstart' in window || 'onmsgesturechange' in window);

if (!isTouchDevice && frontpage && fullname) {
	const xOrigin = frontpage.width() / 2;
	const yOrigin = frontpage.height() / 2;
	frontpage.on('mousemove', (e) => {
		transform(((e.clientY - yOrigin) / yOrigin * -15 + 10), ((e.clientX - xOrigin) / xOrigin * 15));
		clearTimeout(thread);
		thread = setTimeout(onmousestop, 1500);
	});

	let onmousestop = function () {
		transform(0, 0);
	}, thread;

	let transform = function (xRot, yRot) {
		fullname.animate({
			transform: `rotateX(${yRot * 0.4}deg) rotateY(${xRot * 0.4}deg)`,
			filter: `drop-shadow(clamp(-8px, ${yRot * -0.5}px, 8px) clamp(-8px, ${xRot * 0.5}px, 8px) 0px var(--name-shadow))`
		}, { duration: 250, fill: "forwards" });
	}
}
