import { Router } from "express";
import { REGISTER, LOGIN } from '../controller/auth.js'
import { regValidation, logValidation } from '../middleware/validator.js'
import { ischeckToken } from "../middleware/checkToken.js";
const router = Router()

router.post('/register', ischeckToken, regValidation, REGISTER)

router.post('/login', ischeckToken, logValidation, LOGIN)

export default router