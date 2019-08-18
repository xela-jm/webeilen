const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const i18n = require('i18n')

app.set('port', process.env.PORT || 3000);

i18n.configure({
    locales: ['en', 'es'],
    directory: `${__dirname}/locales`,
    defaultLocale: 'en',
    objectNotation: true
})
app.use(i18n.init)

app.use(
    bodyParser.json({
        limit: '20mb'
    })
)

app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)

app.use(require('./app/routes'));
app.listen(app.get('port'));

module.exports = app;
