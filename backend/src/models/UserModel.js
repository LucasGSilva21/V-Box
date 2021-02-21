const Sequelize = require('sequelize');

class UserModel extends Sequelize.Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            phone: Sequelize.CHAR(11),
            birth: Sequelize.DATEONLY,
        },{
            sequelize,
            tableName: 'users',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',
        });

        return this;
    }

    static associate(models) {

    }
}

module.exports = UserModel;
