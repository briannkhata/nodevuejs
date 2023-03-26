const express = require("express");
const app = express();
const routes = require("./routes/routes");

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/nodevue", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Connection error:", err));

app.use(express.json());
app.listen(5000, () => {
  console.log("server started");
});
