const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
const MESSAGE = process.env.MESSAGE;

app.get("/", (req, res) => {
  res.send(MESSAGE);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});