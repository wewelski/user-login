const express = require("express");
const { get } = require("http");
const app = express();
const path = require("path");

app.set("views",path.join(__dirname, "/views"));
app.set("view engine","ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req,res) => {
  res.render("index", {title: "Home"});
})

app.get("/login", (req,res) => {
  res.render("login");
})

app.post("/login", (req,res) => {

})

app.get("/register", (req,res) => {
  res.render("register");
})

app.post("/register", (req,res) => {
  
})

app.listen(3000, () => {
  console.log("Listening to Port 3000..");
})