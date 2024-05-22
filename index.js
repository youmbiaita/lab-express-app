const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = 3000;

app.use(express.static("./styles"))

app.listen(PORT, () =>{
    console.log("It is running")
});