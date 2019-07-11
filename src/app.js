const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const routesUser = require("./routes/user");

mongoose.connect(
  "mongodb://root:password@127.0.0.1:27013/example?authSource=admin",
  {
    useNewUrlParser: true
  }
);

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routesUser);

app.listen(4656, function() {
  console.log("Server app listening on port 4656!");
});
