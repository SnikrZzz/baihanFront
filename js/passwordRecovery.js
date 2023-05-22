//USED CEDULA STYLE TO GET CSSTEXT FOR FORMER UPDATES ON FIELDS
const css = document.getElementById("email")
const previousStyle = css.style.cssText

//VALIDATION OF "EMAIL" "SOMETHING@ELSE.DOT"
function emailValidation() {
    const email = document.getElementById("email")
    var input = document.getElementById("email").value
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    var trimmedInput = input.trim()
    var button = document.getElementById("passwdRecoveryBtn")

    if(input.match(pattern)) {
        email.style.border = "2px solid #2FC11D"
        setTimeout(() => {
            email.style.cssText = previousStyle
        }, 2000);
        button.disabled = false
        return true
    } else if (trimmedInput===""){
        email.style.cssText = previousStyle
    }else {
        email.style.border = "2px solid red"
    }
}

email.onkeyup = ()=>{emailValidation()}