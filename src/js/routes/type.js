const express = require('express');
const typeController = require('../controllers/type.js');
const typeRouter = express.Router();

typeRouter
  .route('/')
  .get(typeController.getAllTypes)
  .post(typeController.createType);

typeRouter
  .route('/:id')
  .get(typeController.getTypeById)
  .delete(typeController.deleteTypeById)
  .patch(typeController.updateTypeById);

module.exports = typeRouter;
