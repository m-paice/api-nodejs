const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const routesUser = require("./routes/user");

const User = require("./model/user");

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

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const isUser = await User.findOne({ email, password });

    if (!isUser)
      return res.status(500).json({
        message: "Error",
        data: "User not found"
      });

    res.status(200).json({
      message: "OK",
      data: isUser
    });
  } catch (e) {
    return res.status(500).json({
      message: "Error",
      data: String(e)
    });
  }
});

app.listen(4656, function() {
  console.log("Server app listening on port 4656!");
});
