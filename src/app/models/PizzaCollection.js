/** @format */

const mongoose = require("mongoose");

const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const PizzaCollection = new Schema(
    {
        name: { type: String, require: true },
        image: { type: String, require: true },
        price: { type: String, require: true },
        slug: { type: String, require: true, slug: "name" },
        // unique: true
    },
    { timestamps: true }
);

module.exports = mongoose.model("PizzaCollection", PizzaCollection);
