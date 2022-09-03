const express = require('express');
const productsRouter = require('./routes/products');

const app = express();

app.listen(8080, () => console.log('Server Up!!'));

app.use(express.json());
app.use(express.static('public'));

app.use('/api', productsRouter);

