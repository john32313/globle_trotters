"use strict";

var btnFormComm = document.querySelector("#form_comm button");
var textarea = document.getElementById("id_textarea");
var inputName = document.getElementById("id_input_name");
var inputMail = document.getElementById("id_input_mail");
var templateComm = document.getElementById("template_commentary");
var all_comms = document.getElementById("all_commentaries");
var img_comm = document.querySelectorAll(".commentary img");
img_comm.forEach(function (img) {
  img.addEventListener("click", toogleImageGender);
});
btnFormComm.addEventListener("click", function (e) {
  e.preventDefault();
  if (textarea.value.trim() === "" || inputName.value.trim() === "" || inputMail.value.trim() === "") return;
  var newComm = createNewComm();
  all_comms.appendChild(newComm);
});

function createNewComm() {
  var newComm = templateComm.cloneNode(true);
  newComm.id = "";
  var img = newComm.querySelector("img");
  setPhoto(img);
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

function toogleImageGender(e) {
  setPhoto(e.target, e.target.dataset.gender === "female" ? "male" : "female");
}

function makeGetRequest(path) {
  return new Promise(function (resolve, reject) {
    axios.get(path).then(function (response) {
      var result = response.data;
      resolve(result);
    }, function (error) {
      reject(error);
    });
  });
}

function setPhoto(img, gender) {
  var data;
  return regeneratorRuntime.async(function setPhoto$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(makeGetRequest('https://randomuser.me/api/' + (gender ? "?gender=" + gender : "")));

        case 2:
          data = _context.sent;
          img.src = data.results[0].picture.medium;
          img.dataset["gender"] = data.results[0].gender;
          img.addEventListener("click", toogleImageGender);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}