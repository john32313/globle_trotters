const contact = document.querySelector('#contact');
const validate = document.querySelector('.submit');
const mail = document.getElementById('email');
const user = document.getElementById('user');
const sujet = document.getElementById('sujet');
const textarea = document.getElementById('message');
const missing = document.getElementById('required-field');

contact.addEventListener('submit', e => e.preventDefault())

validate.addEventListener('click', e => validation(e));

function validation(event) {
    if (mail.validity.valueMissing) {
        event.preventDefault();
        missing.textContent = '* Remplissez le ou les champs manquant du formulaire.';
        missing.style.color = 'red';
        missing.style.fontStyle = "italic";
        missing.style.fontFamily = "Sansita_links";
    }   else {
        missing.style.border = '';
        missing.textContent = '';
    }

    if (mail.validity.valueMissing) {
        event.preventDefault();
        mail.style.border = '2px solid red';

    }   else {
        mail.style.border = '';
    }

    if (user.validity.valueMissing) {
        event.preventDefault();
        user.style.border = '2px solid red';

    }   else {
        user.style.border = '';
    }

    if (sujet.validity.valueMissing) {
        event.preventDefault();
        sujet.style.border = '2px solid red';

    }   else {
        sujet.style.border = '';
    }

    if (textarea.validity.valueMissing) {
        event.preventDefault();
        textarea.style.border = '2px solid red';

    }   else {
        textarea.style.border = '';
    }


}