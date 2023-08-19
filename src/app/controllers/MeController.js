/** @format */
const PizzaCollection = require('../models/PizzaCollection');

class MeController {
    async stored(req, res, next) {
        try {
            const pizzaCollections = await PizzaCollection.find({}).lean();
            const countDelete = await PizzaCollection.countDocumentsWithDeleted({ deleted: true });
            res.render('me/stored-all-pizza-collection', { pizzaCollections, countDelete });
        } catch (err) {
            next(err);
        }
    }

    async trash(req, res, next) {
        try {
            const pizzaCollections = await PizzaCollection.findWithDeleted({ deleted: true }).lean();
            res.render('me/trash-all-pizza-collection', {
                pizzaCollections,
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new MeController();
