const { validationResult } = require('express-validator')

exports.removeExtensionFromFile = file => {
    return file
        .split('.')
        .slice(0, -1)
        .join('.')
        .toString()
}

exports.validationResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        if (req.body.email) {
            req.body.email = req.body.email.toLowerCase()
        }
        return next()
    } catch (err) {
        return this.handleError(res, this.buildErrObject(422, err.array()))
    }
}

exports.buildErrObject = (code, message) => {
    return {
        code,
        message
    }
}

exports.handleError = (res, err) => {
    // Prints error in console
    if (process.env.NODE_ENV === 'development') {
        console.log(err)
    }
    // Sends error to user
    res.status(err.code).json({
        errors: {
            msg: err.message
        }
    })
}

exports.itemAlreadyExists = (err, item, reject, message) => {
    if (err) {
        reject(this.buildErrObject(422, err.message))
    }
    if (item) {
        reject(this.buildErrObject(422, message))
    }
}
