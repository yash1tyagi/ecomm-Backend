const express = require('express');
const fetchuser = require('../../middleware/fetchUser');
const { viewProduct, oneProductView } = require('../../controlers/customer/productControler');
// const { orderCartProduct } = require('../../controlers/customer/cartControler');
const router = express.Router()

// view all Product
router.get('/:id' , fetchuser , oneProductView)

// view only one product 
router.get('/' , fetchuser , viewProduct)



module.exports = router