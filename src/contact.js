const contact = document.querySelector('#contact');

const validate = document.querySelector('.submit');
const mail = document.getElementById('email');
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
    }
}