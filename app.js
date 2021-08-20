const express = require("express");
const app = express();

app.set ("view engine","ejs")

const menuRoute = require("./routes/menu");
const mainRoute = require("./routes/main");

app.use(express.static("./public"))




app.listen(process.env.PORT||3000,()=>{
    console.log ("Servidor Activo")
})

app.use("/",menuRoute)

app.use("/",mainRoute)