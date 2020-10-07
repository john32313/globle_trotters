
var moment = require('moment');

const btnFormComm = document.querySelector("#form_comm button");
const textarea = document.getElementById("id_textarea");
const inputName = document.getElementById("id_input_name");
const inputMail = document.getElementById("id_input_mail");
const templateComm = document.getElementById("template_commentary");
const all_comms = document.getElementById("all_commentaries");

btnFormComm.addEventListener("click", (e) => {
    e.preventDefault();

    if (textarea.value.trim() === "" 
        || inputName.value.trim() === "" 
        || inputMail.value.trim() === "")
        return;

    const newComm = createNewComm();
    all_comms.appendChild(newComm);
})


function createNewComm(){

    console.log(textarea.value);
    console.log(inputName.value);
    console.log(inputMail.value);

    const newComm = templateComm.cloneNode(true);
    console.log(newComm);
    
    console.log('newComm.id :>> ', newComm.id);
    newComm.id = "";
    console.log('newComm.id :>> ', newComm.id);

    const newh3 = newComm.querySelector("h3");
    console.log('newh3 :>> ', newh3);
    newh3.innerHTML = inputName.value;
    
    const newDate = newComm.querySelector("em");
    newDate.innerHTML = ` - le ${moment().format('DD MMM YYYY à hh:mm')}`;
    console.log('newDate :>> ', newDate);
    
    const newp = newComm.querySelector("p");
    console.log('newp :>> ', newp);
    newp.innerHTML = textarea.value;
    
    textarea.value = "";
    inputName.value = "";
    inputMail.value = "";

    return newComm;
}