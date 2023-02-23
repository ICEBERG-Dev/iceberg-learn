<?php
$db = new mysqli("localhost", "root", "root", "todo_project");

$email = $_POST['email'];
$password= $_POST['password'];

if($email === '' && $password === '') {
    echo('data missing');
} else {
    $result = $db->query("SELECT id, password FROM users WHERE email='$email'");
    $data = mysqli_fetch_assoc($result);
    if($data['password'] === md5(md5($_POST['password'])))
    {
        setcookie("id", $data['id'], time()+60*60*24*30, "/");

        // Переадресовываем браузер на страницу проверки нашего скрипта
        header("Location: check.php"); exit();
    } else {
        echo "Неправильно логин или пароль";
    }
}