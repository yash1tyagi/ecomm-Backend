const Seller = require("../../models/seller/seller")
const bcrypt = require("bcryptjs")
const JWT_SECRET = "YAsHtYaGi"
const jwt = require('jsonwebtoken');

const registerdUser = (async (req, res) => {

    // Seller Account create
    try {
        const { name, email, password, phone } = req.body
        if (name && email && password && phone) {
            const userExists = await Seller.findOne({ email });

            if (userExists) {
                res.status(400).json("User Alredy exists")
            }
            else {
                const genSalt =  await bcrypt.genSalt(10);
                const secPass = await bcrypt.hash(password , genSalt)
                let creatUser = await Seller.create({ name, email,password : secPass, phone })
                const authtoken = jwt.sign({user:creatUser._id}, JWT_SECRET);
                res.status(200).json({authtoken})
            }
        }
        else {
            res.status(400).json("Plese fill all details")
        }


    } catch (error) {
        res.status(400).json("Error --- >  " + error)
    }
})


 // Login Seller Account

 const loginSeller = (async(req, res) =>{
    try {
       
        const {email , password} = req.body
        const user = await Seller.findOne({email})
        if (!user) {
            res.status(401).json("You are Not a Seller")
        }
        else{
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({error: "Pleses try to login right credential"})
        }
        else{
            const authtoken = jwt.sign({user:user._id}, JWT_SECRET);
        //   const success = true
            res.status(200).json({authtoken})
        }
    }
    } catch (error) {
        res.status(200).json("Error --> " + error)
    }
 })


module.exports = { registerdUser, loginSeller }