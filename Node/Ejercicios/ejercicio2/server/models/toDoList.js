const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

const validRoles = {
    values: ["ADMIN", "USER"],
    message: "{VALUE} is not a valid role"
}

let userSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: true
    },
    completed: {
        type: Boolean,
        required: false
    },
    active: {
        type: Boolean,
        default: true
    }
});

userSchema.plugin(uniqueValidator, {message: "{PATH} should be unique"})

module.exports = mongoose.model("ToDoList", userSchema);