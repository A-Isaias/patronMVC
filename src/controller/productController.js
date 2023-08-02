const path = require('path');

const productController = {
    list: (req, res) => {
      res.sendFile(path.resolve(__dirname, '../views/product.html')) 
    },
    productDetail: (req, res) => {
        const { id } = req.params;

        // Consulta a la base de datos

        console.log(`Consulta a la base de datos: ${id}`)

        res.sendFile(path.resolve(__dirname, '../views/product.html')) 

    }
}

module.exports = productController;