const Product = require("../../models/seller/product")

// Create Product


const createProduct = (async (req, res) => {
    try {
        const { productName, productPrice, productCategory, productImage, productDescription, sizeRequire, availableSize } = req.body
        if (productName && productPrice && productCategory && productImage && productDescription) {
            const createProduct = await Product.create({
                productName, productPrice, productCategory, productImage, productDescription, seller: req.user, sizeRequire , availableSize
            })
            res.json(createProduct)
            
        }
    } catch (error) {
        res.status(400).json("Error --> " + error)
    }
})

// Update Product 

const updateProduct = (async (req, res) => {
    try {
        const { productName, productPrice, productCategory, productImage, productDescription  } = req.body
        const updateProduct = {}
        if (productName) {
            updateProduct.productName = productName
        }
        if (productPrice) {
            updateProduct.productPrice = productPrice
        }
        if (productCategory) {
            updateProduct.productCategory = productCategory
        }
        if (productImage) {
            updateProduct.productImage = productImage
        }
        if (productDescription) {
            updateProduct.productDescription = productDescription
        }
        let product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).send("Not Found")
        }
        else {
            if (product.seller.toString() !== req.user) {
                return res.status(401).send("Not Allowed")
            }
            else{
                product = await Product.findByIdAndUpdate(req.params.id, { $set: updateProduct }, { new: true })
                res.json({ product })
            }
        }
    } catch (error) {
        res.status(400).json("Error --> " + error)
    }
})

// Delete Product 

const deleteProduct = (async(req, res)=>{
    try {
        let product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).send("Not Found")
        }
        else{
            if (product.seller.toString() !== req.user) {
                return res.status(401).send("Not Allowed")
            }
            else{
                product = await Product.findByIdAndDelete(req.params.id)
                res.status(200).json({product})
            }
        }

    } catch (error) {
        res.status(400).json("Error --> " + error)
    }
})

// Serch Product 

const serchProduct = (async(req, res)=>{
    try {
        const keyword = req.query.search
        ? {
            $or: [
              { productName: { $regex: req.query.search, $options: "i" } },
              { productPrice: { $regex: req.query.search, $options: "i" } },
              { productCategory: { $regex: req.query.search, $options: "i" } },
              { productDescription: { $regex: req.query.search, $options: "i" } },
            ],
          }
        : {};
        const product = await Product.find(keyword)
        res.json(product)
    } catch (error) {
        res.status(400).json("Error --> " + error)
    }
})


// view all Product

const viewAllProduct = (async(req, res)=>{
    try {
        const product = await Product.find()
        res.send(product)
    } catch (error) {
        res.status(400).json("Error --> " + error)
    }
})


module.exports = { createProduct, updateProduct, deleteProduct, serchProduct, viewAllProduct }