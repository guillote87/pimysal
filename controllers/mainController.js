let platos = [

    {
        id: "1",
        nombre: "Carpaccio de Salmon",
        detalle: " Carpaccio de salmon ahumado",
       precio: "U$S 27.50"
    },

    {
        id: "2",
        nombre: "Risotto de berenjena",
        detalle: "Risotto de berenjena y queso de cabra",
        precio: "U$S 47.00"
    },
    {
        id: "3",
        nombre: "Mousse de arroz",
        detalle: " Mousse de arroz con leche y aroma de azahar",
       precio: "U$S 27.50"
    },

    {
        id: "4",
        nombre: "Espárragos blancos",
        detalle: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio: "U$S 37.50"
    }
]
let about = {
    nombre: "Pimienta & Sal",
 info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use  ingredients.",
 info2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}


const path = require("path")

const mainController = {
    index: (req, res) => {
        res.render("index", {platos: platos,about:about})
    }

}

module.exports = mainController;