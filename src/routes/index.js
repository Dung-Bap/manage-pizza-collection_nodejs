/** @format */

const newsRouter = require("./news");
const siteRouter = require("./site");
const meRouter = require("./me");
const pizzaDetailRouter = require("./pizzaDetail");

const route = (app) => {
    app.use("/news", newsRouter);

    app.use("/pizza-detail", pizzaDetailRouter);

    app.use("/me", meRouter);

    app.use("/", siteRouter);
};

module.exports = route;
