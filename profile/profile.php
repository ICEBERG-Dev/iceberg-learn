<?php
session_start();
if (!$_SESSION['user']) {
    header('Location: /');
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Авторизация и регистрация</title>
</head>
<body>

<!-- Профиль -->

<form>
    <h2 style="margin: 10px 0;"><?= $_SESSION['user']['email'] ?></h2>
    <a href="#"><?= $_SESSION['user']['name'] ?></a>
    <a href="handlers/logout.php" class="logout">Выход</a>
</form>

</body>
</html>