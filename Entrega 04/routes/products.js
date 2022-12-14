
const express = require('express');
const crypto = require('crypto');
const router = express.Router();
let products = require('../data/products_data'); 

// Middleware para validar lo que viene en el body como dato de entrada
const validarInputsProduct = (req,res,next) => {
  let producto = req.body;

  if(producto.title === '' || producto.price <= 0 || producto.price === '') return res.status(404).send({
    status: 'ERROR',
    result: 'Ingrese los datos del producto correctamente'
  });

  next();
}

// Middleware para validar si existe el ID del producto
const validarProductId = (req,res,next) => {
  let { id } = req.params;  

  let existe = products.some(p => p.id === id);

  existe ? next() : res.status(200).send({ status:'ERROR', result: `No existe producto con ID ${id}`});
}

router.get('/productos', (req, res) => {
  res.status(200).send({status: 'OK', result:products});
});

router.get('/productos/:id', validarProductId, (req, res) => {
  let {id} = req.params;
  let prod = products.find( p => p.id === id);  

  // Si pasa la validación, se que el producto va a existir, por eso no pongo un "else"
  res.status(200).send({status: 'OK', result: prod})        
});

router.post('/productos', validarInputsProduct, (req, res) => {

  let producto = req.body;  
  producto.id = crypto.randomUUID();  

  products.push(producto);  
  res.status(200).send({status: 'OK', result: producto});  
});


router.put('/productos/:id', validarProductId, validarInputsProduct, (req, res) => {
  let {id} = req.params;

  // El producto existe porq pasó la validación de ID (validarProductId)
  let prod = products.find( p => p.id === id);  
        
  // Obtengo el producto que viene en el body
  let productoBody = req.body;

  prod.title = productoBody.title;
  prod.price = productoBody.price;
  prod.thumbnail = productoBody.thumbnail;

  res.status(200).send({status: 'OK', result: prod});
});


router.delete('/productos/:id', validarProductId, (req, res) => {
  let {id} = req.params;
  let prod = products.find( p => p.id === id);  

  products = products.filter( p => p.id !== id);
  res.status(200).send({status: 'OK', result: `Producto ID ${id} borrado correctamente`});
});

module.exports = router;