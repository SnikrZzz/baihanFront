//USED CEDULA STYLE TO GET CSSTEXT FOR FORMER UPDATES ON FIELDS
const css = document.getElementById("cedula")
const previousStyle = css.style.cssText

//VALIDATION OF "CEDULA" JUST NUMBERS AND 7 OR 10 DIGITS
function idValidation() {
    const cedula = document.getElementById("cedula")
    var input = document.getElementById("cedula").value
    var pattern = /^\d{8}(\d{2})?$/

    cedula.addEventListener("input", () => {
        cedula.value = cedula.value.replace(/\D/g, "");
    });

    if (input.match(pattern)) {
        cedula.style.border = "2px solid #2FC11D"
        setTimeout(() => {
            cedula.style.cssText = previousStyle
        }, 2000);
        mostrarError(cedula, false);
        return true
    } else {
        cedula.style.border = "2px solid red"
        mostrarError(cedula, true);
    }
}

cedula.onkeyup = () => { idValidation() }

//VALIDATION OF "NOMBRE"
function nameValidation() {
    const nombre = document.getElementById("nombre")
    var input = document.getElementById("nombre").value
    var pattern = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']+$/

    if (input.match(pattern)) {
        nombre.style.border = "2px solid #2FC11D"
        setTimeout(() => {
            nombre.style.cssText = previousStyle
        }, 2000);
        mostrarError(nombre, false);
        return true
    } else {
        nombre.style.border = "2px solid red"
        mostrarError(nombre, true);
    }
}

nombre.onkeyup = () => { nameValidation() }

//VALIDATION OF "EMAIL" "SOMETHING@ELSE.DOT"
function emailValidation() {
    const email = document.getElementById("email")
    var input = document.getElementById("email").value
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (input.match(pattern)) {
        email.style.border = "2px solid #2FC11D"
        setTimeout(() => {
            email.style.cssText = previousStyle
        }, 2000);
        mostrarError(email, false);
        return true
    } else {
        email.style.border = "2px solid red"
        mostrarError(email, true);
    }
}

email.onkeyup = () => { emailValidation() }

//VALIDATION "CONFIRMAR CORREO" SAME AS "CORREO"
function emailConfirmationValidation() {
    const email1 = document.getElementById("email1")
    var input = document.getElementById("email1").value
    var confInput = document.getElementById("email").value

    if (input === confInput) {
        email1.style.border = "2px solid #2FC11D"
        setTimeout(() => {
            email1.style.cssText = previousStyle
        }, 2000);
        mostrarError(email1, false);
        return true
    } else {
        email1.style.border = "2px solid red"
        mostrarError(email1, true);
    }
}

email1.onkeyup = () => { emailConfirmationValidation() }

//VALIDATION OF "CONTRASEÑA". MIN 8 CARACTERS, MIN ONE UPPERCASE AND SPECIAL CARACTERS
function passwordValidation() {
    const password = document.getElementById("password")
    var input = document.getElementById("password").value
    var pattern = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/

    if (input.match(pattern)) {
        password.style.border = "2px solid #2FC11D"
        setTimeout(() => {
            password.style.cssText = previousStyle
        }, 2000);
        mostrarError(password, false);
        return true
    } else {
        password.style.border = "2px solid red"
        mostrarError(password, true);
    }
}

password.onkeyup = () => { passwordValidation() }

//VALIDATION "CONFIRMAR CONTRASEÑA" SAME AS "CONTRASEÑA"
function passwordConfirmationValidation() {
    const password1 = document.getElementById("password1")
    var input = document.getElementById("password1").value
    var confInput = document.getElementById("password").value

    if (input === confInput) {
        password1.style.border = "2px solid #2FC11D"
        setTimeout(() => {
            password1.style.cssText = previousStyle
        }, 2000);
        mostrarError(password1, false);
        return true
    } else {
        password1.style.border = "2px solid red"
        mostrarError(password1, true);
    }
}

password1.onkeyup = () => { passwordConfirmationValidation() }

//VALIDATION OF "TELÉFONO" 10 DIGIT NUMBER
function mobileValidation() {
    const telefono = document.getElementById("telefono")
    var input = document.getElementById("telefono").value
    var pattern = /^[0-9]{10}$/

    telefono.addEventListener("input", () => {
        telefono.value = telefono.value.replace(/\D/g, "");
    });

    if (input.match(pattern)) {
        telefono.style.border = "2px solid #2FC11D"
        setTimeout(() => {
            telefono.style.cssText = previousStyle
        }, 2000);
        mostrarError(telefono, false);
        return true
    } else {
        telefono.style.border = "2px solid red"
        mostrarError(telefono, true);
    }
}

telefono.onkeyup = () => { mobileValidation() }


//FINAL VALIDATION
const checkbox = document.getElementById("acceptCheck")
var submitButton = document.getElementById("regBtn")
checkbox.addEventListener("change", () => {
    let isValid = 0
    idValidation() ? isValid++ : null;
    nameValidation() ? isValid++ : null;
    emailValidation() ? isValid++ : null;
    emailConfirmationValidation() ? isValid++ : null;
    passwordValidation() ? isValid++ : null;
    passwordConfirmationValidation() ? isValid++ : null;
    mobileValidation() ? isValid++ : null;
    console.log(isValid)
    if (isValid == 7) {
        submitButton.classList.remove("disabled")
        document.getElementById("valid").innerHTML = '<p style="color: green;">Registro correcto</p>';
    } else {
        document.getElementById("valid").innerHTML = '<p style="color: red;">Registro incorrecto</p>';

    }
})

submitButton.onclick = () => {
    let customer = {
        "cedula": document.getElementById("cedula").value,
        "nombre": document.getElementById("nombre").value,
        "correo": document.getElementById("email").value,
        "password": document.getElementById("password").value,
        "telefono": document.getElementById("telefono").value,
        "direccion": document.getElementById("direccion").value,
        "descripcion": document.getElementById("refadd").value
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
                setCookie("userBaihan", data.cedula, 7);
                location.assign("./home.html")
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

function mostrarError(input, accion) {
    let container = input.parentElement;
    for (hijo of container.children) {
        if (hijo.classList.contains("error-message")) {
            if (accion)
                hijo.classList.add("d-block");
            else
                hijo.classList.remove("d-block");
        }
    }
}

function setCookie(nombre, valor, expiracion) {
    var fechaExpiracion = new Date();
    fechaExpiracion.setTime(fechaExpiracion.getTime() + expiracion * 24 * 60 * 60 * 1000);
    var expira = "expires=" + fechaExpiracion.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expira + ";path=/";
}