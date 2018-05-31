window.onload = function() {
  var fade = document.getElementById("fade-effect");
  fade.style.animation = "fadeOut 2s 1";
  setTimeout(function() {
    fade.remove();
  }, 2000);
};
