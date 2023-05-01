const express = require('express')
const { registerdUser, loginSeller } = require('../../controlers/seller/sellerControler')
const router = express.Router()


// Auth
router.post('/' , registerdUser)
router.post('/login' , loginSeller)



module.exports = router