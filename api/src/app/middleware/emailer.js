const emailer = require('../middleware/emailer')
const {User} = require('../models')
const { itemAlreadyExists } = require('../middleware/utils')

module.exports = {
    async emailExists(email) {
        return new Promise((resolve, reject) => {
            User.findOne( {
                    where : {
                        'email': email
                    }
                }).then(user => {
                    itemAlreadyExists(null, user, reject, 'EMAIL_ALREADY_EXISTS');
                    resolve(false);
                }, err => {
                    itemAlreadyExists(err, null, reject, 'EMAIL_ALREADY_EXISTS')
                    resolve(false)
                }
            )
        })
    }
}