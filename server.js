const express = require("express");
const app = express();
const router = express.Router();
const path = require('path');
const view_dir = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(view_dir + "index.html");
});

/*router.get("/about",function(req,res){
  res.sendFile(view_dir + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});*/

app.use("/",router);

console.log(path.join(__dirname + '/assets'))
app.use('/assets', express.static(path.join(__dirname + '/assets')));

/*app.use("*",function(req,res){
  res.sendFile(view_dir + "404.html");
});*/

app.listen(3000,function(){
  console.log("Live at Port 3000");
});