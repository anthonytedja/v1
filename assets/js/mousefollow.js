$("#frontpage").mousemove(transform);
var once = true;
var isTouchDevice = ('ontouchstart' in window || 'onmsgesturechange' in window);

function transform(e) {
  if (!isTouchDevice) {
    const xOrigin = $("#frontpage").width() / 2;
    const yOrigin = $("#frontpage").height() / 2;
    const xRot = (e.clientY - yOrigin) / yOrigin * -15 + 10;
    const yRot = (e.clientX - xOrigin) / xOrigin * 20;
    $("#fullname").css("transform", `rotateX(${yRot * 0.2}deg) rotateY(${xRot * 0.2}deg)`);
    //$("#fullname").css("text-shadow", `clamp(-5px, ${yRot * -0.8}px, 5px) clamp(-5px, ${xRot * 0.8}px, 5px) var(--name-shadow)`);
    $("#fullname").css("filter", `drop-shadow(clamp(-5px, ${yRot * -0.5}px, 5px) clamp(-5px, ${xRot * 0.5}px, 5px) 0px var(--name-shadow))`);
    
    if (once) {
      setTimeout(function() { 
        $('#fullname').css('transition', 'none');
        once = false;
      }, 600);
    }
  } 
}