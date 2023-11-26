//API Testing
const express = require('express');
const Data = require('../models/Data.js');

const router = express.Router();


router.post('/', async (req, res) => {
    const newData = new Data(req.body);

    try {

        const saveData = await newData.save()

        res.status(200).json(saveData);


    } catch (err) {
        res.status(500).json(err)
    }
})

//get all data 
router.get("/", async (req, res) => {
    try {
        const getAllData = await Data.find({});
        if (!getAllData) {
            return res.status(404).json({ msg: "No Data found" })
        }
        res.json(getAllData)
    } catch (err) {
        console.log(err.message)
        res.send("Error")
    }
})

module.exports = router;