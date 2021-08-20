const express = require("express")
const router = express.Router()


const menucontroller = require ("../controllers/menuController")
router.get("/detalle/:id", menucontroller.id)

module.exports= router