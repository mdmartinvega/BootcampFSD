const express = require("express");
const router = express.Router();

const ToDoList = require("../models/toDoList");

router.get("/", (req, res) => {
    //Similar al find de mongo. Si el filtro está vacío, 
    //me devuelve todos los documentos.
    ToDoList.find({active: true}).exec((error, toDoLists) => {//Dentro del filtro ponemos
        //lo que buscamos, por ejemplo {role: "ADMIN"}.
        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(201).json({ok: true, users})
        }
    });
});

 router.get("/", (req, res) => {
     res.json({message: "Petición GET recibida correctamente"});
 });

// router.get("/:id", (req, res) => {
//     let id = req.params.id;
//     res.json({message: `Petición GET con parámetro: ${id}`});
// });

router.post("/", (req, res) => {
    let body = req.body;

    const toDoList = new ToDoList({
        title: body.title
    });

    toDoList.save((error, savedToDo) => {
        if(error) {
            res.status(400).json({ok: false,error});
        } else {
            res.status(201).json({ok: true, savedToDo})
        }
    });
        
});

module.exports = router;