const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

const validRoles = {
    values: ["ADMIN", "USER"],
    message: "{VALUE} is not a valid role"
}

let userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Username is required"]
    },
    role: {
        type: String,
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

module.exports = mongoose.model("User", userSchema);