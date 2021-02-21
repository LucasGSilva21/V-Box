const { Router } = require('express');
const UserController = require('../controllers/UserController');

const routes = new Router();

routes.get('/', UserController.getAll);

module.exports = routes;
