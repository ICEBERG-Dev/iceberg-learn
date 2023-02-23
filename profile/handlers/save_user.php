<?php
$db = new mysqli("localhost", "root", "root", "todo_project");


$email = $_POST['email'];
$name = $_POST['name'];
$password= $_POST['password'];

if($email === '' && $password === '') {
    echo('data missing');
} else {
    //если логин и пароль введены, то обрабатываем их, чтобы теги и скрипты не работали, мало ли что люди могут ввести
    $email = stripslashes($email);
    $email = htmlspecialchars($email);
    $password = stripslashes($password);
    $password = htmlspecialchars($password);
//удаляем лишние пробелы
    $email = trim($email);
    $password = md5(md5(trim($_POST['password'])));
// подключаемся к базе
    $result = $db->query("SELECT id FROM users WHERE email='$email'");
    $data = mysqli_fetch_assoc($result);
    if (!empty($data['id'])) {
        exit ("Извините, введённый вами логин уже зарегистрирован. Введите другой логин.");
    }
// если такого нет, то сохраняем данные
    $result2 = mysqli_query ($db,"INSERT INTO users (email, name, password) VALUES ('$email', '$name', '$password')");

// Проверяем, есть ли ошибки
    if ($result2=='TRUE')
    {
        echo "Вы успешно зарегистрированы! Теперь вы можете зайти на сайт. <a href='/'>Главная страница</a>";
    }
    else {
        echo "Ошибка! Вы не зарегистрированы.";
    }
}
?>