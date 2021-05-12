const express = require("express");
const app = express();
const port = 3000;

//Antes de los endpoints, usamos los middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Petición GET recibida correctamente"});
});

app.get("/:id", (req, res) => {
    let id = req.params.id;
    res.json({message: `Petición GET con parámetro: ${id}`});
});

app.post("/", (req, res) => {
    let body = req.body;

    if(body.username) {
        res.status(200).json({message: "Hemos recibido su username"});
    } else {
        res.status(400).json({ok: false, message: "No hemos recibido su username"});
    }
    
    console.log(body.username + ` vive en la calle ${body.address.street}` + ` y tiene una hermana que se llama ${body.relatives.sister}`);
    
});

app.listen(port);