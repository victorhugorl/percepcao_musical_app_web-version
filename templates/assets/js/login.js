function developing() {
    alert('Ainda esta em desenvolvimento')
}

function loginValidation() {
    let email_adress = document.querySelector('input#emailInput')
    let password = document.querySelector('input#passwordInput')
    if (email_adress.value.length == '' || password.value.length == '') {
        alert('digite valores validos')
    } else if (password.value.length < 8) {
        alert('Por favor digite uma senha com 8 ou mais caracteres')
    }
}