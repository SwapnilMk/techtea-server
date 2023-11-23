const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>hello world! this is</h1>")
})

app.listen(port, ()=>{
    console.log(`server started in port ${port}`)
})