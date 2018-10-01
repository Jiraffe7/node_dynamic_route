const express = require("express")
const config = require("../config")

exports.rootController = express.Router()

for (route of config.routes) {
    const controller = require(route.controller)
    exports.rootController.use(route.path, controller.controller)
}

