const http = require("http")
const express = require("express")
const controllers = require("./controllers")
const config = require("./config")

const app = express()

app.use("/api", controllers.rootController)

http.createServer(app).listen(config.server.port, () => console.log("server running at port: " + config.server.port))
