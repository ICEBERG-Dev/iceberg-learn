let datauser = [
    {login: 'Login', value: []},
    {password: 'Password', value: []}
];
const bdUser = {
    login: 'admin',
    password: '12345'
}
document.querySelector('.button-user-data').addEventListener('click', ()=>{
    let user_login = document.querySelector('.user-login-id').value;
    let user_password = document.querySelector('.user-password-id').value;
    datauser[0].value.push(user_login);
    datauser[1].value.push(user_password);
    console.log(`Логин пользователя: ${datauser[0].value}`);
    console.log(`Пароль пользователя: ${datauser[1].value}`);
    if (user_login === bdUser.login && user_password === bdUser.password) {
        window.location.href = 'http://ice-todo/';
    } else {
        let alert = document.createElement('p')
        alert.classList.add('alert')
        alert.innerHTML = 'Логин или пароль не верны'
        document.querySelector('.login_body-footer').insertAdjacentElement('beforebegin', alert);
        setTimeout(()=>document.querySelector('.alert').remove(), 3000)
    }
})

