const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const Action = sequelize.define(
  'action',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    at: {
      type: DataTypes.DATE,
    },
    state: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    actionType: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    grant: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'action',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Action;
