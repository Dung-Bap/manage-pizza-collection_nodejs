/** @format */
const PizzaCollection = require("../models/PizzaCollection");

class PizzaDetailController {
    show(req, res, next) {
        PizzaCollection.findOne({ slug: req.params.slug })
            .lean()
            .then((pizzaDetail) => {
                res.render("pizzaDetail/show", { pizzaDetail });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render("pizzaDetail/create");
    }

    store(req, res, next) {
        const newPizza = new PizzaCollection(req.body);
        newPizza
            .save()
            .then(() => res.redirect("/"))
            .catch();
    }
}

module.exports = new PizzaDetailController();
