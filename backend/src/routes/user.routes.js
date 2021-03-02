const { Router } = require('express');
const UserController = require('../controllers/UserController');
const UserValidate = require('../middlewares/validates/user.validate');

const routes = new Router();

routes.get('/:user_id', UserController.getOne);
routes.get('/', UserController.getAll);
routes.post('/', UserValidate.store, UserController.store);
routes.put('/:user_id', UserController.update);
routes.patch('/:user_id', UserController.disable);
routes.delete('/:user_id', UserController.delete);

module.exports = routes;
