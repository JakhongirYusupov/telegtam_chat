import { Router } from "express";
const router = Router()

router.get('/register', (req, res) => {
    res.send('register')
})

router.post('/login', (req, res) => {
    res.send('login')
})