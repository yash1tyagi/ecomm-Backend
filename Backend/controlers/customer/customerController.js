const Customer = require("../../models/customer/customer")
const bcrypt = require("bcryptjs")
const JWT_SECRET = "YAsHtYaGi"
const jwt = require('jsonwebtoken');

const registerdCustomer = (async (req, res) => {

    // Customer Account create
    try {
        const { name, email, password, phone } = req.body
        if (name && email && password && phone) {
            const userExists = await Customer.findOne({ email });

            if (userExists) {
                res.status(400).json("User Alredy exists")
            }
            else {
                const genSalt =  await bcrypt.genSalt(10);
                const secPass = await bcrypt.hash(password , genSalt)
                let creatUser = await Customer.create({ name, email,password : secPass, phone })
                const authtoken = jwt.sign({user:creatUser._id}, JWT_SECRET);
                res.status(200).json({authtoken , creatUser})
            }
        }
        else {
            res.status(400).json("Plese fill all details")
        }


    } catch (error) {
        res.status(400).json("Error --- >  " + error)
    }
})


 // Login Customer Account

 const loginCustomer = (async(req, res) =>{
    try {
        const {email , password} = req.body
        const user = await Customer.findOne({email})
        if (!user) {
            res.status(401).json("You are Not a Customer")
        }
        else{
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({success, error: "Pleses try to login right credential"})
        }
        else{
            const authtoken = jwt.sign({user:user._id}, JWT_SECRET);
            res.status(200).json({authtoken , user})
        }
    }
    } catch (error) {
        res.status(200).json("Error --> " + error)
    }
 })


module.exports = { registerdCustomer, loginCustomer }