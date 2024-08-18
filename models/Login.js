const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = sequelize.define(
  'Login',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING,
    }
  }
);