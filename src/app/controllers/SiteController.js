/** @format */
const PizzaCollection = require("../models/PizzaCollection");

class SiteController {
    home(req, res, next) {
        PizzaCollection.find({})
            .lean()
            .then((pizzaCollections) =>
                res.render("home", {
                    pizzaCollections,
                })
            )
            .catch(next);
    }

    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController();
