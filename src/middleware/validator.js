import Joi from 'joi'
import { clientError } from './handleErrors.js'

const userValidation = Joi.object({
    username: Joi.string().max(30).alphanum().required(),
    password: Joi.string().min(5).max(15).pattern(new RegExp(/(?=.*[A-Za-z]+)(?=.*[0-9]+)(?=.*[@$!%*#?&]+)/)).required()
})


export const regValidation = (req, res, next) => {
    const { value, error } = userValidation.validate(req.body)
    const image = req.files
    let data = req.readData('users', 'user.json')
    data = data ? JSON.parse(data) : []
    let foundUser = data.filter((user) => user.username == value.username)

    if (foundUser.length) return clientError(req, res, "This username already declaired")
    if (error) return clientError(req, res, error.message)
    if (!image) return clientError(req, res, "Please create profile image")
    return next()
}

export const logValidation = (req, res, next) => {
    const { username, password } = req.body
    if (!username) return clientError(req, res, 'Invalid username')
    if (!password) return clientError(req, res, 'Invalid password')
    return next()
}
