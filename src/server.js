import express from "express";
// import PORT from process.env.PORT || 5000
const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello')
})


app.listen(PORT, () => console.log('Server is running http://localhost:' + PORT))


