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

    if(input.match(pattern)) {
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

cedula.onkeyup = ()=>{idValidation()}

//VALIDATION OF "NOMBRE"
function nameValidation() {
    const nombre = document.getElementById("nombre")
    var input = document.getElementById("nombre").value
    var pattern = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']+$/

    if(input.match(pattern)) {
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

nombre.onkeyup = ()=>{nameValidation()}

//VALIDATION OF "EMAIL" "SOMETHING@ELSE.DOT"
function emailValidation() {
    const email = document.getElementById("email")
    var input = document.getElementById("email").value
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(input.match(pattern)) {
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

email.onkeyup = ()=>{emailValidation()}

//VALIDATION "CONFIRMAR CORREO" SAME AS "CORREO"
function emailConfirmationValidation() {
    const email1 = document.getElementById("email1")
    var input = document.getElementById("email1").value
    var confInput = document.getElementById("email").value

    if(input===confInput) {
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

email1.onkeyup = ()=>{emailConfirmationValidation()}

//VALIDATION OF "CONTRASEÑA". MIN 8 CARACTERS, MIN ONE UPPERCASE AND SPECIAL CARACTERS
function passwordValidation() {
    const password = document.getElementById("password")
    var input = document.getElementById("password").value
    var pattern = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/

    if(input.match(pattern)) {
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

password.onkeyup = ()=>{passwordValidation()}

//VALIDATION "CONFIRMAR CONTRASEÑA" SAME AS "CONTRASEÑA"
function passwordConfirmationValidation() {
    const password1 = document.getElementById("password1")
    var input = document.getElementById("password1").value
    var confInput = document.getElementById("password").value

    if(input===confInput) {
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

password1.onkeyup = ()=>{passwordConfirmationValidation()}

//VALIDATION OF "TELÉFONO" 10 DIGIT NUMBER
function mobileValidation() {
    const telefono = document.getElementById("telefono")
    var input = document.getElementById("telefono").value
    var pattern = /^[0-9]{10}$/

    telefono.addEventListener("input", () => {
        telefono.value = telefono.value.replace(/\D/g, "");
    });

    if(input.match(pattern)) {
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

telefono.onkeyup = ()=>{mobileValidation()}

//ADDRESS VALIDATIONS
function viaValidation() {//"VIA"
    const via = document.getElementById("via")
    var input = document.getElementById("via").value
    var pattern = /^[a-zA-Z0-9]+$/

    if(input.match(pattern)) {
        via.style.border = "2px solid #2FC11D"
        setTimeout(() => {
            via.style.cssText = previousStyle
        }, 2000);
        mostrarError(via, false);
        return true
    }else {
        via.style.border = "2px solid red"
        mostrarError(via, true);
    }
}

via.onkeyup = ()=>{viaValidation()}

function numeroValidation() {//"NUMERO"
    const numero = document.getElementById("numero")
    var input = document.getElementById("numero").value
    var pattern = /^[a-zA-Z0-9]+$/

    if(input.match(pattern)) {
        numero.style.border = "2px solid #2FC11D"
        setTimeout(() => {
            numero.style.cssText = previousStyle
        }, 2000);
        mostrarError(numero, false);
        return true
    }else {
        numero.style.border = "2px solid red"
        mostrarError(numero, true);
    }
}

numero.onkeyup = ()=>{numeroValidation()}

function casaValidation() {//"CASA"
    const casa = document.getElementById("casa")
    var input = document.getElementById("casa").value
    var pattern = /^[a-zA-Z0-9]+$/

    if(input.match(pattern)) {
        casa.style.border = "2px solid #2FC11D"
        setTimeout(() => {
            casa.style.cssText = previousStyle
        }, 2000);
        mostrarError(casa, false);
        return true
    }else {
        casa.style.border = "2px solid red"
        mostrarError(casa, true);
    }
}

casa.onkeyup = ()=>{casaValidation()}

//"DEPARTAMENTO"
function departmentValidation() {
    const departamento = document.getElementById("departamento")

    if (departamento.selectedIndex != 0) {
        mostrarError(departamento, false)
        return true
    } else {
        mostrarError(departamento, true)
        return false
    }
}

document.getElementById("departamento").onchange = ()=>{departmentValidation()}

//"CIUDAD"
function ciudadValidation() {
    const ciudad = document.getElementById("ciudad")

    if (ciudad.selectedIndex != 0) {
        mostrarError(ciudad, false);
        return true
    } else {
        mostrarError(ciudad, true);
        return false
    }
}

document.getElementById("ciudad").onchange = ()=>{ciudadValidation()}

//"TIPODECALLE"
function tipoCalleValidation() {
    const tipoCalle = document.getElementById("tipo_calle")

    if (tipoCalle.selectedIndex != 0) {
        mostrarError(tipoCalle, false);
        return true
    } else {
        mostrarError(tipoCalle, true);
        return false
    }
}

document.getElementById("tipo_calle").onchange = ()=>{tipoCalleValidation()}

//FINAL VALIDATION
const checkbox = document.getElementById("acceptCheck")
var submitButton = document.getElementById("regBtn")
checkbox.addEventListener("change", () => {
    let isValid = 0
    idValidation()? isValid++: null;
    nameValidation()? isValid++: null;
    emailValidation()? isValid++: null;
    emailConfirmationValidation()? isValid++: null;
    passwordValidation()? isValid++: null;
    passwordConfirmationValidation()? isValid++: null;
    mobileValidation()? isValid++: null;
    viaValidation()? isValid++: null;
    numeroValidation()? isValid++: null;
    casaValidation()? isValid++: null;
    departmentValidation()? isValid++: null;
    ciudadValidation()? isValid++: null;
    tipoCalleValidation()? isValid++: null;
    if(isValid == 13) {
        submitButton.classList.remove("disabled")
    }
})

submitButton.onclick = ()=>{
    location.assign("./home.html")
    
}

function mostrarError(input, accion){
    let container = input.parentElement;
    for(hijo of container.children){
        if(hijo.classList.contains("error-message")){
            if(accion)
                hijo.classList.add("d-block");
            else
                hijo.classList.remove("d-block");
        }
    }
}