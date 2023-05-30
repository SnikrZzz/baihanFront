const css = document.getElementById("codigoean");
const previousStyle = css.style.cssText;

//VALIDATION OF EAN CODE
function eanCodeValidation() {
  const codigoean = document.getElementById("codigoean");
  var input = document.getElementById("codigoean").value;
  var pattern = /^[0-9]+$/;

  codigoean.addEventListener("input", () => {
    codigoean.value = codigoean.value.replace(/\D/g, "");
  });

  if (input.match(pattern)) {
    codigoean.style.border = "2px solid #2FC11D";
    setTimeout(() => {
      codigoean.style.cssText = previousStyle;
    }, 2000);
    mostrarError(codigoean, false);
    return true;
  } else {
    codigoean.style.border = "2px solid red";
    mostrarError(codigoean, true);
  }
}

codigoean.onkeyup = () => {
  eanCodeValidation();
};

//VALIDATION OF "NOMBRE"
function nameValidation() {
  const nombre = document.getElementById("nombre");
  var input = document.getElementById("nombre").value;
  var pattern = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s'0-9]+$/;

  if (input.match(pattern)) {
    nombre.style.border = "2px solid #2FC11D";
    setTimeout(() => {
      nombre.style.cssText = previousStyle;
    }, 2000);
    mostrarError(nombre, false);
    return true;
  } else {
    nombre.style.border = "2px solid red";
    mostrarError(nombre, true);
  }
}

nombre.onkeyup = () => {
  nameValidation();
};

//VALIDATION OF "MARCA"
function marcaValidation() {
  const marca = document.getElementById("marca");
  var input = document.getElementById("marca").value;
  var pattern = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s'0-9]+$/;

  if (input.match(pattern)) {
    marca.style.border = "2px solid #2FC11D";
    setTimeout(() => {
      marca.style.cssText = previousStyle;
    }, 2000);
    mostrarError(marca, false);
    return true;
  } else {
    marca.style.border = "2px solid red";
    mostrarError(marca, true);
  }
}

marca.onkeyup = () => {
  marcaValidation();
};

//VALIDATION OF "PRECIO"
function precioValidation() {
  const precio = document.getElementById("precio");
  var input = document.getElementById("precio").value;

  if (input > 0) {
    precio.style.border = "2px solid #2FC11D";
    setTimeout(() => {
        precio.style.cssText = previousStyle;
      }, 2000);
    mostrarError(precio, false);
    return true;
  } else {
    precio.style.border = "2px solid red";
    mostrarError(precio, true);
  }
}

precio.onkeyup = () => {
    validate();
};

//VALIDATION OF "CANTIDAD"
function cantidadValidation() {
    const cantidad = document.getElementById("cantidad");
    var input = document.getElementById("cantidad").value;
  
    if (input > 0) {
      cantidad.style.border = "2px solid #2FC11D";
      setTimeout(() => {
        cantidad.style.cssText = previousStyle;
      }, 2000);
      mostrarError(cantidad, false);
      return true;
    } else {
      cantidad.style.border = "2px solid red";
      mostrarError(cantidad, true);
    }
}

cantidad.onkeyup = () => {
    validate();
};

function mostrarError(input, accion) {
  let container = input.parentElement;
  for (hijo of container.children) {
    if (hijo.classList.contains("error-message")) {
      if (accion) hijo.classList.add("d-block");
      else hijo.classList.remove("d-block");
    }
  }
}

const button = document.getElementById("publicar");

function validate() {
  if (
    eanCodeValidation() &&
    nameValidation() &&
    marcaValidation() &&
    precioValidation() &&
    cantidadValidation()
  ) {
    button.classList.remove("disabled");
  }
}

button.addEventListener("click", (event) => {
  const eanCode = document.getElementById("codigoean").value;
  const name = document.getElementById("nombre").value;
  const description = document.getElementById("descripcion").value;
  const brand = document.getElementById("marca").value;
  const quantity = document.getElementById("cantidad").value;
  const price = document.getElementById("precio").value;
  const cedula = getCookie('userBaihan');

  const product = {
    eanCode: eanCode,
    name: name,
    description: description,
    brand: brand,
    quantity: quantity,
    price: price,
    customer: {cedula: cedula}
  };

  sendData("http://3.128.182.247/api/products/save", product);

  window.location.href = "home.html";
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
        return true;
      });
    } else {
      // Manejar los errores de la API
      //console.log("Error en la solicitud");
      return false;
    }
  });
}
