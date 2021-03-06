require("./config/config");

const cors = require('cors');

const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(cors());


const toDoLists = require("./routes/toDoLists");

//Antes de los endpoints, usamos los middleware
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Indicamos la ruta que vamos a seguir en la url,
//todo el grupo de endpoints que esté dentro se cree directamente con la ruta users
//Nos saldrá duplicado users/users en el archivo users pero para ello dejamos la ruta 
// "/" en el componente users y lo añadimos solo aquí
// use funciona para importar rutas enteras y si lo hacemos espera un prefijo, el primer argumento
//es la ruta y el segundo argumento es el componente o grupo importado

//Indicamos la ruta que vamos a seguir en la url
app.use("/toDoLists", toDoLists);


//Insertamos la ruta de nuestra base de datos para conectarnos a ella
//puerto y base de datos
mongoose.connect("mongodb://localhost:27017/toDoLists", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

//En connection va a estar nuestra base e datos
const db = mongoose.connection;

//error y open son como eventos "click" en el addEventListener
//on se ejecuta varias veces una por cada error y once solo una vez 
db.on("error", err => console.log("Connection to DB failed: ", err));
db.once("open", () => console.log("Connected to DB successfuly"));

app.listen(
    process.env.PORT, 
    () => console.log("Listening on port: ", process.env.PORT));