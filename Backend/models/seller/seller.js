const mongoose = require('mongoose')
// const {Schema} = mongoose.Schema()

const sellerSchema = mongoose.Schema({
    name :{
        type : String,
        require : true
    },
    phone: {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
})

const Seller = mongoose.model("seller" , sellerSchema);
module.exports = Seller