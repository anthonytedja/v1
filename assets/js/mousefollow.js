$("#frontpage").mousemove(transform);
var reset = true;
var isTouchDevice = ('ontouchstart' in window || 'onmsgesturechange' in window);
var onmousestop = function() {
    $('#fullname').css('transition', 'all ease 0.5s');
    $("#fullname").css("transform", "none");
    $("#fullname").css("filter", "none");
    reset = true;
  }, thread;

function transform(e) {
  if (!isTouchDevice) {

    const xOrigin = $("#frontpage").width() / 2;
    const yOrigin = $("#frontpage").height() / 2;
    const xRot = (e.clientY - yOrigin) / yOrigin * -15 + 10;
    const yRot = (e.clientX - xOrigin) / xOrigin * 20;
    $("#fullname").css("transform", `rotateX(${yRot * 0.2}deg) rotateY(${xRot * 0.2}deg)`);
    $("#fullname").css("filter", `drop-shadow(clamp(-8px, ${yRot * -0.5}px, 8px) clamp(-8px, ${xRot * 0.5}px, 8px) 0px var(--name-shadow))`);
    if (reset) {
      setTimeout(function() { 
        $('#fullname').css('transition', 'none');
        reset = false;
      }, 500);
    }
    clearTimeout(thread);
    thread = setTimeout(onmousestop, 1500);
  } 
}