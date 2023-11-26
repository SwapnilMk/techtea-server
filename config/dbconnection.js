// import mongoose from "mongoose";
const colors = require("colors");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Mongo server run on ${mongoose.connection.host}`.black.bgWhite
    );
  } catch (error) {
    console.log(`${error}`);
  }
};

module.exports = connectDB;
