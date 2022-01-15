import { sign, verify } from './utils.js/jsonwebtoken.js'
import { clientError } from "./handleErrors.js"
import jwt from 'jsonwebtoken'

export const checkToken = (req, res, next) => {
    const { token } = req.body
    let data = req.readData('users', 'user.json')
    data = data ? JSON.parse(data) : []

    const user = data.find((user) => user.token == token)

    if (!user) return clientError(req, res, "User not found")

    delete user.password
    res.send(user)
    return next()
}


export const ischeckToken = (req, res, next) => {
    const { token } = req.body
    let data = req.readData('users', 'user.json')
    data = data ? JSON.parse(data) : []

    let user = jwt.verify(token, process.env.TOKEN_KEY)


    let user = verify(token, process.env.TOKEN_KEY)
    const findUser = data.filter((user) => {

    })
    if (findUser) return clientError(req, res, "User is found")

    return next()
}