//DISPLAYING PRODUCTS
getData("http://127.0.0.1:8080/api/products").then(() => {
  result.forEach((element) => {
    const producto = document.createElement("div");
    producto.classList.add(
      "card",
      "mb-3",
      "rounded-0",
      "col-lg-5",
      "col-sm-12",
      "mx-auto"
    );
    producto.innerHTML =
      '<div class="row">' +
      '<div class="col-md-3">' +
      '<a href="product.html?id='+ element.eanCode + '" class="text-dark" style="text-decoration: none">' +
      '<img src="https://via.placeholder.com/300" class="card-img rounded-0" style="margin-left: -12px; height: 180px; width: 180px" alt="Product Image">' +
      "</div>" +
      '<div class="col-md-8" style="margin-left: 12px">' +
      '<div class="card-body d-flex flex-column h-100 justify-content-between">' +
      '<div class="row">' +
      '<h4 class="card-title" style="font-size: 35px">' +
      element.name +
      "</h4>" +
      "</div>" +
      '<div class="row">' +
      '<div class="col-6">' +
      "<p>Marca: " +
      element.brand +
      "</p>" +
      "</a>" +
      "</div>" +
      "</div>" +
      '<div class="row">' +
      '<div class="col-6">' +
      '<a href="product.html" style="text-decoration: none; color: #e55e01; font-weight: bold">' +
      '<p style="font-size: 25px"> $ ' +
      element.price +
      " COP </p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</a>";

    document.getElementById("catalogo").appendChild(producto);
  });
});

function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      result = data;
    })
    .catch((error) => console.error(error));
}

//SEARCHBAR
document.getElementById("search").addEventListener("click", function (event) {
  var searchProduct = document.getElementById("searchProduct").value; //SEARCH
  event.preventDefault();

  if (searchProduct == "") {
    document.getElementById("product").innerHTML = "";
    document.getElementById("catalogo").classList.remove("d-none");
  } else {
    //FILTER BY BRAND OR NAME
    getData("http://127.0.0.1:8080/api/products").then(() => {
      result.forEach((element) => {
        if (element.brand == searchProduct || element.name == searchProduct) {
          console.log("OK");
          const producto = document.createElement("div");
          producto.classList.add(
            "card",
            "mb-3",
            "rounded-0",
            "col-lg-5",
            "col-sm-12",
            "mx-auto"
          );
          producto.innerHTML =
            '<div class="row">' +
            '<div class="col-md-3">' +
            '<a href="product.html?id=' + element.eanCode + '"class="text-dark" style="text-decoration: none">' +
            '<img src="https://via.placeholder.com/300" class="card-img rounded-0" style="margin-left: -12px; height: 180px; width: 180px" alt="Product Image">' +
            "</div>" +
            '<div class="col-md-8" style="margin-left: 12px">' +
            '<div class="card-body d-flex flex-column h-100 justify-content-between">' +
            '<div class="row">' +
            '<h4 class="card-title" style="font-size: 35px">' +
            element.name +
            "</h4>" +
            "</div>" +
            '<div class="row">' +
            '<div class="col-6">' +
            "<p>Marca: " +
            element.brand +
            "</p>" +
            "</a>" +
            "</div>" +
            "</div>" +
            '<div class="row">' +
            '<div class="col-6">' +
            '<a href="product.html" style="text-decoration: none; color: #e55e01; font-weight: bold">' +
            '<p style="font-size: 25px"> $ ' +
            element.price +
            " COP </p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</a>";

          document.getElementById("product").appendChild(producto);
        }
      });
    });

    function getData(url) {
      document.getElementById("catalogo").classList.add("d-none");
      document.getElementById("product").innerHTML = "";
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          result = data;
        })
        .catch((error) => console.error(error));
    }

    //FILTER BY ID
    fetch("http://localhost:8080/api/products/" + searchProduct) // Ajusta la URL a tu ruta de Spring Boot
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Producto no encontrado");
        }
      })
      .then(function (data) {
        document.getElementById("product").innerHTML = "";
        const producto = document.createElement("div");
        producto.classList.add(
          "card",
          "mb-3",
          "rounded-0",
          "col-lg-5",
          "col-sm-12",
          "mx-auto"
        );
        producto.innerHTML =
          '<div class="row">' +
          '<div class="col-md-3">' +
          '<a href="product.html?id=' + data.eanCode + '"class="text-dark" style="text-decoration: none">' +
          '<img src="https://via.placeholder.com/300" class="card-img rounded-0" style="margin-left: -12px; height: 180px; width: 180px" alt="Product Image">' +
          "</div>" +
          '<div class="col-md-8" style="margin-left: 12px">' +
          '<div class="card-body d-flex flex-column h-100 justify-content-between">' +
          '<div class="row">' +
          '<h4 class="card-title" style="font-size: 35px">' +
          data.name +
          "</h4>" +
          "</div>" +
          '<div class="row">' +
          '<div class="col-6">' +
          "<p>Marca: " +
          data.brand +
          "</p>" +
          "</a>" +
          "</div>" +
          "</div>" +
          '<div class="row">' +
          '<div class="col-6">' +
          '<a href="product.html" style="text-decoration: none; color: #e55e01; font-weight: bold">' +
          '<p style="font-size: 25px"> $ ' +
          data.price +
          " COP </p>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</a>";

        document.getElementById("product").appendChild(producto);
      })
      .catch(function (error) {
        console.log("Hubo un error", error);
      });
  }
});