const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var cedula = getCookie('userBaihan');
console.log(cedula);

fetch(`http://3.128.182.247/api/customers/${cedula}`)
    .then(response => response.json())
    .then(customer => {
        document.getElementById("cedula").textContent = customer.cedula;
        document.getElementById("nombre").value = customer.nombre;
        document.getElementById("telefono").value = customer.telefono;
        document.getElementById("direccion").value = customer.direccion;
        document.getElementById("dirAdInfo").value = customer.descripcion;
        document.getElementById("email").value = customer.correo;
        document.getElementById("password").value = customer.password;
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

document.getElementById("actualizar").onclick = () => {
    let customer = {
        "cedula": document.getElementById("cedula").textContent,
        "nombre": document.getElementById("nombre").value,
        "correo": document.getElementById("email").value,
        "password": document.getElementById("password").value,
        "telefono": document.getElementById("telefono").value,
        "direccion": document.getElementById("direccion").value,
        "descripcion": document.getElementById("dirAdInfo").value
    }

    fetch("http://3.128.182.247/api/customers/savecustomer", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    }).then(function (response) {
        if (response.ok) {
            // Procesar la respuesta de la API
            response.json().then(function (data) {
                location.assign("./profile.html")
                console.log(data)
                return true;
            });
        } else {
            // Manejar los errores de la API
            //console.log("Error en la solicitud");
            return false;
        }
    });
}