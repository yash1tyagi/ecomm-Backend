const express = require('express')
const { createProduct, updateProduct, deleteProduct, serchProduct, viewAllProduct } = require('../../controlers/seller/sellerProduct')
const fetchuser = require('../../middleware/fetchUser')
const router = express.Router()

// Create Product
router.post('/' ,fetchuser, createProduct)

// Update product
router.put('/updateProduct/:id' , fetchuser , updateProduct)

// DeleteProduct
router.delete('/deleteProduct/:id', fetchuser , deleteProduct)

// Serch Product
router.get('/search' , fetchuser , serchProduct)

// View all Product
router.get('/view'  , viewAllProduct)


module.exports =  router