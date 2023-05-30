//USED CEDULA STYLE TO GET CSSTEXT FOR FORMER UPDATES ON FIELDS
const css = document.getElementById("email");
const previousStyle = css.style.cssText;

//VALIDATION OF "EMAIL" "SOMETHING@ELSE.DOT"
function emailValidation() {
  const email = document.getElementById("email");
  var input = document.getElementById("email").value;
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var trimmedInput = input.trim();

  if (input.match(pattern)) {
    email.style.border = "2px solid #2FC11D";
    setTimeout(() => {
      email.style.cssText = previousStyle;
    }, 2000);
    mostrarError(email, false);
    return true;
  } else if (trimmedInput === "") {
    email.style.cssText = previousStyle;
    mostrarError(email, true);
    return false;
  } else {
    email.style.border = "2px solid red";
    mostrarError(email, true);
    return false;
  }
}

email.onkeyup = () => {
  emailValidation();
};

var button = document.getElementById("loginBtn");

function validateInput() {
  var vpassword = document.getElementById("password").value;
  var trimmedInput = vpassword.trim();

  if (trimmedInput === "") {
    return false;
  } else {
    button.classList.remove("disabled");
    return true;
  }
}

password.onkeyup = () => {
  validateInput();
};

document.getElementById("loginBtn").onclick = () => {
  console.log("data");
  let customer = {
    correo: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  fetch("http://3.128.182.247/api/customers/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then(function (response) {
    if (response.ok) {
      // Procesar la respuesta de la API
      response.json().then(function (data) {
        if (data.cedula == null) {
          alert("No existe el usuario");
        } else {
          setCookie("userBaihan", data.cedula, 7);
          location.assign("./home.html");
        }
      });
    } else {
      // Manejar los errores de la API
      //console.log("Error en la solicitud");
      return false;
    }
  });
};

function setCookie(nombre, valor, expiracion) {
  var fechaExpiracion = new Date();
  fechaExpiracion.setTime(
    fechaExpiracion.getTime() + expiracion * 24 * 60 * 60 * 1000
  );
  var expira = "expires=" + fechaExpiracion.toUTCString();
  document.cookie = nombre + "=" + valor + ";" + expira + ";path=/";
}

function mostrarError(input, accion) {
  let container = input.parentElement;
  for (hijo of container.children) {
    if (hijo.classList.contains("error-message")) {
      if (accion) hijo.classList.add("d-block");
      else hijo.classList.remove("d-block");
    }
  }
}
