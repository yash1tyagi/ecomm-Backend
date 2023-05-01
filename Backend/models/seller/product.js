const { timeStamp } = require('console');
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName :{
        type : String,
        require : true
    },
    productPrice :{
        type : String,
        require : true
    },
    productCategory :{
        type : String,
        require : true
    },
    productImage :{
        type : String,
        require : true
    },
    productDescription :{
        type : String,
        require : true
    },
    sizeRequire : {
        type : Boolean,
        default : false
    },
    availableSize : {
        type : Array,
        default : []
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },

},[timeStamp])

const Product = mongoose.model('product' , productSchema)

module.exports = Product