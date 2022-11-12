const frontpage = $("#frontpage");
const fullname = $('#fullname');
const isTouchDevice = ('ontouchstart' in window || 'onmsgesturechange' in window);

// Name Mouse Follow Effect
if (!isTouchDevice && frontpage && fullname) {
	let reset = true;
	const xOrigin = frontpage.width() / 2;
	const yOrigin = frontpage.height() / 2;
	frontpage.on('mousemove', (e) => {
		if (reset) {
			reset = false;
			setTimeout(onmousestart, 500);
		}

		transform(((e.clientY - yOrigin) / yOrigin * -15 + 10), ((e.clientX - xOrigin) / xOrigin * 20));
		clearTimeout(thread);
		thread = setTimeout(onmousestop, 1500);
	});

	let onmousestart = function () {
		fullname.css('transition', 'none');
	}

	let onmousestop = function () {
		fullname.css('transition', 'all ease 0.5s');
		fullname.css('transform', '');
		fullname.css('filter', '');
		reset = true;
	}, thread;

	let transform = function (xRot, yRot) {
		fullname.css('transform', `rotateX(${yRot * 0.2}deg) rotateY(${xRot * 0.2}deg)`);
		fullname.css('filter', `drop-shadow(clamp(-8px, ${yRot * -0.5}px, 8px) clamp(-8px, ${xRot * 0.5}px, 8px) 0px var(--name-shadow))`);
	}
}
