const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: [true,"User's first name is required."], minlength: 2 },
    lastName: { type: Number, required: [true, "User's last name is required."], minlength: 2 }
})

mongoose.model('user', UserSchema)