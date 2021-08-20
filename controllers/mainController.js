let platos = [

    {
        id: "1",
        nombre: "Milanesa a la napolitana",
        detalle: " Milanesa con salsa de tomate y muzzarella",
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


const path = require("path")

const mainController = {
    index: (req, res) => {
        res.render("index", {
            platos: platos
        })
    }

}

module.exports = mainController;