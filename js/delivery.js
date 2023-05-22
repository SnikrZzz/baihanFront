const css = document.getElementById("via")
const previousStyle = css.style.cssText

$('#miDireccion').on('change', function() {
    // Si el checkbox está seleccionado, muestra el cuadro de dirección predeterminada
    if ($(this).is(':checked')) {
        $('#direccionPredeterminada').show();
    } else {
        // Si el checkbox no está seleccionado, oculta el cuadro de dirección predeterminada
        $('#direccionPredeterminada').hide();
    }
});

//ADDRESS VALIDATIONS
function tipoCalleValidation() {//"TIPODECALLE"
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

var button = document.getElementById("ordenar")
var myAdd = document.getElementById("miDireccion")

myAdd.addEventListener("change", () => {
    button.classList.remove("disabled")
})

if(tipoCalleValidation()&&viaValidation()&&numeroValidation()&&casaValidation()) {
    button.classList.remove("disabled")
}

function mostrarError(input, accion) {
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