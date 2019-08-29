'use strict';
const bcrypt = require('bcrypt-nodejs')
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false
            },
            firstname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        msg: "Not valid email"
                    }
                }
            },
        },
        {
            timestamps: false
        })

    User.prototype.comparePassword = function(passwordAttempt, cb) {
        bcrypt.compare(passwordAttempt, this.password, (err, isMatch) =>
            err ? cb(err) : cb(null, isMatch)
        )
    }

    User.prototype.preSave = function () {
        const that = this
        const SALT_FACTOR = 5
        genSalt(that, SALT_FACTOR)
        return this;
    }

    return User;
}

const genSalt = (user, SALT_FACTOR) => {
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        return hash(user, salt)
    })
}

const hash = (user, salt) => {
    bcrypt.hash(user.password, salt, null, (error, newHash) => {
        user.password = newHash
    })
}
