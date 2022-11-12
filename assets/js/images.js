// Disable image dragging and right click context menu
$('img').on('dragstart', function (event) { event.preventDefault(); });
$('img').bind('contextmenu', function (e) {
    return false;
});

// Bypass SVG background animation caching
$('#frontpage').css('background-image', 'url(/assets/img/background.svg' + '?' + Math.random() + ')')