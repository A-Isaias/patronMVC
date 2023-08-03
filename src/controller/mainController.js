const path = require('path');
const productData = require('../productData.json');



const mainController = {
    home: (req, res) =>{
        const data = productData.results

        res.render('home',{ title: 'Mercado  Liebre', data: data })},
}

module.exports = mainController;