/** @format */
const PizzaCollection = require("../models/PizzaCollection");

class PizzaDetailController {
    show(req, res, next) {
        PizzaCollection.findOne({ slug: req.params.slug })
            .lean()
            .then((pizzaDetail) => {
                res.render("pizzaDetail/show.hbs", { pizzaDetail });
            })
            .catch(next);
    }
}

module.exports = new PizzaDetailController();
