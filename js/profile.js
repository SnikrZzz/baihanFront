const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var cedula = getCookie('userBaihan');
console.log(cedula);

fetch(`http://127.0.0.1:8080/api/customers/${cedula}`)
    .then(response => response.json())
    .then(customer => {
        document.getElementById("cedula").value = cedula;
        document.getElementById("nombre").value = customer.nombre;
        document.getElementById("direccion").value = customer.direccion;
        document.getElementById("telefono").value = customer.telefono;
        document.getElementById("correo").value = customer.correo;
        document.getElementById("contraseña").value = customer.password;
        document.getElementById("confContraseña").value = customer.password;
    })
    .catch(error => {
        console.error('Error:', error);
    });

function getCookie(nombre) {
    var nombreCookie = nombre + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nombreCookie) == 0) {
            return cookie.substring(nombreCookie.length, cookie.length);
        }
    }
    return null;
}


