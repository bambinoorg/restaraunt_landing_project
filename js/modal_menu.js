const menuModalBtns = document.querySelectorAll('.menu_modal_btn');
const body = document.querySelector('body');
const header = document.querySelector('header')
const lockPadding = document.querySelector('.lock_padding') // добавить к єлементам с позицией fixed



let unlock = true;
const timeoutUnlock = 800;

if(menuModalBtns.length > 0) {
    for (let index = 0; index < menuModalBtns.length; index++) {
        const menuModalBtn = menuModalBtns[index];
        menuModalBtn.addEventListener('click', (element) => {
            const modalName = menuModalBtn.getAttribute('href').replace('#','');
            const currentModal = document.getElementById('modal');
            modalOpen(currentModal);
            element.preventDefault();
            bodyLock()
        });
    }
}


function modalOpen (currentModal) {
    if (currentModal && unlock) {
        currentModal.classList.add('modal_active');
        currentModal.addEventListener('click', (element) => {
            if (!element.target.closest('.modal_content')) {
                modalClose(element.target.closest('.modal'));
            }
        });
    }
}

const modalCloseBtn = document.querySelector('.modal_close');
modalCloseBtn.addEventListener('click',(element) => {
    modalClose(modalCloseBtn.closest('.modal'));
    element.preventDefault();
});

function modalClose (currentModal, doUnlock = true) {
    if (unlock) {
        currentModal.classList.remove('modal_active')
    } if (doUnlock) {
        bodyUnlock()
    }
}


function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.intro').offsetWidth + 'px';
    // цикл для объектов с position:fixed
    if (lockPadding > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const element = lockPadding[index];
            element.style.paddingRight = lockPaddingValue;
        }
    }
    body.classList.add('lock');
    body.style.paddingRight = lockPaddingValue ;
    header.style.paddingRight = lockPaddingValue ;
    unlock = false;
    setTimeout(() => {
        unlock = true;
    },timeoutUnlock);
}

function bodyUnlock() {
    setTimeout(() => {
    if (lockPadding > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const element = lockPadding[index];
            element.style.paddingRight = '0px';
        }
    }
    header.style.paddingRight = '0px';
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
},timeoutUnlock);
}

//закрытие по Esc

// document.addEventListener('keydown',(element) => {
//     if(element === 27) {
//         const modalActive = document.querySelector('.modal_active');
//         modalOpen(modalActive);
//     }
// })
