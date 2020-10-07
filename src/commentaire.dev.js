"use strict";

var moment = require('moment');

var btnFormComm = document.querySelector("#form_comm button");
var textarea = document.getElementById("id_textarea");
var inputName = document.getElementById("id_input_name");
var inputMail = document.getElementById("id_input_mail");
var templateComm = document.getElementById("template_commentary");
var all_comms = document.getElementById("all_commentaries");
btnFormComm.addEventListener("click", function (e) {
  e.preventDefault();
  if (textarea.value.trim() === "" || inputName.value.trim() === "" || inputMail.value.trim() === "") return;
  var newComm = createNewComm();
  all_comms.appendChild(newComm);
});

function createNewComm() {
  var newComm = templateComm.cloneNode(true);
  newComm.id = "";
  var newh3 = newComm.querySelector("h3");
  newh3.innerHTML = inputName.value;
  var newDate = newComm.querySelector("em");
  newDate.innerHTML = " - le ".concat(moment().format('DD MMM YYYY à hh:mm'));
  var newp = newComm.querySelector("p");
  newp.innerHTML = textarea.value;
  textarea.value = "";
  inputName.value = "";
  inputMail.value = "";
  return newComm;
}