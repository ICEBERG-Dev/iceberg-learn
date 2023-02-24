$('.loginButton').click(function (e) {
    e.preventDefault();

    $(`input`).removeClass('error');

    let email = $('input[name="email"]').val(),
        password = $('input[name="password"]').val();

    $.ajax({
        url: 'handlers/login.php',
        type: 'POST',
        dataType: 'json',
        data: {
            email: email,
            password: password
        },
        success (data) {

            if (data.status) {
                document.location.href = '/profile/profile.php';
            } else {

                if (data.type === 1) {
                    data.fields.forEach(function (field) {
                        $(`input[name="${field}"]`).addClass('error');
                    });
                }

                $('.message').removeClass('none').text(data.message);
            }

        }
    });

});

$('.regButton').click(function (e) {
    e.preventDefault();

    $(`input`).removeClass('error');
    let email = $('input[name="email"]').val(),
        name = $('input[name="name"]').val(),
        password = $('input[name="password"]').val(),
        password_confirm = $('input[name="password_confirm"]').val();

    let formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);
    formData.append('password', password);
    formData.append('password_confirm', password_confirm);


    $.ajax({
        url: 'handlers/save_user.php',
        type: 'POST',
        dataType: 'json',
        processData: false,
        contentType: false,
        cache: false,
        data: formData,
        success (data) {
            if (data.status) {
                document.location.href = '../profile/login.php';
            } else {
                if (data.type === 1) {
                    data.fields.forEach(function (field) {
                        $(`input[name="${field}"]`).addClass('error');
                    });
                }
                $('.message').removeClass('none').text(data.message);

            }

        }
    });

});