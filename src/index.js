/** @format */
const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const methodOverride = require("method-override");

const morgan = require("morgan");
const port = 3000;
const app = express();
const route = require("./routes");

const db = require("./config/db");

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        // tạo helper
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(methodOverride("_method"));

// route init
route(app);
db.connect();

app.listen(port, () => console.log(`http://localhost:${port}`));
