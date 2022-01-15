import { Router } from "express";
import { checkToken } from "../middleware/checkToken.js";
const router = Router()



import { getUsers } from '../controller/home.js'
router.get('/', checkToken, getUsers)

router.get('/user', (req, res) => {
    res.send('user')
})

router.post('/user/message', (req, res) => {
    res.send('message')
})

export default router