const express = require("express");
const app = express();
//const bodyParser = require("body-parser");
//const cors = require("cors");

//app.use(cors());
//app.use(bodyParser.urlencoded({extender: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/Contact", function(req, res){
  res.send("Contact .....etc");
});

app.get("/about", function(req, res){
  res.send("Testing purposes");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
