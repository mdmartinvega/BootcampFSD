//Mongoose nos permite crear esquemas con objetos fuertemente tipados,
//exactamente los valores que le requerimos

//Models va a definir como van a ser los esquemas de cada colección
//Modelo es la representación de una entidad de la BBDD, productos, usuarios,,,,

const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

//Acepta dos campos, los valores que van a ser válidos y el mensaje de error
//si eso no se cumple

let todoSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    }
});

todoSchema.plugin(uniqueValidator, {message: "{PATH} should be unique"})

module.exports = mongoose.model("ToDoList", todoSchema);