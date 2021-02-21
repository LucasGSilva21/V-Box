const User = require('../models/UserModel');

class UserController {
    async getAll(req, res) {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email', 'phone', 'birth'],
        });
        
        return res.status(200).json(users);
    }
}

module.exports = new UserController();
