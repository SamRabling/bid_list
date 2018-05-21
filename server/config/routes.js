const mongoose = require("mongoose");
const bids = require("../controllers/bids");

module.exports = function (app) {
    app.get("/bids", products.index);
}