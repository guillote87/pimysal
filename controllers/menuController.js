let platos = [

    {
        id: "1",
        nombre: "Carpaccio de Salmon",
        detalle: " Carpaccio de salmon",
        descripcion: "",
        path: "/images/Carpaccio-de-salmon.jpg",
        precio: "U$S 27.50"
    },

    {
        id: "2",
        nombre: "Risotto de berenjena",
        detalle: "Risotto de berenjena y queso de cabra",
        descripcion: "",
        path: "/images/Risotto-berenjena-queso-cabra.jpg",
        precio: "U$S 47.00"
    },
    {
        id: "3",
        nombre: "Mousse de arroz",
        detalle: " Mousse de arroz con leche y aroma de azahar",
        descripcion : "",
        path: "/images/Mousse-de-arroz-con-leche.jpg",
        precio: "U$S 27.50"
    },

    {
        id: "4",
        nombre: "Espárragos blancos",
        detalle: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem ",
        path: "/images/esparragos.png",
        precio : "U$S 37.50"
    }
]


const menuController = {
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