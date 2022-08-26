const Contenedor = require("./contenedor");
const express = require("express");

const app = express();

// Declaro Array con productos
let productosArray = [
  {
    title: "Zapatillas Nike",
    price: 1500,
    thumbnail:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    id: 1,
  },
  {
    title: "Remera",
    price: 800,
    thumbnail:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
    id: 2,
  },
  {
    title: "Gorra",
    price: 350,
    thumbnail:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    id: 3,
  },
  {
    title: "Zapatillas Converse",
    price: 320,
    thumbnail:
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    id: 4,
  },
  {
    title: "Jean",
    price: 400,
    thumbnail:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=397&q=80",
    id: 5,
  },
  {
    title: "Zapatillas Adidas",
    price: 350,
    thumbnail:
      "https://images.unsplash.com/photo-1593287073863-c992914cb3e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    id: 6,
  },
];

const server = app.listen(8080, () => console.log("Server Up!!"));

app.get("/", (req, res) => {
  res.send('<div style="width=100%; text-align:center;"> <h2>Entrega 03 - Productos con Express <h2> </div>');
});

// Ruta que devuelve los productos del array
app.get("/productos", (req, res) => {
  res.send({
    status: "success",
    result: productosArray,
  });
});

// Ruta que devuelve un producto del array al azar
app.get("/productoRandom", (req, res) => {
  let id = Math.floor(Math.random() * productosArray.length + 1);
  let product = productosArray[id - 1];

  res.send({ status: "success", result: product });
});

// Ruta que devuelve los productos del txt
app.get("/productosTxt", (req, res) => {
  let prods = new Contenedor("productos.txt");
  prods.getAll()
    .then((resp) =>
      res.send({
        status: resp.status,
        result: resp.data
      })
    )
    .catch((error) => res.send({ status: "error", message: error.message }));
});

// Ruta que devuelve un producto del txt al azar
app.get("/productoRandomTxt", (req, response) => {
  let prods = new Contenedor("productos.txt");
  prods.getAll()
    .then( respuesta => {

      let id = Math.floor(Math.random() * respuesta.data.length + 1);      
      let product = respuesta.data[id - 1];  
      response.send({ status: "success", result: product });    

    });    
});