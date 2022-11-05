let element = document.getElementById('toast');

if (element) {
    const toast = new bootstrap.Toast(element);

    let visitCount = parseInt(localStorage.getItem('anthonytedja-visit-count'));

    if (Number.isInteger(visitCount)) {
        visitCount += 1;
        $('#toast-paragraph').text(`Hey! Welcome back for the ${visitCount}${visitCount === 2 ? 'nd' : visitCount === 3 ? 'rd' : 'th'} time :)`);
    } else {
        visitCount = 1;
        toast._config.autohide = false;
        $('#toast-paragraph').text("Hey, looks like it's your first time here! Click on the logo to switch themes, or the photo in my bio for a cool animation :)");
    }

    localStorage.setItem('anthonytedja-visit-count', visitCount);

    setTimeout(() => toast.show(), 2000);
}
