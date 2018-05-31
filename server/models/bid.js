const mongoose = require("mongoose");
const bcrypt = require('bcrypt-as-promised');

const ArtSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Art must have a name."], minlength: 2},
    artist: { type: String, required: [true, "Art must have title."],minlength: 2 },
    img: { type: String, required: [true, "Art must have an image."], },
    medium: { type: String, required: [true, "Art must have medium."], minlength: 2 },
    interested: { type: Number, default: 0 }
})
mongoose.model('art', ArtSchema)

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: [true,"User's first name is required."], minlength: 2 },
    lastName: { type: String, required: [true, "User's last name is required."], minlength: 2 },
    email: { type: String, unique: [true, "We already have this email on file."], required: [true, "You must provide and email"], match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/] },
    password: { type: String, minlength: 6 },
    art: [ArtSchema]
})

mongoose.model('user', UserSchema)