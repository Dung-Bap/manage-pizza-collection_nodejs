/** @format */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PizzaCollection = new Schema({
  name: String,
  image: String,
  price: String,
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PizzaCollection", PizzaCollection);
