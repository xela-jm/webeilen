const utils = require('../middleware/utils')
const emailer = require('../middleware/emailer')
const { matchedData } = require('express-validator')
const {User} = require('../models')

exports.register = async (req, res) => {
    try {
        // Gets locale from header 'Accept-Language'
        const locale = req.getLocale();
        req = matchedData(req)
        const doesEmailExists = await emailer.emailExists(req.email)
        if (!doesEmailExists) {
            const item = await registerUser(req)
            //const userInfo = setUserInfo(item)
            //const response = returnRegisterToken(item, userInfo)
            //emailer.sendRegistrationEmailMessage(locale, item)
            //res.status(201).json(response)
            res.status(201).json({text: 'hello world'})
        }
    } catch (error) {
        utils.handleError(res, error)
    }
}

const registerUser = async req => {
    return new Promise((resolve, reject) => {
        const user = new User({
            name: req.name,
            email: req.email,
            username: "some username",
            lastname: "test lastname",
            firstname: "test firstname",
            password: req.password
        })

        user.save().then((item) => {
                resolve(item)
            }
        ).catch(err => reject(utils.buildErrObject(422, err.message)))
    })
}