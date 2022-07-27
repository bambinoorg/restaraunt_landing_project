const themeBtn = document.querySelector('.change_theme');
const modalBG = document.querySelector('.modal_content');

    themeBtn.addEventListener('click', (element) => {
        element.preventDefault()
        modalBG.classList.toggle('dark')
        document.querySelector('.modal_close').classList.toggle('light')
        themeBtn.classList.toggle('light')
    })
