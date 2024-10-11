function login() {
    const usernameInput = document.getElementById('user').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === 'cenfo' && passwordInput === '123') {
        swal.fire({
            title: "Credenciales correctas, bienvenido",
            showConfirmButton: false,
            timer: 4000,
            html:'<iframe width="320" height="240" src="https://lottie.host/embed/4473ce5f-400c-4599-8c7a-aedf1bb3889b/wqEWxOLlZ9.json"></iframe> '
        }).then(() =>{
            window.location.href = 'landing.html'; 
        });
        
    } else if (usernameInput === '' || passwordInput === ''){
        Etext = "Los campos no pueden estar vacios";
        validationAlert(Etext);
    } else {
        Etext = "Usuario o contraseña incorrecta";
        validationAlert(Etext);

    }
}

function validationAlert(){
    swal.fire({
        title: "Error",
        text: Etext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#0063be",
        html:'<iframe src="https://lottie.host/embed/106fd908-ed56-49c2-9740-afb7e03f31a1/nJkTTUxmO0.json"></iframe> <br><p>' + Etext + '</p>'
    });
}