'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    dob: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};