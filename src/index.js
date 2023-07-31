/** @format */

const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const morgan = require("morgan");

const port = 3000;

const app = express();

// HTTP logger
app.use(morgan("combined"));

app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => console.log(`http://localhost:${port}`));
