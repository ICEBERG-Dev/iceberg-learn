<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/profile/style/register.css">
     <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet">
     <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,400&display=swap" rel="stylesheet">
     <link href="424323https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap" rel="stylesheet">
    <script src="../assets/jquery/jquery.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
    <script src="profile.js"
    <link rel="stylesheet" href="">
    <title>IceRegistration</title>
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
                <a class="HeaderButtons" href="">Register</a>
            </div>

        </div>
    </div>
</header>

<main>

    <div class="circle"> <h1>Welcome to <span class="color-text">Ice</span>Berg Group </h1>

    </div>
    <form action="/profile/handlers/save_user.php" method="post">
    <div class="register-form-container">
        <h2 class="form-title" onclick="afds()">
            Register
        </h2>
        <div class="form-fields">
            <div class="form-field">
                <input id="EmailReg" type="text" maxlength="20" placeholder="Email">
                <div class="form-field">
                    <input id="NicknameReg" type="text" maxlength="15" placeholder="NickName">
                    <div class="form-field">
                        <input id="PasswordReg" type="password" maxlength="15" placeholder="Password">
    </form>
<!--RegFieldsEnd-->

                </div>
            </div>

            <div class="form-buttons">
                <button class="button">Register</button>
                <div class="divider">Or continue with</div>
                <a href="" class="logo"><img src="/profile/images/googlelogo.png" alt="" width="30"></a>
                <a href="" class="logo"><img src="/profile/images/applelogo.png" alt="" width="30"></a>
                <a href="" class="logo"><img src="/profile/images/facebook.png" alt="" width="30"></a>

            </div>
        </div>
</main>



</body>
</html>