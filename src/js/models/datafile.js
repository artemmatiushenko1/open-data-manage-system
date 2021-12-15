const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const DataFile = sequelize.define(
  'datafile',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    dataSet: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'datafile',
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = DataFile;
