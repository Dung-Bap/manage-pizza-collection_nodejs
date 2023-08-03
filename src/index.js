/** @format */
const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const morgan = require("morgan");
const port = 3000;
const app = express();
const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// route init
route(app);

app.listen(port, () => console.log(`http://localhost:${port}`));
