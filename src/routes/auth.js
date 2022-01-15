import { Router } from "express";
const router = Router()

router.post('/register', (req, res) => {
    res.send('register')
})

router.post('/login', (req, res) => {
    res.send('login')
})

export default router