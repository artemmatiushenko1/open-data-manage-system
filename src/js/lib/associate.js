const Action = require('../models/action');
const ActionType = require('../models/actionType');
const AvailableAction = require('../models/availableAction');
const AvailableFor = require('../models/availableFor');
const Category = require('../models/category');
const DataFile = require('../models/datafile');
const DataSet = require('../models/dataset');
const Grant = require('../models/grant');
const MetaDataKey = require('../models/metadataKey');
const MetaDataValue = require('../models/metadataValue');
const Role = require('../models/role');
const State = require('../models/state');
const Type = require('../models/type');
const User = require('../models/user');

const associate = () => {
  Category.hasMany(Category, {
    foreignKey: 'category',
    sourceKey: 'id',
  });

  Category.belongsTo(Category, {
    foreignKey: 'category',
    as: 'cat',
    targetKey: 'id',
  });

  MetaDataKey.hasMany(MetaDataKey, {
    foreignKey: 'metadataKey',
    sourceKey: 'id',
  });

  MetaDataKey.belongsTo(MetaDataKey, {
    foreignKey: 'metadataKey',
    as: 'met',
    targetKey: 'id',
  });

  Type.hasMany(AvailableFor, {
    foreignKey: 'type',
    sourceKey: 'id',
  });

  AvailableFor.belongsTo(Type, {
    foreignKey: 'type',
    as: 'Type',
    targetKey: 'id',
  });

  MetaDataKey.hasMany(AvailableFor, {
    foreignKey: 'metadataKey',
    sourceKey: 'id',
  });

  AvailableAction.belongsTo(MetaDataKey, {
    foreignKey: 'metaDataKey',
    as: 'metK',
    targetKey: 'id',
  });

  Role.hasMany(AvailableAction, {
    foreignKey: 'role',
    sourceKey: 'id',
  });

  AvailableAction.belongsTo(Role, {
    foreignKey: 'role',
    as: 'Role',
    targetKey: 'id',
  });

  ActionType.hasMany(AvailableAction, {
    foreignKey: 'actionType',
    sourceKey: 'id',
  });

  AvailableAction.belongsTo(ActionType, {
    foreignKey: 'actionType',
    as: 'AT',
    targetKey: 'id',
  });

  Category.hasMany(DataSet, {
    foreignKey: 'category',
    sourceKey: 'id',
  });

  DataSet.belongsTo(Category, {
    foreignKey: 'category',
    as: 'cat',
    targetKey: 'id',
  });

  User.hasMany(Grant, {
    foreignKey: 'user',
    sourceKey: 'id',
  });

  Grant.belongsTo(User, {
    foreignKey: 'user',
    as: 'User',
    targetKey: 'id',
  });

  Role.hasMany(Grant, {
    foreignKey: 'role',
    sourceKey: 'id',
  });

  Grant.belongsTo(Role, {
    foreignKey: 'role',
    as: 'Role',
    targetKey: 'id',
  });

  ActionType.hasMany(Grant, {
    foreignKey: 'actionType',
    sourceKey: 'id',
  });

  Grant.belongsTo(ActionType, {
    foreignKey: 'actionType',
    as: 'AT',
    targetKey: 'id',
  });

  DataSet.hasMany(Grant, {
    foreignKey: 'dataSet',
    sourceKey: 'id',
  });

  Grant.belongsTo(DataSet, {
    foreignKey: 'dataSet',
    as: 'ds',
    targetKey: 'id',
  });

  State.hasMany(Action, {
    foreignKey: 'state',
    soureKey: 'id',
  });

  Action.belongsTo(State, {
    foreignKey: 'state',
    as: 'State',
    targetKey: 'id',
  });

  ActionType.hasMany(Action, {
    foreignKey: 'actionType',
    sourceKey: 'id',
  });

  Action.belongsTo(ActionType, {
    foreignKey: 'actionType',
    as: 'AT',
    taretKey: 'id',
  });

  Grant.hasMany(Action, {
    foreignKey: 'grant',
    sourceKey: 'id',
  });

  Action.belongsTo(Grant, {
    foreignKey: 'grant',
    as: 'Gr',
    targetKey: 'id',
  });

  DataSet.hasOne(DataFile, {
    foreignKey: 'dataSet',
    sourceKey: 'id',
  });

  DataFile.belongsTo(DataSet, {
    foreignKey: 'dataSet',
    as: 'ds',
    targetKey: 'id',
  });

  MetaDataKey.hasMany(MetaDataValue, {
    foreignKey: 'metaDataKey',
    sourceKey: 'id',
  });

  MetaDataValue.belongsTo(MetaDataKey, {
    foreignKey: 'metaDataKey',
    as: 'mk',
    targetKey: 'id',
  });

  DataSet.hasMany(MetaDataValue, {
    foreignKey: 'dataSet',
    sourceKey: 'id',
  });

  MetaDataValue.belongsTo(DataSet, {
    foreignKey: 'dataSet',
    as: 'dss',
    targetKey: 'id',
  });

  Category.hasMany(MetaDataValue, {
    foreignKey: 'category',
    sourceKey: 'id',
  });

  MetaDataValue.belongsTo(Category, {
    foreignKey: 'category',
    as: 'cat',
    targetKey: 'id',
  });

  DataFile.hasMany(MetaDataValue, {
    foreignKey: 'dataFile',
    sourceKey: 'id',
  });

  MetaDataValue.belongsTo(DataFile, {
    foreignKey: 'dataFile',
    as: 'df',
    targetKey: 'id',
  });
};

module.exports = associate;
