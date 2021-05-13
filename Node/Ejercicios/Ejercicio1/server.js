//Nos traemos las variables de entorno queutilizaremos en un servidor real
require("./config/config");

const express = require("express");
const app = express();
const port = 3000;

//Antes de los endpoints, usamos los middleware, para procesar json
app.use(express.json());

let users = [];

//3. Endpoint GET de un usuario. Devolverá un objeto JSON
app.get("/users", (req, res) => {
    let user = req.body;
    res.json({users});
});

//4. Endpoint PUT de un usuario al que le pasaremos la ID del usuario que 
//queremos actualizar. Devolveremos en un objeto JSON su id
app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    res.json({id});
});

//5. Endpoint DELETE de un usuario. Devolverá un objeto JSON.
app.delete('/users/:id', (req, res) => {
    let id = req.params.id;

    const removedUser = users.splice(id, 1);

    res.status(200).json(removedUser);
});   

//6. Endpoint POST para crear un usuario. Le pasaremos la información necesaria para crear un
//usuario. Si el campo nombre no está definido, devolveremos un código de error HTTP 400, donde
//indicaremos que el nombre es requerido. Devolveremos la información proporcionada en la
//petición POST en un objeto user.

app.post("/user", (req, res) => {
    let body = req.body;

    if(body.name) {
        users.push(body);
        res.status(201).json({user: body});
    } else {
        res.status(400).json({ok: false, message: "El nombre es obligatorio"});
    }    
});

app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", process.env.PORT);
});

// {
//     "name": "otro",
//     "email": "lalolyla@gmail.com",
//     "password": "1234"
// }