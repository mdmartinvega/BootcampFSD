//Grupo en endpoints son los que metemos en la carpeta routes

const express = require("express");
const ramda = require("ramda");

const router = express.Router();

//Importamos para que no nos de error al crear el POST
const User = require("../models/user");

router.get("/", (req, res) => {
    //Similar al find de mongo. Si el filtro está vacío, 
    //me devuelve todos los documentos. Si hay algún error lo pasa y si no nos devuelve 
    //todos los documentos que hacen match con el filtro, si no hay filtro pues todos lod de la colección
    User.find({}).exec((error, users) => {//Dentro del filtro ponemos
        //lo que buscamos, por ejemplo {role: "ADMIN"}.
        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(200).json({ok: true, users})
        }
    });
});

// router.get("/", (req, res) => {
//     res.json({message: "Petición GET recibida correctamente"});
// });

router.get("/:id", (req, res) => {
    let id = req.params.id;
    res.json({message: `Petición GET con parámetro: ${id}`});
});

router.post("/", (req, res) => {
    let body = req.body;

    const user = new User({
        username: body.username,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
    });
    //El método save de mongoose sirve para guardar un objeto en nuestra base de datos
    //en este caso un usuario a través de la petición POST. Con user.save(); ya lo tendríamos
    //salvado pero queremos darle feedback al cliente
    user.save((error, savedUser) => {
        if(error) {
            res.status(400).json({ok: false,error});
        } else {
            res.status(201).json({ok: true, savedUser})
        }
    });

    // if(body.username) {
    //     res.status(200).json({message: "Hemos recibido su username"});
    // } else {
    //     res.status(400).json({ok: false, message: "No hemos recibido su username"});
    // }
        
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = ramda.pick(["username", "email"], req.body);

    User.findByIdAndUpdate(
        id,
        {active: false},
        body,
        { new: true, runValidators: true, context: 'query' }, //options
        (error, updatedUser) => {
            if(error) {
                res.status(400).json({ok: false, error});
            } else {
                res.status(200).json({ok: true, updatedUser});
            }
        }    
    );
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    User.findByIdAndRemove(id, (error, updatedUser) => {
        if(error) {
            res.status(400).json({ok: false, error});
        } else if (!updatedUser){
            res.status(400).json({ok: false, error: "User not found"});
        } else {
            res.status(200).json({ok: true, updatedUser});
        }
    })
})

//Exportamos router
module.exports = router;