const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const apiPort = process.env.PORT || 3000;

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.vtrrpk0.mongodb.net/livraria"
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
