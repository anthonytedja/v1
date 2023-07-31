let element = document.getElementById("toast-welcome");

if (element) {
  const toast = new bootstrap.Toast(element);

  let visitCount = parseInt(localStorage.getItem("anthonytedja-visit-count"));

  if (Number.isInteger(visitCount)) {
    visitCount += 1;
    const nth = function (d) {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    $("#toast-welcome-body").text(
      `Hey! Welcome back for the ${visitCount}${nth(visitCount)} time :)`
    );
  } else {
    visitCount = 1;
    toast._config.autohide = false;
    $("#toast-welcome-body").text(
      "Hey, looks like it's your first time here! Click on the logo to switch themes, or the photo in my bio for a cool animation :)"
    );
  }

  localStorage.setItem("anthonytedja-visit-count", visitCount);

  setTimeout(() => toast.show(), 3000);
}

let element1 = document.getElementById("toast-message");
let element2 = document.getElementById("codeblock-icon-js");
let counter = 0;

if (element1 && element2) {
  const toast1 = new bootstrap.Toast(element1);

  element2.addEventListener("click", function (event) {
    counter++;
    if (counter > 2) {
      $("#toast-message-body").text("That doesn't do anything dummy");
      toast1.show();
    }
  });
}
