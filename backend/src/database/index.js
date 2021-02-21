const Sequelize = require('sequelize');

const User = require('../models/UserModel');

const env = process.env.NODE_ENV || 'development';

const config = require('../config/database.js')[env];

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init(){
    this.connection = new Sequelize(config);

    models
    .map(model => model.init(this.connection))
    .map(model => models.associate && model.associate(this.connection.models));
  }
}

module.exports = new Database();
