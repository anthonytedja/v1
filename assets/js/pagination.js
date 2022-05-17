$('#more-projects').click(function () {
    $(this).hide();
    $('#projects-row .col-lg-6:hidden').removeClass('aos-animate');
    $(this).removeClass('aos-animate');
    
    setTimeout(function() {
        $('#projects-row .col-lg-6:hidden').addClass('aos-animate');
        $(this).addClass('aos-animate');
    }, 100);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);

    $('#projects-row .col-lg-6:hidden').slice(0, 4).show();
    if ($('#projects-row .col-lg-6').length != $('#projects-row .col-lg-6:visible').length) {
        $(this).show();
    }
});