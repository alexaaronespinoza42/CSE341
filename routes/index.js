const routes = require('express').Router();
const lesson01Controller = require('../controllers/lesson01'); 

routes.get('/', lesson01Controller.aaronRoute)
routes.get('/noah', lesson01Controller.noahRoute)
routes.get('/alexandre', lesson01Controller.alexandreRoute)

module.exports = routes;