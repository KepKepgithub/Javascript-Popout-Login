var btn = document.querySelector(".btn");

var modal = document.querySelector(".popContainer");

var span = document.querySelector(".close");

var cover = document.querySelector(".cover");

var change = document.querySelector(".ChangeBtn");

var textH1 = document.querySelector(".textChangeH1");

var textP = document.querySelector(".textChangeP");

var fade = document.querySelector(".fade");

var state1 = function() {
  cover.style.transform = "translateX(0%)";
};
var state2 = function() {
  cover.style.transform = "translateX(100%)";
};

btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    this.modal.style.display = "none";
  }
};

var tracker = 0;

change.onclick = function() {
  tracker++;
  if (tracker % 2 != 0) {
    cover.style.transition = "all 500ms ease";
    cover.style.transform = "translateX(0%)";
    textH1.innerHTML = "Already <br/> A Member?";
    textH1.style.transition = "opacity 500ms ease-in";
    change.innerHTML = "sign in";
    change.style.marginBottom = "2.3rem";
    fade.style.animation = "fadeEffect2 1s 1";
  } else if (tracker % 2 == 0) {
    cover.style.transition = "all 500ms ease";
    cover.style.transform = "translateX(100%)";
    textH1.innerHTML = "Not A Member?";
    change.innerHTML = "sign up";
    change.style.marginBottom = "0rem";
    fade.style.animation = "fadeEffect1 1s 1";
  }
};
