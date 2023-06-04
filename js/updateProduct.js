const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
const id = urlParams.get("id");
console.log(id);

fetch(`http://3.128.182.247/api/products/byId/${id}`)
  .then((response) => {
    return response.json();
  })
  .then((product) => {
    document.getElementById("codigoean").textContent = id;
    document.getElementById("nombre").value = product.name;
    document.getElementById("marca").value = product.brand;
    document.getElementById("precio").value = product.price;
    document.getElementById("descripcion").textContent = product.description;
    document.getElementById("cantidad").value = product.quantity;
    document.getElementById("picture").src =
      "http://3.128.182.247:5000/static/uploads/" + product.picture;

    document.getElementById("imageInput").addEventListener("change", () => {
      const file = document.getElementById("imageInput").files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        document.getElementById("picture").src = event.target.result;
      };

      reader.readAsDataURL(file);

      document.getElementById("picture").src = reader;
    });
  });

document.getElementById("actualizar").addEventListener("click", () => {
  const eanCode = id;
  const name = document.getElementById("nombre").value;
  const description = document.getElementById("descripcion").value;
  const brand = document.getElementById("marca").value;
  const quantity = document.getElementById("cantidad").value;
  const price = document.getElementById("precio").value;

  const imageInput = document.getElementById("imageInput");

  const picture = imageInput.files[0].name;

  const cedula = getCookie("userBaihan");

  const product = {
    eanCode: eanCode,
    name: name,
    description: description,
    brand: brand,
    quantity: quantity,
    price: price,
    picture: picture,
    customer: { cedula: cedula },
  };
  console.log(product);

  sendData("http://3.128.182.247/api/products/save", product);
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

function sendData(url, object) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  }).then(function (response) {
    if (response.ok) {
      // Procesar la respuesta de la API
      response.json().then(function (data) {
        uploadImage();
        return true;
      });
    } else {
      // Manejar los errores de la API
      //console.log("Error en la solicitud");
      return false;
    }
  });
}

function uploadImage() {
  // Obtener el elemento de entrada de archivo
  var input = document.getElementById("imageInput");

  // Verificar si se seleccionó un archivo
  if (input.files.length > 0) {
    var file = input.files[0];

    // Crear un objeto FormData para enviar el archivo al servidor
    var formData = new FormData();
    formData.append("file", file);

    // Realizar una solicitud POST al servidor Flask
    fetch("http://3.128.182.247:5000/upload", {
      //Cambiar la IP local al del servicio
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Manejar la respuesta del servidor
        console.log("SI SE SUBIO");
        window.location.href = "home.html";
      })
      .catch((error) => {
        console.error("Error al enviar la imagen:", error);
      });
  } else {
    console.log("No se seleccionó ningún archivo.");
  }
}
