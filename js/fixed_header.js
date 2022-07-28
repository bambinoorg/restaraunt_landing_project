
const header = document.querySelector('header');
window.addEventListener('scroll',() => {
    let introH = window.scrollY;
    if(introH > 870) {
        header.classList.add('fixed_header');
    } else if (introH < 870) {
        header.classList.remove('fixed_header');
    }
});
