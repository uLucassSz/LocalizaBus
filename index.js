import express from "express";
import cors from "cors";
import connectDatabase from "./database/connect.js"
import database from "./database/model.js"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import getUser from "./database/get.js"
import register from "./database/register.js"
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json())
app.use(cors())

app.use(express.static('html'))

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

app.post("/register", async (req, res) => {

    const { user, password, email } = req.body
    if (!user || !email || !password) return res.json({ message: "Missing content" })

    const account = await database.findOne({ $or: [{ name: user }, { email }] })
    if (account?.name == user) return res.json({ message: "O nome de usuário já está em uso." })
    if (account?.email == email) return res.json({ message: "O email já está em uso." })

    const data = await register(user, password, email, false)
    return res.json(data)
})

app.get("/getlogin", async (req, res) => {
    const { user, password } = req.headers
    const account = await getUser(user, password)
    return res.json(account)
})

const routes = [
    { name: ["/", "/home"], path: "/html/index.html" },
    { name: ["/register", "/login"], path: "/html/pages/login.html" },
    { name: ["/linha", "/linhas"], path: "/html/pages/linhas.html" },
    { name: ["/settings", "/configuracao"], path: "/html/pages/settings.html" },
    { name: ["/assinatura"], path: "/html/pages/assinatura.html" },
    { name: ["/buspremium", "/comprar"], path: "/html/pages/buy.html" },
]

for (const route of routes)
    app.get(route.name, (_, res) => res.sendFile(__dirname + route.path))

app.listen(8080, '0.0.0.0', error => {
    if(error) return console.log(error)
    connectDatabase()
    return console.log('API Conectada!')
})

