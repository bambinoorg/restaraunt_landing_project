const lightStyle = document.querySelectorAll
('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');

const darkStyle = document.querySelectorAll
('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');

const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
const switcherRadios = document.querySelectorAll('.switcher_radio');

function setupSwitcher() {
    const savedScheme = getSavedScheme();

        if(savedScheme !== null) {
            const currentRadio = document.querySelector(`.switcher_radio[value=${savedScheme}]`);
            currentRadio.checked = true;
        }
}

[...switcherRadios].forEach((radio) => {
    radio.addEventListener('change', (e) => {
        setScheme(e.target.value);
    });
});

function setScheme (scheme) {
    switchMedia(scheme);
    saveScheme(scheme);
}

function switchMedia(scheme) {
    let lightMedia;
    let darkMedia;

    lightMedia = (scheme === 'light') ? 'all' : 'not all';
    darkMedia = (scheme === 'dark') ? 'all' : 'not all';

    [...lightStyle].forEach((link) => {
        link.media = lightMedia;
    });
    [...darkStyle].forEach((link) => {
        link.media = darkMedia;
    });
}
function getSystemScheme () {
    const darkScheme = darkSchemeMedia.matches;

    return darkScheme ? 'dark' : 'light';
}
function getSavedScheme () {
  return  localStorage.getItem('color-scheme');
}

function saveScheme(scheme) {
    localStorage.setItem('color-scheme',scheme);
}

function setupScheme () {
    const savedScheme = getSavedScheme();
    const systemScheme = getSystemScheme();

    if(savedScheme === null) return;

    if(savedScheme !== systemScheme) {
        setScheme(savedScheme);
    }
}

setupSwitcher();
setupScheme();



