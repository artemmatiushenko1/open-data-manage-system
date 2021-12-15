const express = require('express');
const mDKeyController = require('../controllers/metaDataKey');
const mDKeyRouter = express.Router();

mDKeyRouter
  .route('/')
  .get(mDKeyController.getAllMDKeys)
  .post(mDKeyController.createMDKey);

mDKeyRouter
  .route('/:id')
  .get(mDKeyController.getMDKeyById)
  .delete(mDKeyController.deleteMDKeyByID)
  .patch(mDKeyController.updateMDKeyById);

module.exports = mDKeyRouter;
