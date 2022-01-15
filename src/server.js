import express from "express";
import { PORT } from '../config.js'
const app = express()

import authRouter from './routes/auth.js'
app.use('/auth', authRouter)


app.listen(PORT, () => console.log('Server is running http://localhost:' + PORT))


