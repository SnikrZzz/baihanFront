
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
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                console.log(data); // Manejar la respuesta del servidor
            })
            .catch(error => {
                console.error("Error al enviar la imagen:", error);
            });
    } else {
        console.log("No se seleccionó ningún archivo.");
    }
}

