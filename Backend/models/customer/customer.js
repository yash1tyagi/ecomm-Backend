const mongoose = require('mongoose')
// const {Schema} = mongoose.Schema()

const customerSchema = mongoose.Schema({
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

const Customer = mongoose.model("customer" , customerSchema);
module.exports = Customer