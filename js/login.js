//USED CEDULA STYLE TO GET CSSTEXT FOR FORMER UPDATES ON FIELDS
const css = document.getElementById("email")
const previousStyle = css.style.cssText

//VALIDATION OF "EMAIL" "SOMETHING@ELSE.DOT"
function emailValidation() {
    const email = document.getElementById("email")
    var input = document.getElementById("email").value
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    var trimmedInput = input.trim()

    if(input.match(pattern)) {
        email.style.border = "2px solid #2FC11D"
        setTimeout(() => {
            email.style.cssText = previousStyle
        }, 2000);
        mostrarError(email, false);
        return true
    } else if (trimmedInput===""){
        email.style.cssText = previousStyle
        mostrarError(email, true);
        return false
    }else {
        email.style.border = "2px solid red"
        mostrarError(email, true);
        return false
    }
}

email.onkeyup = ()=>{emailValidation()}

var button = document.getElementById("loginBtn")

function validateInput() {
    var vpassword = document.getElementById("password").value
    var trimmedInput = vpassword.trim();
    
    if(trimmedInput==="") {
        return false
    }else {
        button.classList.remove("disabled")
        return true
    }
}

password.onkeyup = ()=>{validateInput()}

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