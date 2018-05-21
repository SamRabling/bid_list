const mongoose = require("mongoose");
var User = mongoose.model("user");

module.exports = {
    index: function (req, res) {
        Product.find({}, function (err, user) {
            if (err) {
                res.json({ status: false, error: err });
            } else {
                res.json({ status: true, data: user });
            }
        });
    }
}