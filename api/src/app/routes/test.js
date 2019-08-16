const express = require('express')
const router = express.Router();

console.log("Test controller registered");

router.get('/test', function (req, res) {
    res.send('GET request to the homepage');
});

module.exports = router;