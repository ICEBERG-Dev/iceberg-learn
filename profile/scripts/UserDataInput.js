let datauser = [
    {login: 'Login', value: []},
    {password: 'Password', value: []}
];

document.querySelector('.button-user-data').addEventListener('click', ()=>{
    let user_login = document.querySelector('.user-login-id').value;
    let user_password = document.querySelector('.user-password-id').value;
    datauser[0].value.push(user_login);
    datauser[1].value.push(user_password);
})

console.log(datauser);
