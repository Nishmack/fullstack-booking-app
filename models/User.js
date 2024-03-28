//create user table for storing all the data
const Sequelize = require("sequelize");
const sequelize = require("../util/database");

//Defining a User model
const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  phone: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
  },
});
module.exports = User;
