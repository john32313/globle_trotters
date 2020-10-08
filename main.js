
// scrollIntoView smooth 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//navbar mouseOut
window.addEventListener('mouseup', e => {
    let navi = document.querySelector('.navbar')
    let nav = e.composedPath();
    let check = document.querySelector('#menu_button')
    if (!nav.includes(navi)) {
        check.checked = false;
    }

});