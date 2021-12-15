const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const MetadataValue = sequelize.define(
  'metadatavalue',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    value: {
      type: DataTypes.STRING(255),
    },
    metadataKey: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    dataset: {
      type: DataTypes.INTEGER,
    },
    category: {
      type: DataTypes.INTEGER,
    },
    dataFile: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'metadatavalue',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = MetadataValue;
