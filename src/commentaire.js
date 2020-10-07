
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
    const newComm = templateComm.cloneNode(true);
    
    newComm.id = "";

    const newh3 = newComm.querySelector("h3");
    newh3.innerHTML = inputName.value;
    
    const newDate = newComm.querySelector("em");
    newDate.innerHTML = ` - le ${moment().format('DD MMM YYYY à hh:mm')}`;
    
    const newp = newComm.querySelector("p");
    newp.innerHTML = textarea.value;
    
    textarea.value = "";
    inputName.value = "";
    inputMail.value = "";

    return newComm;
}