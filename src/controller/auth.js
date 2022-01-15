import path from 'path'
import { clientError } from '../middleware/handleErrors.js'
import jwt from 'jsonwebtoken'


export const REGISTER = (req, res) => {
    try {
        const { username, password } = req.body
        const { image } = req.files
        const fileName = image.name.replace(/\s/g, '')
        const fileAddress = path.join(process.cwd(), 'src', 'database', 'img', fileName)
        image.mv(fileAddress)
        let data = req.readData('users', 'user.json')
        data = data ? JSON.parse(data) : []

        let userId = data.length ? data[data.length - 1].userId + 1 : 1

        let user = {
            "userId": userId,
            "username": username,
            "password": password,
            "profileImg": fileName
        }


        data.push(user)
        req.writeData('users', 'user.json', data)

        const token = jwt.sign({
            "userId": userId
        }, process.env.TOKEN_KEY)

        delete user.password

        user['token'] = token
        return res.send(user)
    } catch (error) {
        console.log(error);
    }
}

export const LOGIN = (req, res) => {
    const { username, password } = req.body
    let data = req.readData('users', 'user.json')
    data = data ? JSON.parse(data) : []
    let foundUser = data.find((user) => user.username == username && user.password == password)
    if (!foundUser) return clientError(req, res, "This user not found")
    delete foundUser.password
    return res.send(foundUser)
}