const express = require('express');
const router = express.Router();
const fs = require('fs');
const routesPath = `${__dirname}/`;
const {removeExtensionFromFile} = require('../middleware/utils')

router.get('/test2', function (req, res) {
    res.send('GET request to the homepage');
});

fs.readdirSync(routesPath).filter(file => {
    const routeFile = removeExtensionFromFile(file);
    return routeFile !== 'index' && routeFile !== 'auth'
        ? router.use(`/${routeFile}`, require(`./${routeFile}`))
        : ''
});

module.exports = router;