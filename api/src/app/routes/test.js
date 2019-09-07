const express = require('express')
const router = express.Router();
const controller = require('../controllers/items')

console.log("Test controller registered");

router.post('/test', function (req, res) {
    controller.getItems(req, res).then(result => {
        res.send(result);
    }).catch(e => {
        res.send("Hello Wrodl");
    });
    //res.send('GET request to the homepage');
});

module.exports = router;