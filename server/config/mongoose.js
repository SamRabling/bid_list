const mongoose = require("mongoose");
var path = require("path");
const fs = require("fs");

var models_path = path.join(__dirname, './../models');
mongoose.connect("mongodb://localhost/bidslist")
fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
});