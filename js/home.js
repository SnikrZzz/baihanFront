//DISPLAYING PRODUCTS
getData("http://3.128.182.247/api/products").then(() => {
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
      '<a href="product.html?id=' +
      element.eanCode +
      '" class="text-dark" style="text-decoration: none">' +
      '<img src="http://3.128.182.247:5000/static/uploads/' +
      element.picture +
      '" class="card-img rounded-0" style="margin-left: -12px; height: 180px; width: 180px" alt="Product Image">' +
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
      '<a href="product.html?id=' +
      element.eanCode +
      '" style="text-decoration: none; color: #e55e01; font-weight: bold">' +
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
  //IF SEARCHBAR EMPTY
  if (searchProduct == "") {
    //DISPLAYING PRODUCTS
    document.getElementById("catalogo").innerHTML = "";
    getData("http://3.128.182.247/api/products").then(() => {
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
          '<a href="product.html?id=' +
          element.eanCode +
          '" class="text-dark" style="text-decoration: none">' +
          '<img src="http://3.128.182.247:5000/static/uploads/' +
          element.picture +
          '" class="card-img rounded-0" style="margin-left: -12px; height: 180px; width: 180px" alt="Product Image">' +
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
          '<a href="product.html?id=' +
          element.eanCode +
          '" style="text-decoration: none; color: #e55e01; font-weight: bold">' +
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
  } else {
    //FILTERING BY NAME OR BRAND
    getData("http://3.128.182.247/api/products/byString/" + searchProduct).then(
      () => {
        document.getElementById("catalogo").innerHTML = "";
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
            '<a href="product.html?id=' +
            element.eanCode +
            '" class="text-dark" style="text-decoration: none">' +
            '<img src="http://3.128.182.247:5000/static/uploads/' +
            element.picture +
            '" class="card-img rounded-0" style="margin-left: -12px; height: 180px; width: 180px" alt="Product Image">' +
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
      }
    );
  }
});
