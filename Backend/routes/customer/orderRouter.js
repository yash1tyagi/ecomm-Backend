const express = require('express');
const fetchuser = require('../../middleware/fetchUser');
const { orderProduct, orderCartProduct } = require('../../controlers/customer/orderControler');
// const { orderCartProduct } = require('../../controlers/customer/cartControler');
const router = express.Router()

// order single product 
router.post('/:id' , fetchuser , orderProduct)

// order cart product
router.get('/cartOrder' , fetchuser , orderCartProduct)



module.exports = router