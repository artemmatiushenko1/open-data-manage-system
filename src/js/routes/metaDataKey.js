const express = require('express');
const mDKeyController = require('../controllers/metaDataKey');
const mDKeyRouter = express.Router();

mDKeyRouter.route('/all').get(mDKeyController.getAllMDKeys);
mDKeyRouter.route('/create').post(mDKeyController.createMDKey);
mDKeyRouter.route('/:id').get(mDKeyController.getMDKeyById);
mDKeyRouter.route('/delete/:id').delete(mDKeyController.deleteMDKeyByID);
mDKeyRouter.route('/update/:id').patch(mDKeyController.updateMDKeyById);

module.exports = mDKeyRouter;
