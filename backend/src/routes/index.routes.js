const { Router } = require('express');
const UserRoutes = require('./user.routes');

const routes = new Router();

routes.use('/users', UserRoutes);

module.exports = routes;
