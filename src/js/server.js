const express = require('express');
const app = express();

const typeRouter = require('./routes/type');

app.use(express.json());
app.use('/types', typeRouter);

module.exports = app;
