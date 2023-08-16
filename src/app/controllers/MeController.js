/** @format */
const PizzaCollection = require('../models/PizzaCollection');

class MeController {
    stored(req, res, next) {
        PizzaCollection.find({})
            .lean()
            .then(pizzaCollections =>
                res.render('me/stored-all-pizza-collection', {
                    pizzaCollections,
                })
            )
            .catch(next);
    }

    trash(req, res, next) {
        // Thư viện củ chuối, fix chỗ này nhé !!!
        PizzaCollection.findWithDeleted({ deleted: true })
            .lean()
            .then(pizzaCollections =>
                res.render('me/trash-all-pizza-collection', {
                    pizzaCollections,
                })
            )
            .catch(next);
    }
}

module.exports = new MeController();
