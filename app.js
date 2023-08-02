const express = require('express');
const app = express();
const path = require('path');
const mainRoute = require('./src/routes/main');
const productRoute = require('./src/routes/product');


app.use(express.static(path.resolve(__dirname,'public')));
app.use(express.json());

app.listen(3000, () => console.log('Server up OK!'));

app.use('/', mainRoute);
app.use('/product', productRoute);

