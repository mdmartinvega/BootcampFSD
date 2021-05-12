const express = require("express");
const app = express();
const port = 3000;

//Antes de los endpoints, usamos los middleware
app.use(express.json());

//3. Endpoint GET de un usuario. Devolverá un objeto JSON
app.get("/user", (req, res) => {
    res.json({message: "Petición GET local user"});
});

//4. Endpoint PUT de un usuario al que le pasaremos la ID del usuario que 
//queremos actualizar. Devolveremos en un objeto JSON su id
app.put('/user/:id', (req, res) => {
    let body = req.body;
    res.json({id: body.id});
});

//5. Endpoint DELETE de un usuario. Devolverá un objeto JSON.
app.delete('/user', (req, res) => {
    let body = req.body;
    res.json({id: body.id});
});   

//6. Endpoint POST para crear un usuario. Le pasaremos la información necesaria para crear un
//usuario. Si el campo nombre no está definido, devolveremos un código de error HTTP 400, donde
//indicaremos que el nombre es requerido. Devolveremos la información proporcionada en la
//petición POST en un objeto user.

app.post("/user", (req, res) => {
    let body = req.body;

    if(body.name) {
        res.status(200).json({id: "2", name: "pepe", email: "pepe@gmail.com", password: "1234"});
    } else {
        res.status(400).json({ok: false, message: "El nombre es obligatorio"});
    }    
});

app.listen(port);

//{
//     "id": 1,
//     "name": "loli",
//     "email": "lalolyla@gmail.com",
//     "password": "1234"
// }