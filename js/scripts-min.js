"use strict";var link=document.querySelector(".button--feedback"),bodyElement=document.querySelector("body"),popup=document.querySelector(".modal"),close=popup.querySelector(".modal-button-close"),form=popup.querySelector("form"),userName=popup.querySelector("[name=user-name]"),email=popup.querySelector("[name=email]"),text=popup.querySelector("[name=text]"),closePopup=function(){popup.classList.remove("modal-show"),popup.classList.remove("modal-error"),bodyElement.classList.remove("popup-open")};link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),userName.focus(),bodyElement.classList.remove("popup-hidden"),bodyElement.classList.add("popup-open")}),close.addEventListener("click",function(e){e.preventDefault(),closePopup()}),form.addEventListener("submit",function(e){userName.value&&email.value&&text.value||(e.preventDefault(),popup.classList.add("modal-error"),console.log("Нужно ввести имя, email и текст"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-show")&&(e.preventDefault(),closePopup())});
