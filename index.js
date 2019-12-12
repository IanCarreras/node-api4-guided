const express = require("express")

// use for local machine
// const dotenv = require('dotenv')
// dotenv.config()
// console.log(process.env)

const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 8080 //443 https, 80 http

app.use((req, res, next) => {
	console.log(`[${new Date().toLocaleString()}] ${req.ip} ${req.method} ${req.url}`)
	next()
})

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
		COHORT: process.env.COHORT,
		secret: process.env.secret
	})
})

app.listen(port, host, () => {
	console.log(`Running at http://${host}:${port}`)
})