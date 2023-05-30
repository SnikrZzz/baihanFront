const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var cedula = getCookie("userBaihan");
console.log(cedula);

fetch(`http://3.128.182.247/api/customers/${cedula}`)
  .then((response) => response.json())
  .then((customer) => {
    document.getElementById("cedula").textContent = customer.cedula;
    document.getElementById("nombre").textContent =
      "Nombre: " + customer.nombre;
    document.getElementById("telefono").textContent = customer.telefono;
    document.getElementById("correo").textContent = customer.correo;
    document.getElementById("direccion").textContent = customer.direccion;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function getCookie(nombre) {
  var nombreCookie = nombre + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(nombreCookie) == 0) {
      return cookie.substring(nombreCookie.length, cookie.length);
    }
  }
  return null;
}

var id = urlParams.get("id");
console.log(id);

fetch(`http://3.128.182.247/api/products/byId/${id}`)
  .then((response) => {
    return response.json();
  })
  .then((product) => {
    document.getElementById("nombrep").textContent = product.name;
    document.getElementById("subtotal").textContent = "$ " + product.price;
    document.getElementById("cantidad").textContent = product.quantity;
    document.getElementById("total").textContent = float(document.getElementById("subtotal")) * int(document.getElementById("cantidad"));
  });

function mostrarUbicacionUsuario(map, marker, direccion) {
    var geocoder = new google.maps.Geocoder();
    // Realizar la geocodificación de la dirección
    geocoder.geocode({ address: direccion }, function (results, status) {
        if (status === "OK") {
            if (results[0]) {
                var coordenadas = results[0].geometry.location;
                map.setCenter(coordenadas);
                map.setZoom(10);
                marker.setPosition(coordenadas);
            } else {
                alert("No se encontraron resultados para la dirección.");
            }
        } else {
            alert("Geocodificación fallida debido a: " + status);
        }
    });
  
    //CURRENT LOCATION
    /*if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                var coord = {
                    lat: latitude,
                    lng: longitude
                };
                map.setCenter(coord);
                map.setZoom(10);
                marker.setPosition(coord);
            },
            () => {
                alert("Tu navegador tiene soporte de geolocalización, pero ocurrió un error.");
            }
        );
    } else {
        alert("Tu navegador no soporta geolocalización.");
    }*/
  }
  
  function iniciarMap() {
    var coord = { lat: 4.6097100, lng: -74.0817500 };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: coord,
        zoom: 10
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map,
    });
  
    var button = document.getElementById('button');
    button.addEventListener('click', () => {
        var direccion = document.getElementById('direccion').textContent;
        mostrarUbicacionUsuario(map, marker, direccion);
    });
  }
