const Product = require("../../models/seller/product")


const viewProduct = (async(req, res)=>{
    try {
        const product = await Product.find()
        res.send(product)
    } catch (error) {
        res.status(400).json("Error --> " + error)
    }
})

const oneProductView = (async(req, res)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.send(product)
    } catch (error) {
        res.status(400).json("Error --> " + error)
    }
})

module.exports = {viewProduct, oneProductView}