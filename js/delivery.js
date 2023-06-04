const css = document.getElementById("nuevaDireccion")
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

var button = document.getElementById("ordenar")
var myAdd = document.getElementById("miDireccion")

myAdd.addEventListener("change", () => {
    button.classList.remove("disabled")
})

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