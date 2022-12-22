// Theme Settings & Toggles
// Note: Header script sets anthonytedja-data-theme according to local storage
localStorage.getItem('anthonytedja-data-theme') === 'light' ? light() : dark();

document.querySelector('#logo').addEventListener('click', function () {
	document.documentElement.getAttribute('anthonytedja-data-theme') === 'light' ? dark() : light();
});

function light() {
	document.documentElement.setAttribute('anthonytedja-data-theme', 'light');
	$('#code-website-theme').text('"masochist mode"');
	setTimeout(() => {
		$("#logo").attr("src", "/assets/img/light.svg");
	}, 100);
	localStorage.setItem('anthonytedja-data-theme', 'light');
	changeFavicon('dark');
}

function dark() {
	document.documentElement.setAttribute('anthonytedja-data-theme', 'dark');
	$('#code-website-theme').text('"midnight"');
	setTimeout(() => {
		$("#logo").attr("src", "/assets/img/dark.svg");
	}, 100);
	localStorage.setItem('anthonytedja-data-theme', 'dark');
	changeFavicon('light');
}

function changeFavicon(mode) {
	document.querySelectorAll("link[type='image/png']").forEach(function (e) {
		e.href = 'assets/img/favicon/' + e.sizes.value + mode + '.png';
	});
}
