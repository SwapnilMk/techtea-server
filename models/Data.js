//API testing
const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    surname: {
        type: String,
        required: true,
    },

    address: {
        type: String,
    },

    phone: {
        type: Number,
        unique: true,
        minlength: 10,
        maxlength: 20,
    }
}, { timestamps: true }
);

module.exports = mongoose.model("Data", dataSchema);
