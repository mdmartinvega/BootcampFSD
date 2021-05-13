require("./config/config");

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const users = require("./routes/users");

//Antes de los endpoints, usamos los middleware
app.use(express.json());

//Indicamos la ruta que vamos a seguir en la url
app.use("/users", users);

mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

//error y open son como eventos
db.on("error", err => console.log("Connection to DB failed: ", err));
db.once("open", () => console.log("Connected to DB successfuly"));

app.listen(
    process.env.PORT, 
    () => console.log("Listening on port: ", process.env.PORT));
