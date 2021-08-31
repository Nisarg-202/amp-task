require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Routes = require("./routes/Routes");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Routes);

mongoose.connect(
  `mongodb+srv://nisarg:${process.env.MONGODBPASSWORD}@cluster0.x2a77.mongodb.net/blogDB`
);

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000.");
});
