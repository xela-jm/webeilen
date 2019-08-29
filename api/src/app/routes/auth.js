const express = require('express')
const controller = require('../controllers/auth')
const validate = require('../controllers/auth.validate')
const trimRequest = require('trim-request')
const router = express.Router();

router.post(
    '/register',
    trimRequest.all,
    validate.register,
    controller.register
)

router.post('/login', trimRequest.all, validate.login, controller.login)

module.exports = router