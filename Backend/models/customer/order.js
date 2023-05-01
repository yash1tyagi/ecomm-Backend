const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    productId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    customerId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"customer"
    },
    product : {
        type : Object,
        require : true
    },
    size : {
        type : String
    },
    quantity : {
        type : Number,
        default : 1
    },
    totalAmount : {
        type : Number, 
        require : true
    }

})

const Order = mongoose.model('order' , orderSchema)

module.exports = Order