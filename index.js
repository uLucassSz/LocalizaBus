import express from "express";
import cors from "cors";
import connectDatabase from "./database/connect.js"
import database from "./database/model.js"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json())
app.use(cors())

app.get('/ping', (req, res) => {
    return res.send('PONG')
})

app.get("/user", async (req, res) => {
    const user = await database.findOne({ name: req.body.name }) || await database.findOne({ email: req.body.email })
    if (!user) return res.sendStatus(404)
    return res.send(user)
})

app.put("/user", async (req, res) => {
    const user = new database({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    }).save()
    return res.send(user)
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
})

// app.get -> "Pegar, Obter"
// app.post -> "Postar"
// app.delete -> "Deletar"
// app.put -> "Criar"
// app.patch -> "Editar"

app.listen(8000, '0.0.0.0', error => {
    if(error) return console.log(error)
    connectDatabase()
    return console.log('API Conectada!')
})

