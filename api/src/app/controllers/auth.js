const jwt = require('jsonwebtoken')
const utils = require('../middleware/utils')
const emailer = require('../middleware/emailer')
const { matchedData } = require('express-validator')
const {User} = require('../models')
const auth = require('../middleware/auth')

exports.register = async (req, res) => {
    try {
        // Gets locale from header 'Accept-Language'
        const locale = req.getLocale();
        req = matchedData(req)
        const doesEmailExists = await emailer.emailExists(req.email)
        if (!doesEmailExists) {
            const item = await registerUser(req)
            const userInfo = setUserInfo(item)
            const response = returnRegisterToken(item, userInfo)
            emailer.sendRegistrationEmailMessage(locale, item)
            res.status(201).json(response)
        }
    } catch (error) {
        utils.handleError(res, error)
    }
}

exports.login = async (req, res) => {
    try {
        const data = matchedData(req)
        const user = await findUser(data.email)
        //await userIsBlocked(user)
        const isPasswordMatch = await auth.checkPassword(data.password, user)
        if (!isPasswordMatch) {
            utils.handleError(res, await passwordsDoNotMatch(user))
        } else {
            user.loginAttempts = 0
            res.status(200).json(await saveUserAccessAndReturnToken(req, user))
        }
    } catch (error) {
        utils.handleError(res, error)
    }
}

exports.register = async (req, res) => {
    try {
        // Gets locale from header 'Accept-Language'
        const locale = req.getLocale()
        req = matchedData(req)
        const doesEmailExists = await emailer.emailExists(req.email)
        if (!doesEmailExists) {
            const item = await registerUser(req)
            const userInfo = setUserInfo(item)
            const response = returnRegisterToken(item, userInfo)
            emailer.sendRegistrationEmailMessage(locale, item)
            res.status(201).json(response)
        }
    } catch (error) {
        utils.handleError(res, error)
    }
}



const saveUserAccessAndReturnToken = async (req, user) => {
    return new Promise((resolve, reject) => {
            const userInfo = setUserInfo(user)
            resolve({
                token: generateToken(user.id),
                user: userInfo
            })
    })
}

const userIsBlocked = async user => {
    return new Promise((resolve, reject) => {
        if (user.blockExpires > new Date()) {
            reject(utils.buildErrObject(409, 'BLOCKED_USER'))
        }
        resolve(true)
    })
}

const findUser = async email => {
    return new Promise((resolve, reject) => {
        User.findOne( {
            where : {
                'email': email
            }
        }).then(user => {
            utils.itemNotFound(null, user, reject, 'USER_DOES_NOT_EXIST')
            resolve(user)
        }).catch(err => {
            utils.itemNotFound(err, null, reject, 'USER_DOES_NOT_EXIST')
        })
    })
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

        user.preSave().save().then((item) => {
                resolve(item)
            }
        ).catch(err => reject(utils.buildErrObject(422, err.message)))
    })
}

const setUserInfo = req => {
    let user = {
        _id: req._id,
        name: req.name,
        username: req.username,
        lastname: req.lastname,
        firstname: req.firstname,
        email: req.email,
        //role: req.role,
        //verified: req.verified
    }
/*    // Adds verification for testing purposes
    if (process.env.NODE_ENV !== 'production') {
        user = {
            ...user,
            verification: req.verification
        }
    }*/
    return user
}

const returnRegisterToken = (item, userInfo) => {
    /*if (process.env.NODE_ENV !== 'production') {
        userInfo.verification = item.verification
    }*/
    const data = {
        token: generateToken(item.id),
        user: userInfo
    }
    return data
}

const generateToken = user => {
    // Gets expiration time
    const expiration =
        Math.floor(Date.now() / 1000) + 60 * process.env.JWT_EXPIRATION_IN_MINUTES

    // returns signed and encrypted token
    return auth.encrypt(
        jwt.sign(
            {
                data: {
                    _id: user
                },
                exp: expiration
            },
            process.env.JWT_SECRET
        )
    )
}