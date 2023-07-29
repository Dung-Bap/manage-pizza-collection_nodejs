/** @format */

const express = require("express");
const app = express();

const port = 3000;

app.get("/", function (req, res) {
  res.send("Xin chao anh em nha ahihi");
});

app.listen(port, () => console.log(`http://localhost:${port}`));
