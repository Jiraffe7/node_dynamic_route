const express = require("express")

exports.controller = express.Router()
exports.controller.get("/", (req, res) => res.send("ok from one"))