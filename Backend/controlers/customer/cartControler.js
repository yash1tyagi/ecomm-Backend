const Cart = require("../../models/customer/cart")
const Product = require("../../models/seller/product");



// Add Items to cart
const cartControler = (async(req, res)=>{
    try {
        const findProduct = await Product.findById(req.params.id)
        const {size, quantity} = req.body
        if(findProduct.sizeRequire == true){
            if (!size) {
                res.status(400).json("Size is require")
            }
            else{
                const totalAmount = findProduct.productPrice*quantity
                const createCart = await Cart.create({productId:req.params.id, customerId: req.user, product : findProduct , size, quantity ,  totalAmount})

                res.status(200).json(createCart)
            }
        }
        else{
        const createCart = await Cart.create({productId:req.params.id, customerId: req.user, product : findProduct , quantity , totalAmount})
        res.status(200).json(createCart) 
        }       
    } catch (error) {
        res.status(400).json("error ---> "+ error)
    }
})



// find cart items
    const findCartItem = (async(req, res)=>{
        try {
            const findItem = await Cart.find({customerId : req.user})
            res.status(200).json(findItem)
        } catch (error) {
            res.status(400).json("error ---> "+ error)
        }
    })


// Delete Item to Cart

const deleteItem = (async(req, res)=>{
    try {
        const deleteCart = await Cart.findByIdAndDelete(req.params.id)
        res.send(deleteCart)
    } catch (error) {
        res.status(400).json("error ---> "+ error)
    }
})


module.exports = {cartControler, findCartItem, deleteItem}
