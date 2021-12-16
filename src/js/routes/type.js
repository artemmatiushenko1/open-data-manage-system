const express = require('express');
const typeController = require('../controllers/type.js');
const typeRouter = express.Router();

typeRouter.route('/all').get(typeController.getAllTypes);
typeRouter.route('/create').post(typeController.createType);
typeRouter.route('/:id').get(typeController.getTypeById);
typeRouter.route('/delete/:id').delete(typeController.deleteTypeById);
typeRouter.route('/update/:id').patch(typeController.updateTypeById);

module.exports = typeRouter;
