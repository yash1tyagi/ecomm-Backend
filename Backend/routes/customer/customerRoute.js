const express = require('express')
const { registerdCustomer, loginCustomer } = require('../../controlers/customer/customerController')
const router = express.Router()


// Create  Customer
router.post('/' , registerdCustomer)

// Login Customer
router.post('/login' , loginCustomer)



module.exports = router