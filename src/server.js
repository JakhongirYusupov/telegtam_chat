import express from "express";
import { PORT } from '../config.js'
import fileUpload from 'express-fileupload'
import { config } from "dotenv";
config()

import path from 'path'

const app = express()

app.use(fileUpload())
app.use(express.json())

app.use('/image', express.static(path.join(process.cwd(), 'src', 'database', 'img')))

import model from './middleware/models.js'
app.use(model)

import authRouter from './routes/auth.js'
app.use('/auth', authRouter)

import homeRouter from './routes/index.js'
app.use('/chat', homeRouter)


app.listen(PORT, () => console.log('Server is running http://localhost:' + PORT))


