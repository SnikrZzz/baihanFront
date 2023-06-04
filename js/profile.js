const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var cedula = getCookie("userBaihan");
console.log(cedula);

fetch(`http://3.128.182.247/api/customers/${cedula}`)
  .then((response) => response.json())
  .then((customer) => {
    document.getElementById("cedula").textContent = customer.cedula;
    document.getElementById("nombre").value = customer.nombre;
    document.getElementById("telefono").value = customer.telefono;
    document.getElementById("direccion").value = customer.direccion;
    document.getElementById("dirAdInfo").value = customer.descripcion;
    document.getElementById("email").value = customer.correo;
    document.getElementById("password").value = customer.password;
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

document.getElementById("actualizar").onclick = () => {
  let customer = {
    cedula: document.getElementById("cedula").textContent,
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("email").value,
    password: document.getElementById("password").value,
    telefono: document.getElementById("telefono").value,
    direccion: document.getElementById("direccion").value,
    descripcion: document.getElementById("dirAdInfo").value,
  };

  fetch("http://3.128.182.247/api/customers/savecustomer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then(function (response) {
    if (response.ok) {
      // Procesar la respuesta de la API
      response.json().then(function (data) {
        location.assign("./profile.html");
        console.log(data);
        return true;
      });
    } else {
      // Manejar los errores de la API
      //console.log("Error en la solicitud");
      return false;
    }
  });
};

//DISPLAYING PRODUCTS
getData("http://3.128.182.247/api/products/byCustomerId/" + cedula).then(() => {
  result.forEach((element) => {
    const producto = document.createElement("div");
    const code = parseInt(element.eanCode);
    producto.classList.add(
      "card",
      "mb-3",
      "rounded-0",
      "col-lg-5",
      "col-sm-12",
      "mx-auto"
    );
    producto.innerHTML =
      '<div class="row">' +
      '<div class="col-md-3">' +
      '<a href="product.html?id=' +
      element.eanCode +
      '" class="text-dark" style="text-decoration: none">' +
      '<img src="http://3.128.182.247:5000/static/uploads/' +
      element.picture +
      '" class="card-img rounded-0" style="margin-left: -12px; height: 180px; width: 180px" alt="Product Image">' +
      "</div>" +
      '<div class="col-md-8" style="margin-left: 12px">' +
      '<div class="card-body d-flex flex-column h-100 justify-content-between">' +
      '<div class="row">' +
      '<h4 class="card-title" style="font-size: 35px">' +
      element.name +
      "</h4>" +
      "</div>" +
      '<div class="row">' +
      '<div class="col-6">' +
      "<p>Marca: " +
      element.brand +
      "</p>" +
      "</a>" +
      "</div>" +
      "</div>" +
      '<div class="row">' +
      '<div class="col-8">' +
      '<a href="product.html" style="text-decoration: none; color: #e55e01; font-weight: bold">' +
      '<p style="font-size: 25px"> $ ' +
      element.price +
      " COP </p>" +
      "</div>" +
      "</a>" +
      '<div class="col-2">' +
      '<button id="' +
      element.eanCode +
      '" class="btn btn-theme-primary">Editar</button>' + //BOTÓN EDITAR
      "</div>" +
      '<div class="col-2">' +
      '<button id="' +
      element.eanCode +
      "eliminar" +
      '" class="btn btn-theme-primary">Eliminar</button>' + //BOTÓN ELIMINAR
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";

    document.getElementById("productos").appendChild(producto);

    document.getElementById(element.eanCode).addEventListener("click", edit);
    document
      .getElementById(element.eanCode + "eliminar")
      .addEventListener("click", () => {
        var respuesta = confirm(
          "¿Estás seguro de que deseas borrar el producto?"
        );
        if (respuesta) {
          // Si el usuario hace clic en "Aceptar" en el cuadro de diálogo
          // Aquí puedes realizar la lógica para borrar el producto
          console.log(code);
          alert("¡Borrado!")
          fetch("http://3.128.182.247/api/products/" + code, {
            method: "DELETE",
          })
            .then((response) => {
              if (response.ok) {
                console.log(code);
                console.log("Product deleted successfully");
              } else {
                console.log("No sirve");
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
          console.log("Producto borrado.");
          window.location.href = "./home.html";
        } else {
          // Si el usuario hace clic en "Cancelar" en el cuadro de diálogo
          alert("No se borró el producto :)")
        }
      });
  });
});

function edit(event) {
  const idProducto = event.srcElement.id;
  window.location.href = "./updateProduct.html?id=" + idProducto;
}

function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      result = data;
    })
    .catch((error) => console.error(error));
}
