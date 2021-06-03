//Mongoose nos permite crear esquemas con objetos fuertemente tipados,
//exactamente los valores que le requerimos

//Models va a definir como van a ser los esquemas de cada colección
//Modelo es la representación de una entidad de la BBDD, productos, usuarios,,,,

const mongoose = require("mongoose");
//Para que salten los errores bonitos
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

//Acepta dos campos, los valores que van a ser válidos y el mensaje de error
//si eso no se cumple
const validRoles = {
    values: ["ADMIN", "USER"],
    //Cuando pete value nos lo sustituirá por el valor que hemos asignado
    message: "{VALUE} is not a valid role"
}

let userSchema = new Schema({
    username: {
        //type es obligatorio
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        //No requerido si lo omitimos
        type: String,
        //Las constantes que no van a cambiar nunca se ponen  en mayúsculas
        default: "USER",
        enum: validRoles
    },
    active: {
        type: Boolean,
        default: true
    }
});

//Modifica a formato Json de objetos
userSchema.methods.toJSON = function() {
    const user = this;

    const userObject = user.toObject();

    //El objeto deja de tener la propiedad password y el cliente
    //no la ve por pantalla
    delete userObject.password;
    
    return userObject;
}


userSchema.plugin(uniqueValidator, {message: "{PATH} should be unique"})

//Exportamos el esquema
module.exports = mongoose.model("User", userSchema);