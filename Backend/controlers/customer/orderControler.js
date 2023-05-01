const Customer = require("../../models/customer/customer");
const Order = require("../../models/customer/order");
const Product = require("../../models/seller/product");
const Cart = require("../../models/customer/cart")
const orderProduct = (async(req, res)=>{
    try {
        const {quantity , size, totalAmount} = req.body; 
        const findProduct = await Product.findById(req.params.id) 
            const createOrder = await Order.create({
                productId : req.params.id,
                customerId : req.user,
                quantity: quantity,
                product : findProduct, 
                totalAmount : totalAmount,
                size : size
            })
            res.send({createOrder})
        }
   catch (error) {
        res.status(400).json("Error ---> "+ error)
    }
})




// order cart product
const orderCartProduct = (async(req, res)=>{
    try {
        const findItem = await Cart.find({customerId : req.user}).select('-_id')
        const a = []
        const add = a.concat(findItem)
       const addItem = await Order.insertMany(add)
       res.send(addItem)
        
    } catch (error) {
        res.status(400).json("error ---> "+ error)
    }

})

module.exports = {orderProduct , orderCartProduct}