const crypto = require('crypto')
const algorithm = 'aes-256-ecb'
const secret = process.env.JWT_SECRET

module.exports = {

    encrypt(text) {
        const cipher = crypto.createCipher(algorithm, secret)
        let crypted = cipher.update(text, 'utf8', 'hex')
        crypted += cipher.final('hex')
        return crypted
    }
}
