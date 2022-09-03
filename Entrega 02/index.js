const Contenedor = require('./contenedor')

let prods = new Contenedor('productos.txt');


/* Creo 3 objetos (el ID se asigna automaticamente) */
prods.save( {title: 'Zapatillas Nike', price: 1500, thumbnail:'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'} )
 .then(res => console.log(res));

//prods.save( {title: 'Remera', price: 800, thumbnail:'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'} )
//  .then(res => console.log(res));

//prods.save( {title: 'Gorra', price: 350, thumbnail:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80'} )
//.then(res => console.log(res));  


/* Busco por ID */
//prods.getById(2)
//.then(res => console.log(res)); 

/* Traigo todos los objetos del archivo */
//prods.getAll().then(res => console.log(res)); 

/* Borro un objeto del archivo dado un ID */
//prods.deleteById(2).then(res => console.log(res));

/* Borro todos los objetos del archivo */
//prods.deleteAll();