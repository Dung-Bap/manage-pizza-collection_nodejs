/** @format */

const express = require("express");
const router = express.Router();

const pizzaDetailController = require("../app/controllers/PizzaDetailController");

router.get("/create", pizzaDetailController.create);

router.post("/store", pizzaDetailController.store);

router.get("/:slug", pizzaDetailController.show);

module.exports = router;
