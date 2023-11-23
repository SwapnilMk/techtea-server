const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
app.use(cors());

app.get("/", (req, res)=>{
    res.send("<h1>hello server is now live</h1>")
})

app.listen(port, ()=>{
    console.log(`server started in port ${port}`)
})