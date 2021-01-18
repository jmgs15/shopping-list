const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is mandatory'],
        unique: true
    },
    password: {
        type: String,
        lowercase: true,
        required: [true, 'Password is mandatory']
    },
    email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User