let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
let switchIcon = document.querySelector('.fa');
themeButton.onclick = function () {
    page.classList.toggle('whitetheme')
    switchIcon.classList.toggle('fa-moon')
    page.classList.toggle('darktheme')
    switchIcon.classList.toggle('fa-lightbulb')
};