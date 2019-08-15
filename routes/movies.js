// Our router module
const router = require('express').Router();

// Our controller
const MoviesController = require('../controllers/moviesController');

// Our routes
router.get(`/`, MoviesController.index);
router.get(`/:id`, MoviesController.show);
router.post(`/`, MoviesController.create);
router.post(`/update`, MoviesController.update);
router.post(`/destroy`, MoviesController.destroy);

// We have to export our changes
module.exports = router;