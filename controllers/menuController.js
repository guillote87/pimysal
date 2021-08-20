let platos = [

    {
        id: "1",
        nombre: "Milanesa a la napolitana",
        detalle: " Milanesa con salsa de tomate y muzzarella",
        descripcion: "",
        precio: "U$S 27.50"
    },

    {
        id: "2",
        nombre: "Risotto de berenjena",
        detalle: "Risotto de berenjena y queso de cabra",
        descripcion: "",
        precio: "U$S 47.00"
    },
    {
        id: "3",
        nombre: "Mousse de arroz",
        detalle: " Mousse de arroz con leche y aroma de azahar",
        descripcion : "",
        precio: "U$S 27.50"
    },

    {
        id: "4",
        nombre: "Espárragos blancos",
        detalle: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem ",
        precio : "U$S 37.50"
    }
]


const menuController = {
    detallemenu: (req, res) => {
        res.render("detalleMenu");
    },
    id: (req, res) => {
        let id = req.params.id
        let plato = platos.find(i => i.id == id);
        if (plato.descripcion == ""){
            plato.descripcion = "Plato tipico"
        }
        res.render("detalleMenu", {
            plato
        })
    }
};

module.exports = menuController;