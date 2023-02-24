<?php
session_start();
$db = new mysqli("localhost", "root", "root", "todo_project");


$email = $_POST['email'];
$name = $_POST['name'];
$password= $_POST['password'];
$password_confirm= $_POST['password_confirm'];

$check_login = mysqli_query($db, "SELECT * FROM `users` WHERE `email` = '$email'");
if (mysqli_num_rows($check_login) > 0) {
    $response = [
        "status" => false,
        "type" => 1,
        "message" => "Такой логин уже существует",
        "fields" => ['email']
    ];

    echo json_encode($response);
    die();
}

$error_fields = [];

if ($email === '') {
    $error_fields[] = 'email';
}

if ($name === '') {
    $error_fields[] = 'name';
}

if ($password === '') {
    $error_fields[] = 'password';
}

if ($password_confirm === '') {
    $error_fields[] = 'password_confirm';
}

if (!empty($error_fields)) {
    $response = [
        "status" => false,
        "type" => 1,
        "message" => "Проверьте правильность полей",
        "fields" => $error_fields
    ];

    echo json_encode($response);

    die();
}

if ($password === $password_confirm) {
    $password = md5($password);

    mysqli_query($db, "INSERT INTO `users` (`email`, `name`, `password`, `password_confirm`) VALUES ('$email', '$name', '$password', '$password_confirm')");

    $response = [
        "status" => true,
        "message" => "Регистрация прошла успешно!",
    ];
    echo json_encode($response);
    die();


} else {
    $response = [
        "status" => false,
        "message" => "Пароли не совпадают",
    ];
    echo json_encode($response);
    die();
}


?>