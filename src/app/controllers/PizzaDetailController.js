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

    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                PizzaCollection.delete({ _id: { $in: req.body.pizzaIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;

            default:
                res.json({ message: 'Actions is invalid!!!' });
        }
    }

    handleFormTrashActions(req, res, next) {
        switch (req.body.action) {
            case 'restore':
                PizzaCollection.restore({ _id: { $in: req.body.pizzaIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'permanently-delete':
                PizzaCollection.deleteMany({ _id: { $in: req.body.pizzaIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Actions is invalid!!!' });
        }
    }
}

module.exports = new PizzaDetailController();
