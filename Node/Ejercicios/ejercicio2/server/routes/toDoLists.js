//Grupo en endpoints son los que metemos en la carpeta routes
const express = require("express");
const ramda = require("ramda");
const router = express.Router();

const ToDoList = require("../models/toDoList");

router.get("/", (req, res) => {
    //Similar al find de mongo. Si el filtro está vacío, 
    //me devuelve todos los documentos. Si hay algún error lo pasa y si no nos devuelve 
    //todos los documentos que hacen match con el filtro, si no hay filtro pues todos lod de la colección
    ToDoList.find({}).exec((error, toDoLists) => {//Dentro del filtro ponemos
        //lo que buscamos, por ejemplo {role: "ADMIN"}.
        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(201).json({ok: true, toDoLists})
        }
    });
});


router.post("/", (req, res) => {
    let body = req.body;

    const toDoList = new ToDoList({
        title: body.title,
        completed: body.completed,
        active: body.active
    });

    toDoList.save((error, savedToDo) => {
        if(error) {
            res.status(400).json({ok: false,error});
        } else {
            res.status(201).json({ok: true, savedToDo})
        }
    });
        
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = ramda.pick(["title", "completed", "active"], req.body);

    ToDoList.findByIdAndUpdate(
        id,
        body,
        { new: true, runValidators: true, context: 'query' }, //options
        (error, updatedToDoList) => {
            if(error) {
                res.status(400).json({ok: false, error});
            } else {
                res.status(200).json({ok: true, updatedToDoList});
            }
        }    
    );
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const body = ramda.pick(["title", "completed", "active"], req.body);

    /*     ToDoList.findByIdAndRemove(id, (error, updatedToDoList) => {
        if(error) {
            res.status(400).json({ok: false, error});
        } else if (!updatedToDoList){
            res.status(400).json({ok: false, error: "ToDo not found"});
        } else {
            res.status(200).json({ok: true, updatedToDoList});
        }
    })*/

    ToDoList.findByIdAndUpdate(
        id,
        body,
        { new: true, runValidators: true, context: 'query' }, //options
        (error, updatedToDoList) => {
            if(error) {
                res.status(400).json({ok: false, error});
            } else {
                res.status(200).json({ok: true, updatedToDoList});
            }
        }    
    );
})

module.exports = router;