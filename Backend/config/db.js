const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://next:y1ash2tyagi@cluster0.4zw7z.mongodb.net/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useFindAndModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;