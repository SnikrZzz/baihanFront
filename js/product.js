const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var id = urlParams.get('id');
console.log(id)


fetch(`http://3.128.182.247/api/products/${id}`).then(response => {
      return response.json()
}).then(product => {
      document.getElementById("nombre").textContent = product.name
      document.getElementById("marca").textContent = "marca: " + product.brand
      document.getElementById("precio").textContent = product.price
      document.getElementById("descripcion").textContent = product.description
});

function cargarcomentarios() {
      document.getElementById("comentarios").innerHTML = ""
      fetch(`http://3.128.182.247/api/comment/Byproduct/${id}`).then(response => {
            return response.json()
      }).then(Comments => {
            Comments.forEach(Comment => {
                  const comentario = document.createElement("div")
                  comentario.className = "card"
                  comentario.innerHTML = `<div class="card-body">
            <h5 class="card-title">${Comment.date}</h5>
            <p class="card-text">${Comment.text}</p>
            </div>`
                  document.getElementById("comentarios").appendChild(comentario)
            });
      });
}

cargarcomentarios()

const btncomentario = document.getElementById("btncomentario")
btncomentario.addEventListener("click", (e) => {


      let comentario = {
            "text": document.getElementById("comentario").value,
            "date": ""
      }

      fetch("http://3.128.182.247/api/comment/" + id, {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify(comentario)
      }).then(function (response) {
            if (response.ok) {
                  // Procesar la respuesta de la API
                  response.json().then(function (data) {
                        document.getElementById("comentario").value = ""
                        cargarcomentarios()
                        return true;
                  });
            } else {
                  // Manejar los errores de la API
                  //console.log("Error en la solicitud");
                  return false;
            }
      });
});