const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017//nodevue",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (req, res, err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to the database");
    }
  }
);

app.listen(5000, () => {
  console.log("server started");
});
