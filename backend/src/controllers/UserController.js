const User = require('../models/UserModel');

class UserController {
    async getAll(req, res) {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email', 'phone', 'birth'],
        });
        
        return res.status(200).json(users);
    }

    async getOne(req, res) {
        const user = await User.findOne({
            attributes: ['id', 'name', 'email', 'phone', 'birth'],
            where: { id: req.params.user_id }
        });
        
        return res.status(200).json(user);
    }

    async store(req, res) {
        const { id, name, email, phone, birth } = await User.create(req.body);

        return res.status(201).json({ id, name, email, phone, birth });
    }

    async update(req, res) {
        const user = await User.findByPk(req.params.user_id);

        const { id, name, email, phone, birth } = await user.update(req.body);

        return res.status(201).json({ id, name, email, phone, birth });
    }

    async disable(req, res) {
        const user = await User.findByPk(req.params.user_id);

        await user.destroy();

        return res.status(204).json();
    }

    async delete(req, res) {
        const user = await User.findByPk(req.params.user_id);

        await user.destroy({ force: true });

        return res.status(204).json();
    }
}

module.exports = new UserController();
