<?php
$db = new mysqli("localhost", "root", "root", "todo_project");

if (isset($_COOKIE['id']))
{
$query = mysqli_query($db, "SELECT * FROM users WHERE id = '$_COOKIE[id]'");
$userdata = mysqli_fetch_assoc($query);

    if ($userdata ['id'] !== $_COOKIE['id']) {
        setcookie("id", "", time() - 3600*24*30*12, "/");
        echo "Хм, что-то не получилось";
    } else {
        echo "Привет, ".$userdata['name']."<br>";
    }

}


?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<a href="logout.php" tite="Logout">Logout.

</body>
</html>
