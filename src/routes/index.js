/** @format */

const newsRouter = require("./news");
const siteRouter = require("./site");

const route = (app) => {
  app.get("/news", newsRouter);

  app.get("/", siteRouter);
};

module.exports = route;
