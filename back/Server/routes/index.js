const express = require('express');
const app = express();

app.use(require('./customer'));
app.use(require('./place'));
app.use(require('./rent'));



module.exports = app;