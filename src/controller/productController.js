const path = require('path');
const productData = require('../productData.json');

const { results } = productData;

const productController = {
    list: (req, res) => {
      res.render('product')
    },
    productDetail: (req, res) => {
        const { id } = req.params;

        const productItem = results.find(prod => prod.id === id)

        res.render('product', { item: productItem})


    }
}

module.exports = productController;