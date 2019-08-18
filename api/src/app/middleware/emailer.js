const {User} = require('../models')
const { itemAlreadyExists } = require('../middleware/utils')
const i18n = require('i18n')

const sendEmail = async (data, callback) => {
    const auth = {
        auth: {
            // eslint-disable-next-line camelcase
            api_key: process.env.EMAIL_SMTP_API_MAILGUN,
            domain: process.env.EMAIL_SMTP_DOMAIN_MAILGUN
        }
    }
    const transporter = nodemailer.createTransport(mg(auth))
    const mailOptions = {
        from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_ADDRESS}>`,
        to: `${data.user.name} <${data.user.email}>`,
        subject: data.subject,
        html: data.htmlMessage
    }
    transporter.sendMail(mailOptions, err => {
        if (err) {
            return callback(false)
        }
        return callback(true)
    })
}

const prepareToSendEmail = (user, subject, htmlMessage) => {
    user = {
        name: user.name,
        email: user.email,
        verification: user.verification
    }
    const data = {
        user,
        subject,
        htmlMessage
    }
    if (process.env.NODE_ENV === 'production') {
        sendEmail(data, messageSent =>
            messageSent
                ? console.log(`Email SENT to: ${user.email}`)
                : console.log(`Email FAILED to: ${user.email}`)
        )
    } else if (process.env.NODE_ENV === 'development') {
        console.log(data)
    }
}

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
    },

    async sendRegistrationEmailMessage(locale, user) {
        i18n.setLocale(locale)
        const subject = i18n.__('registration.SUBJECT')
        const htmlMessage = i18n.__(
            'registration.MESSAGE',
            user.name,
            process.env.FRONTEND_URL,
            "some verification code"
        )
        prepareToSendEmail(user, subject, htmlMessage)
    },
}