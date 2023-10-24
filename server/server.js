const express = require("express");
const dotenv = require("dotenv").config()


const PORT = process.env.PORT || 5050
const app = express()

// app.get(')




app.listen(PORT, ()=>{
    console.log("Server listening http://localhost:"+PORT);
})

