document.querySelector('#logo').addEventListener('click', function(e) {
	const currentTheme = localStorage.getItem('anthonytedja-data-theme');
	if (currentTheme === 'dark') {
		light();
	} else {
		dark();
	}
});

function changeFavicon(mode) {
	document.querySelectorAll("link[type='image/png']").forEach(function(e) {
		e.href = 'assets/img/' + e.sizes.value + mode + '.png';
	});
}

function light() {
	localStorage.setItem('anthonytedja-data-theme', 'light');
	document.documentElement.setAttribute('anthonytedja-data-theme', 'light');
	changeFavicon('dark');
    $('#code-website-theme').text('"light"');
    $('#logo').css('filter', 'invert(12%)');
    $('#logo').css('transform', 'rotate(0)');
    $('#click').css('filter', 'none');
    $('#hello').css('filter', 'invert(15%)');
    setTimeout(() => {
		$("#logo").attr("src","light.svg");
	}, 100);
}
function dark() {
	localStorage.setItem('anthonytedja-data-theme', 'dark');
	document.documentElement.setAttribute('anthonytedja-data-theme', 'dark');
	changeFavicon('light');
    $('#code-website-theme').text('"dark"');
    $('#logo').css('filter', 'invert(80%)');
    $('#logo').css('transform', 'rotate(180deg)');
    $('#click').css('filter', 'invert(90%)');
    $('#hello').css('filter', 'invert(80%)');
    setTimeout(() => {
		$("#logo").attr("src","dark.svg");
	}, 100);
}

let currentTheme = localStorage.getItem('anthonytedja-data-theme');
if (currentTheme === 'light') {
	light();
} else {
	dark();
}
