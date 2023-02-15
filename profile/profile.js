function clickBtn() {
    console.log('click')
}

$(document).ready(function() {
        document.querySelector('#registerBtn').addEventListener('click', clickBtn)
})