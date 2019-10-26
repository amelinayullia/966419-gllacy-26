'use strict'

var link = document.querySelector(".button--feedback");
var bodyElement = document.querySelector("body");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-button-close");
var userName = popup.querySelector("[name=user-name]");

var closePopup = function() {
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  bodyElement.classList.remove("popup-open");
};

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  userName.focus();
  bodyElement.classList.remove("popup-hidden");
  bodyElement.classList.add("popup-open");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
    closePopup();
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      closePopup();
    }
  }
});
