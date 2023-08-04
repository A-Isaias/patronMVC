const path = require('path');
const productData = require('../productData.json');

const mainController = {
    home: (req, res) => {
        const data = productData.results

        res.render('home', {
            title: 'Mercado  Liebre',
            data: data
        })
    },

    search: (req, res) => {
        const {
            q
        } = req.query;

        const {
            results
        } = productData

        if (q) {

            const listSearch = results.filter(({
                title
            }) => title.includes(q.toLowerCase()))

            res.render('home', {
                title: 'Mercado Liebre',
                data: listSearch
            })
        }

        res.render('home', {
            title: 'Mercado  Liebre',
            data: results
        })
    }
}

module.exports = mainController;