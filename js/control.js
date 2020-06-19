var onScrollHandler = function () {
  stopParallax("beine");
  stopParallax("brust");
  stopParallax("bauch");
  stopParallax("arme");

};
window.addEventListener("scroll", onScrollHandler);

function stopParallax(id) {
  var beine = document.getElementById(id);
  var beinePosition = beine.getBoundingClientRect()
  if (beinePosition.y + 150 > window.innerHeight / 2) {
    beine.style.backgroundAttachment = "fixed";
  }
  else {
    beine.style.backgroundAttachment = "scroll";
  }
}