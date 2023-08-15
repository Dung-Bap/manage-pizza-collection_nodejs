/** @format */
const PizzaCollection = require("../models/PizzaCollection");

class MeController {
    stored(req, res, next) {
        PizzaCollection.find({})
            .lean()
            .then((pizzaCollections) =>
                res.render("me/stored-all-pizza-collection", {
                    pizzaCollections,
                })
            )
            .catch(next);
    }
}

module.exports = new MeController();
