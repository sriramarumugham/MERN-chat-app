const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo db connected", conn.connection.host);
  } catch (err) {
    console.log("error", err);
    process.exit();
  }
};
module.exports = connectDB;
