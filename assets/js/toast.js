let element = document.getElementById('toast');

if (element) {
    const toast = new bootstrap.Toast(element);

    let visitCount = localStorage.getItem('anthonytedja-visit-count');

    if (!visitCount) {
        visitCount = 1;
        $('#toast-paragraph').text(`Hey, looks like it's your first time here! Click on the logo to switch themes, or the photo in my bio for a cool animation :)`);
        toast._config.autohide = false;
    } else {

        visitCount = parseInt(visitCount) + 1;
        let ending = visitCount === 2 ? 'nd' : (visitCount === 3 ? 'rd' : 'th');
        $('#toast-paragraph').text(`Hey! Welcome back for the ${visitCount}${ending} time :)`);
    }

    localStorage.setItem('anthonytedja-visit-count', visitCount);

    setTimeout( () => toast.show(), 2000);
}

