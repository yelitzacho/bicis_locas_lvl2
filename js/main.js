function validateForm(){
    var nombre = document.getElementById('name').value;
    var apellido = document.getElementById('lastname').value;
    var email = document.getElementById('input-email').value;
    var password = document.getElementById('input-password').value;
    var tipoDeBici = document.getElementsByClassName("form-control").value;
    var twitter = document.getElementById('input-social');

    if(nombre === "" || apellido === "" || email === "" || password === "" || twitter === ""){
      alert('[ERROR] Todos los campos son obligatorios, excepto el de las bicis');
    }
    else if (!(/^([A-Z]{1}[a-z]+[\s]*)+$/.test(nombre))) {
      alert('[ERROR] El campo Nombre debe tener la primera letra en mayúsculas');
    }
    else if (!(/^([A-Z]{1}[a-z]+[\s]*)+$/.test(apellido))) {
      alert('[ERROR] El campo Apellido debe tener la primera letra en mayúsculas');
    }
    else if (!(/[\w]+@{1}[\w]+\.[a-z]{2,3}/.test(correo))) {
      alert('[ERROR] El campo email tiene que tener el siguiente formato: name@domain.com');
    }
    else if (password.length<=6 || password === "password" || password === "123456" || password === "098765") {
      alert('[ERROR] El campo contraseña tiene que tener mínimo 6 caracteres.');
    }
    else {
      alert('[ERROR] Debe rellenar todos los campos');
    }
}
