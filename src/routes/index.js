/** @format */

const newsRouter = require("./news");
const siteRouter = require("./site");
const pizzaDetailRouter = require("./pizzaDetail");

const route = (app) => {
    app.use("/news", newsRouter);

    app.use("/pizza-detail", pizzaDetailRouter);

    app.use("/", siteRouter);
};

module.exports = route;
