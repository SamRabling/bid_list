const mongoose = require("mongoose");
const bids = require("../controllers/bids");

module.exports = function (app) {
    app.post("/newUser", bids.createUser);
    app.post("/logIn", bids.logIn);
    app.get("/bids", bids.index);
    app.post("/bids/art", bids.createArt);
    app.post("/bids/user", bids.createUser);
    app.get("/bids/art/:id", bids.showPiece);
    app.get("/bids/user/:id", bids.retrieveUser);
    app.put("/bids/interested/:id", bids.interested);
    app.put("/bids/uninteresed/:id", bids.uninterested);
}