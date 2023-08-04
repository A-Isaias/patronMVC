const path = require('path');
const dataBase = require('../dataBase/productsList.json')

const mainController = {
    home: (req, res) =>{
        const { results } = dataBase;
        // res.sendFile(path.resolve(__dirname, '../views/home.html'))},
        res.render('home', {data: results})
    }
}

module.exports = mainController;