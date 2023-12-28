const mongoose = require('mongoose');
const colors = require("colors")


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongo server run on ${mongoose.connection.host}`.bgGreen);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;

