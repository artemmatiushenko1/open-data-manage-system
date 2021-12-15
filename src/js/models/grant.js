const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const Grant = sequelize.define(
  'grant',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    role: {
      type: DataTypes.INTEGER,
    },
    dataset: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'dataset',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'grant',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Grant;
