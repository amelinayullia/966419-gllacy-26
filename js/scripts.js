"use strict"

var link = document.querySelector(".button--feedback");
var bodyElement = document.querySelector("body");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-button-close");
var form = popup.querySelector("form");
var userName = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

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

form.addEventListener("submit", function (evt) {
  if (!userName.value || !email.value || !text.value) {
  evt.preventDefault();
  popup.classList.add("modal-error");
  console.log("Нужно ввести имя, email и текст");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      closePopup();
    }
  }
});
