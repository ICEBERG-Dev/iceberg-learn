let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function () {
    page.classList.toggle('whitetheme')
    page.classList.toggle('darktheme')
};