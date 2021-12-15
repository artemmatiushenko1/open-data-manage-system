const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const MetadataKey = sequelize.define(
  'metadatakey',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    key: {
      type: DataTypes.STRING(255),
    },
    description: {
      type: DataTypes.STRING(511),
    },
    metadataKey: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'metadatakey',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = MetadataKey;
