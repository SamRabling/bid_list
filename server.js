const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var path = require("path");


app.use(bodyParser.json());
app.use(express.static(__dirname + '/AngularApp/dist/AngularApp'));

//mongoose
require("./server/config/mongoose");
//routes
require("./server/config/routes.js")(app)
//angular routes
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./AngularApp/dist/AngularApp/index.html"))
});

//port
app.listen(5000, function () {
    console.log("listening on port 5000");
});

