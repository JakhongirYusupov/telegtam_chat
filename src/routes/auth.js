import { Router } from "express";
import { REGISTER, LOGIN } from '../controller/auth.js'
import { regValidation, logValidation } from '../middleware/validator.js'
const router = Router()

router.post('/register', regValidation, REGISTER)

router.post('/login', logValidation, LOGIN)

export default router