document.querySelector('#logo').addEventListener('click', function(e) {
	const currentTheme = localStorage.getItem('anthonytedja-data-theme');
	console.log(currentTheme);
	if (currentTheme === 'dark') {
		light();
	} else {
		dark();
	}
});

function changeFavicon(mode) {
	document.querySelectorAll("link[type='image/png']").forEach(function(e) {
		console.log(e);
		e.href = 'assets/img/' + e.sizes.value + mode + '.png';
	});
}

function light() {
	localStorage.setItem('anthonytedja-data-theme', 'light');
	document.documentElement.setAttribute('anthonytedja-data-theme', 'light');
	document.getElementById('logo').style.filter = 'invert(15%)';
    document.getElementById('logo').style.transform = 'rotate(0)';
	document.getElementById('click').style.filter = 'none';
    document.getElementById('hello').style.filter = 'invert(15%)';
	changeFavicon('dark');
}
function dark() {
	localStorage.setItem('anthonytedja-data-theme', 'dark');
	document.documentElement.setAttribute('anthonytedja-data-theme', 'dark');
	document.getElementById('logo').style.filter = 'invert(80%)';
    document.getElementById('logo').style.transform = 'rotate(180deg)';
	document.getElementById('click').style.filter = 'invert(90%)';
    document.getElementById('hello').style.filter = 'invert(80%)';
	changeFavicon('light');
}

let currentTheme = localStorage.getItem('anthonytedja-data-theme');
if (currentTheme === 'light') {
	light();
} else {
	dark();
}
