<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <link rel="stylesheet" href="/profile/style/login.css">
       <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,400&display=swap" rel="stylesheet">
<!--    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap" rel="stylesheet">-->

    <link rel="stylesheet" href="">
    <title>IceLogin</title>

</head>
<body>


<header>
    <div class="container">
<div class="header-container">
        <a href="https://www.google.com/search?client=opera&q=translate&sourceid=opera&ie=UTF-8&oe=UTF-8" target="_blank" class="mainlogo"><img src="/assets/images/mainlogo.png" alt="" width="70" ></a>
         <div>
            <a class="HeaderButtons" href="">About</a>
            <a class="HeaderButtons" href="">Blog</a>
            <a class="HeaderButtons" href="">Pages</a>
         </div>
    <div>
    <a class="HeaderButtons" href="">SignIn</a>
    <a class="HeaderButtons" href="register.php">Register</a>
    </div>

</div>
    </div>
</header>

<main>

    <div class="circle"> <h1>Welcome to <span class="color-text">Ice</span>Berg Group </h1>
    </div>
    <form action="/profile/handlers/login.php" method="post">
        <div class="register-form-container">
            <h2 class="form-title" onclick="afds()">Log in</h2>
            <div class="form-fields">
                <div class="form-field">
                    <input id="Email" name="email" type="text" maxlength="20" placeholder="Email">
                        <div class="form-field">
                            <input name="password" type="password" maxlength="15" placeholder="Password">
                        </div>
                </div>
            </div>
            <div class="form-buttons">
                <button type="submit" class="loginButton">Login</button>
            </div>
            <div class="message none"></div>
        </div>
        </div>
    </form>

</main>


<script src="../assets/jquery/jquery-3.4.1.min.js"></script>
<script src="profile.js"></script>
</body>
</html>