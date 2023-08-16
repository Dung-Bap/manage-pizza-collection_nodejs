/** @format */
const PizzaCollection = require('../models/PizzaCollection');

class PizzaDetailController {
    show(req, res, next) {
        PizzaCollection.findOne({ slug: req.params.slug })
            .lean()
            .then(pizzaDetail => {
                res.render('pizzaDetail/show', { pizzaDetail });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('pizzaDetail/create');
    }

    store(req, res, next) {
        const newPizza = new PizzaCollection(req.body);
        newPizza
            .save()
            .then(() => res.redirect('/me/stored/all-pizza-collection'))
            .catch();
    }

    edit(req, res, next) {
        PizzaCollection.findById(req.params.id)
            .lean()
            .then(pizzaDetail => {
                res.render('pizzaDetail/edit', { pizzaDetail });
            })
            .catch(next);
    }

    update(req, res, next) {
        PizzaCollection.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/all-pizza-collection'))
            .catch(next);
    }

    restore(req, res, next) {
        PizzaCollection.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    delete(req, res, next) {
        PizzaCollection.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    permanentlyDelete(req, res, next) {
        PizzaCollection.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new PizzaDetailController();
