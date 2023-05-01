const express = require('express')
var cors = require('cors')
require("dotenv").config();
const connectDB = require('./config/db');
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000
connectDB();


//  Routers
           // Seller
app.use("/ecom/seller" , require('./routes/seller/sellerRoutes'))
app.use("/ecom/Product" , require('./routes/seller/productRouter'))
          // Customer
app.use('/ecom/customer' , require('./routes/customer/customerRoute'))
app.use('/ecom/order' , require('./routes/customer/orderRouter'))          
app.use('/ecom/cart' , require('./routes/customer/cartRouter'))
app.use('/ecom/viewProduct', require('./routes/customer/viewProduct'))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})