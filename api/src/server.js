const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const i18n = require('i18n')
const cors = require("cors");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

app.use(cors());
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

const swaggerDefinition = {
    info: {
        title: 'T-Shop',
        version: '1.0.0',
        description: 'T-Shop endpoints documentation',
    },
    host: 'localhost:3003',
    basePath: '/',
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            scheme: 'bearer',
            in: 'header',
        },
    },
};
const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
