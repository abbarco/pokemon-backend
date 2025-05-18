const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, favoriteController.saveFavorite);
router.get('/', authMiddleware, favoriteController.getFavorites);

module.exports = router;