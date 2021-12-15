const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const AvailableFor = sequelize.define(
  'availablefor',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    metaDataKey: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'availablefor',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = AvailableFor;
