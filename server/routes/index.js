const express = require('express');
const app = express();

app.use(require('./Customers'));

module.exports = app;