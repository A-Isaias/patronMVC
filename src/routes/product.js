const express = require('express');
const router = express.Router();
const productController = require('../controller/productController')

// /product
router.get('/', productController.list);

// /product/123
router.get('/:id', productController.productDetail);

module.exports = router;