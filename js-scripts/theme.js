// Coded by ChristopherMD - 2020

// Theme Toggler
document.querySelector('.theme-toggler').addEventListener('click', () => {
  document.querySelector('.theme-toggler').classList.toggle('open');
  document.querySelector('.theme').classList.toggle('open');
});

// Theme Skin Changer
const logoLight = () =>
  (document.getElementById('logo').src = 'images/logoLTbev1.png');
const logoDark = () =>
  (document.getElementById('logo').src = 'images/logoDKbev1.png');
const homeBgImgDark = () =>
  (document.getElementById('home-image').style.backgroundImage =
    'url("../images/home-bg-dark.png")');
const homeBgImgLight = () =>
  (document.getElementById('home-image').style.backgroundImage =
    'url("../images/home-bg-light.png")');
const signatureLight = () =>
  (document.getElementById('signature').src = 'images/sig-light.png');
const signatureDark = () =>
  (document.getElementById('signature').src = 'images/sig-dark.png');

const webpageLink = document.querySelectorAll('.menu-link');
const darkTheme = document.querySelector('.dark-theme');
const pageSkin = document.querySelectorAll('.page-skin');
const lightSkin = pageSkin[0];
const darkSkin = pageSkin[1];

if (localStorage.theme === 'dark') {
  darkTheme.removeAttribute('disabled');
  logoLight();
  if (
    window.location.pathname === '/index.html' ||
    window.location.pathname === '/'
  ) {
    console.log('local storage is also working.');
    homeBgImgDark();
    signatureLight();
  }
  darkSkin.setAttribute('checked', 'true');
  lightSkin.removeAttribute('checked');
  // console.log('localStorage is dark');
} else {
  darkTheme.setAttribute('disabled', 'true');
  logoDark();
  if (
    window.location.pathname === '/index.html' ||
    window.location.pathname === '/'
  ) {
    homeBgImgLight();
    signatureDark();
  }
  lightSkin.setAttribute('checked', 'true');
  darkSkin.removeAttribute('checked');
  // console.log('no localStorage');
}

for (let i = 0; i < pageSkin.length; i++) {
  pageSkin[i].addEventListener('change', function skinChanger() {
    console.log(this.value);
    console.log(window.location.pathway);
    if (this.value === 'dark' && this.checked === true) {
      console.log('this is working part 1');
      darkTheme.removeAttribute('disabled');
      logoLight();
      if (
        window.location.pathname === '/index.html' ||
        window.location.pathname === '/'
      ) {
        console.log('this is working park 2');
        homeBgImgDark();
        signatureLight();
      }
      localStorage.setItem('theme', 'dark');
      console.log('is dark');
    } else {
      darkTheme.setAttribute('disabled', 'true');
      localStorage.removeItem('theme');
      logoDark();
      if (
        window.location.pathname === '/index.html' ||
        window.location.pathname === '/'
      ) {
        homeBgImgLight();
        signatureDark();
      }
      console.log('is light');
    }
  });
}

// Theme Color Changer
const colorLinks = document.querySelectorAll('.color-change');
const numOfColors = colorLinks.length;

function colorSwitcher(colorChosen) {
  for (let i = 0; i < numOfColors; i++) {
    if (colorChosen === colorLinks[i].getAttribute('title')) {
      colorLinks[i].removeAttribute('disabled');
    } else {
      colorLinks[i].setAttribute('disabled', 'true');
      localStorage.colorSaved = colorChosen;
    }
  }
}

if (localStorage.colorSaved) {
  colorChosen = localStorage.colorSaved;
  colorSwitcher(colorChosen);
} else {
  let colorChosen = 'red';
}
// move theme to bottom for smartphones
const themeToggle = document.querySelector('.theme-toggler');
const theme = document.querySelector('.theme');
const screen = () => {
  return window.matchMedia('(max-width: 850px)').matches;
};

console.log(theme);
if (screen()) {
  theme.style.removeProperty('top');
  themeToggle.style.removeProperty('top');
}
