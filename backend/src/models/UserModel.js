const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

class UserModel extends Sequelize.Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
            },
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            phone: Sequelize.CHAR(11),
            birth: Sequelize.DATEONLY,
        },{
            sequelize,
            tableName: 'users',
            paranoid: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',
        });

        this.addHook('beforeSave', async (user) => {
            if (user.password) {
              user.password_hash = await bcrypt.hash(user.password, 10);
            }
        });

        return this;
    }

    static associate(models) {

    }
}

module.exports = UserModel;
