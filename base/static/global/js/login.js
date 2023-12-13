function developing() {
    alert('Ainda esta em desenvolvimento')
}

function loginValidation() {
    let email_adress = document.querySelector('input#emailInput')
    let password = document.querySelector('input#passwordInput')
    if (email_adress.value.length == '' || password.value.length == '') {
        email_adress.classList.add('border-danger')
        password.classList.add('border-danger')
        alert('digite valores validos')
    } else if (password.value.length < 8) {
        alert('Por favor digite uma senha com 8 ou mais caracteres')
    } else {
        email_adress.classList.add('border-success') // Aqui os valores ja podem ser salvos em um banco de dados
        password.classList.add('border-success')
        window.location.assign('/main') // se houver tela de loaging arquivos estarão carregados
    // amigo, tu tem que ver essa parte ai, pq eu não estou conseguindo usar a forma dinâmica de carregar uma url que
    // não esteja na 'login/', a url que tem para redirecionar é a
    // absoluta: '127.0.0.1:8000/main' ou {%url 'pm_app:main'%} (em django HTML)
    }
}

function showPassword() {
    let password_text = document.querySelector('input#passwordInput')
    if (password_text.type === 'password') {
        password_text.setAttribute('type', 'text')
    } else {
        password_text.setAttribute('type', 'password')
    }
}