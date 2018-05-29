const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var path = require("path");
const session = require("express-session");
const bcrypt = require('bcrypt-as-promised');

// sessions
app.set('trust proxy', 1)
app.use(session({
    secret: "UnTiTlEd_(pOrTrAiT_Of_rOsS)_By_Felix_Gonzalez-Torres",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 10000 }
}));

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

