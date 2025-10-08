/* eslint-disable no-undef */
const jsonServer = require("json-server")
const path = require("path")
const fs = require("fs")
const { setTimeout } = require("timers")

const server = jsonServer.create()

const router = jsonServer.router(
    path.resolve(__dirname, "db.json")
)

server.use(async (req, res, next) => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    next()
})

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ error: "Auth Error" })
    }
    next()
})

server.use(jsonServer.defaults())
server.use(router)

server.post("/login", (req, res) => {
    const { username, password } = req.body
    const db = JSON.parse(
        fs.readFileSync(
            path.resolve(__dirname, "db.json"),
            "utf-8"
        )
    )

    const { users } = db

    const user = users.find(
        (u) =>
            u.username === username &&
            u.password === password
    )

    if (user) {
        return res.json(user)
    }

    return res.status(403).json({ error: "Auth Error" })
})

server.listen(8000, () => {
    console.log("JSON Server is running on port 8000")
})
