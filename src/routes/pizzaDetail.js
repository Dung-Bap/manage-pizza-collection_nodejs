/** @format */

const express = require('express');
const router = express.Router();

const pizzaDetailController = require('../app/controllers/PizzaDetailController');

router.get('/create', pizzaDetailController.create);

router.post('/store', pizzaDetailController.store);

router.post('/handle-form-actions', pizzaDetailController.handleFormActions);

router.post('/handle-form-trash-actions', pizzaDetailController.handleFormTrashActions);

router.get('/:id/edit', pizzaDetailController.edit);

router.put('/:id', pizzaDetailController.update);

router.patch('/:id/restore', pizzaDetailController.restore);

router.delete('/:id', pizzaDetailController.delete);

router.delete('/:id/permanentlyDelete', pizzaDetailController.permanentlyDelete);

router.get('/:slug', pizzaDetailController.show);

module.exports = router;
