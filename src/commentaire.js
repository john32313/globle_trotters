
const btnFormComm = document.querySelector("#form_comm button");
const textarea = document.getElementById("id_textarea");
const inputName = document.getElementById("id_input_name");
const inputMail = document.getElementById("id_input_mail");
const templateComm = document.getElementById("template_commentary");
const all_comms = document.getElementById("all_commentaries");

initCommentaries();

const img_comm = document.querySelectorAll(".commentary img");
img_comm.forEach(img => {
        img.addEventListener("click", toogleImageGender);
})

btnFormComm.addEventListener("click", (e) => {
    e.preventDefault();

    if (textarea.value.trim() === "" 
        || inputName.value.trim() === "" 
        || inputMail.value.trim() === "")
        return;

    const newComm = createNewComm();
    all_comms.prepend(newComm);

    waitFunction(newComm);
})




function initCommentaries(){
    const elmsComms = getCommLocalStorage();

    [...elmsComms].forEach(comm => {
        all_comms.prepend(comm);
    })

}

function getCommLocalStorage(){
    const tabComms = JSON.parse(localStorage.getItem("commentaries")) || [];

    const elmsComms = document.createRange().createContextualFragment(tabComms).children;
    return elmsComms;
}

function recordCommLocalStorage(comm){
    const tabComms = JSON.parse(localStorage.getItem("commentaries")) || [];

    tabComms.push(comm.outerHTML);
    localStorage.setItem("commentaries", JSON.stringify(tabComms));
}


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


function toogleImageGender(e){
    setPhoto(e.target, (e.target.dataset.gender === "female" ? "male" : "female"));
}

function makeGetRequest(path) { 
    return new Promise(function (resolve, reject) { 
        axios.get(path).then( 
            (response) => { 
                var result = response.data; 
                resolve(result); 
            }, 
                (error) => { 
                    reject(error); 
            } 
        ); 
    }); 
} 

async function setPhoto(img, gender) { 
    var data = await makeGetRequest('https://randomuser.me/api/' 
    + (gender ? "?gender="+gender : ""));
    img.src = data.results[0].picture.medium;
    img.dataset["gender"] = data.results[0].gender;
    img.addEventListener("click", toogleImageGender);
} 


async function waitFunction(newComm){
    const img = newComm.querySelector("img");

    await setPhoto(img);
    recordCommLocalStorage(newComm);
}