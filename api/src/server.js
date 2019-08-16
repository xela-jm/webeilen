const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(require('./app/routes'));
app.listen(app.get('port'));

module.exports = app;
