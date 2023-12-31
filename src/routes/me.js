/** @format */

const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/all-pizza-collection', meController.stored);

router.get('/trash/all-pizza-collection', meController.trash);

module.exports = router;
