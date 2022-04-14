'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flowers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flowers.init({
    name: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    placeToBuy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Flowers',
  });
  return Flowers;
};