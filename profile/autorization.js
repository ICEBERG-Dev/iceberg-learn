let correctEmail=false
function showPassword(btn, input) {
    if (input.type==="text"){
        btn.innerText="Показать пароль"
        input.type="password"
        console.log("Сейчас этот инпут текстовый")
    }
    else{
        console.log("Инпут парольный")
        btn.innerText="Скрыть пароль"
        input.type="text"
    }

}
function togglePasswordBtn(text){
    console.log(text)
    if (text.length!==0) {
        document.querySelector("#showPasswordBtn").style.display="block"

    }
    else {
        console.log("Должна скрыться кно")
        document.querySelector("#showPasswordBtn").style.display="none"
    }
}
function register() {
    if (document.querySelector("#authpassword").value=='' || document.querySelector(".input").value=='') {
        alert("Заполните все поля")
        console.log("Заполните все поля")
    }
    else {
        alert(correctEmail?"Вы пытаетесь войти":"Неправильные данные")
    }

}
function checkEmail(text) {
    // text.includes('@')&&text.includes(".")? correctEmail=true: correctEmail=false
    correctEmail=(text.includes('@')&&text.includes("."))
}
function changeLanguage() {
    document.querySelector(".sign_in").innerHTML="Войти"
    document.querySelector("#rus").innerHTML="Имя пользователя или Email"
    document.getElementById("russ").innerHTML="Пароль"
    document.querySelector(".form_auth_button").innerHTML="Войти"
    document.querySelector("#russss").innerHTML="Или войти через"

}
function handleSelector() {
    let selector=document.querySelector("#selector")
    let chosenOption=+selector.value
    console.log(chosenOption)
    switch (chosenOption) {
        case 1:
            alert("один")
            break
        case 2:
            alert("Два")
            break
        case 3:
            alert("Три")
            break
        case 4:
            alert("Четыре")
            break
        default:
            alert("Что то пошло не так")
    }

}
