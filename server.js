const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const path = require('path');
const view_dir = __dirname + '/views/';

router.use((req, res, next) => {
  console.log("/" + req.method);
  next();
});

router.get("/", (req, res) => {
  res.sendFile(view_dir + "index.html");
});

router.post("/subscribe", (req, res) => {
  console.log(req.body);
  res.sendFile(view_dir + "index.html");
});

/*router.get("/about",function(req,res){
  res.sendFile(view_dir + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});*/

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use("/", router);

app.use('/assets', express.static(path.join(__dirname + '/assets')));

app.listen(3000, () => {
  console.log("Live at Port 3000");
});