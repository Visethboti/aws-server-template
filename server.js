const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extender: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/Contact", function(req, res){
  res.send("Contact me at histerlion empire!");
});

app.get("/about", function(req, res){
  res.send("I am the emperor of the histerlion empire.");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
