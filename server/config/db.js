const mongoose = require("mongoose");
const config = require('config')

const connectDB = async () => {
  try {
    const con = await mongoose.connect(config.get("MONGO_URI")
    , {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};


module.exports = connectDB;
