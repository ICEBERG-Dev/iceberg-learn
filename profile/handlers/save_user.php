<?php
$db = new mysqli("localhost", "root", "root", "todo_project");
$login = $_POST['name'];
$password= $_POST['password'];

if($login === '' && $password === '') {
    echo('data missing');
} else {
    //если логин и пароль введены, то обрабатываем их, чтобы теги и скрипты не работали, мало ли что люди могут ввести
    $login = stripslashes($login);
    $login = htmlspecialchars($login);
    $password = stripslashes($password);
    $password = htmlspecialchars($password);
//удаляем лишние пробелы
    $login = trim($login);
    $password = trim($password);
// подключаемся к базе
    $result = $db->query("SELECT id FROM users WHERE name='$login'");
    echo($result);
    $myrow = $result->fetch_array($result);
    if (!empty($myrow['id'])) {
        exit ("Извините, введённый вами логин уже зарегистрирован. Введите другой логин.");
    }
// если такого нет, то сохраняем данные
    $result2 = mysql_query ("INSERT INTO users (login,password) VALUES('$login','$password')");
// Проверяем, есть ли ошибки
    if ($result2=='TRUE')
    {
        echo "Вы успешно зарегистрированы! Теперь вы можете зайти на сайт. <a href='index.php'>Главная страница</a>";
    }
    else {
        echo "Ошибка! Вы не зарегистрированы.";
    }
}
?>