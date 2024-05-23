const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs")
app.use(express.static("./styles"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    res.send("home")
});
app.get("/about", (req, res) =>{
    res.send("about page");
});

app.get("/user/:name", (req, res) =>{
    const userName = req.params.name;
    res.send("user", {name: userName});
});


app.listen(PORT, () =>{
    console.log("It is running")
});