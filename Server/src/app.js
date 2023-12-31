const express = require("express")
const app = express()
const router = require("./routes/index")
const morgan = require("morgan")

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
    
//crear un middleware
//info en formato json la traduce a javascript
app.use(express.json())

app.use(morgan("dev"));

//middleware que agrega el string antes de cada ruta
app.use("/rickandmorty", router)

module.exports = app