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

    edit(req, res, next) {
        PizzaCollection.findById(req.params.id)
            .lean()
            .then((pizzaDetail) => {
                res.render("pizzaDetail/edit", { pizzaDetail });
            })
            .catch(next);
    }

    update(req, res, next) {
        PizzaCollection.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/me/stored/all-pizza-collection"))
            .catch(next);
    }
}

module.exports = new PizzaDetailController();
