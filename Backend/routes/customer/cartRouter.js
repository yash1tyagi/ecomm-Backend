const express = require('express');
const { cartControler, findCartItem, deleteItem } = require('../../controlers/customer/cartControler');
const fetchuser = require('../../middleware/fetchUser');
const router = express.Router();


// Add Item to cart
router.post('/:id', fetchuser, cartControler)

// find cart Item
router.get('/find', fetchuser , findCartItem)

// Delete cart item 
router.delete('/deleteCart/:id', fetchuser, deleteItem)


module.exports = router