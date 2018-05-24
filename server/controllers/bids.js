const mongoose = require("mongoose");
var User = mongoose.model("user");
var Art = mongoose.model("art");

module.exports = {
    index: function (req, res) {
        Art.find({}, function (err, art) {
            if (err) {
                res.json({ status: false, error: err });
            } else {
                res.json({ status: true, data: art });
            }
        });
    },

    createArt: function (req, res) {
        console.log("post data art");
        var art = new Art({
            title: req.body.title,
            artist: req.body.artist,
            img: req.body.img,
            medium: req.body.medium,
        });
        art.save(function (err) {
            if (err) {
                res.json({ status: false });
            } else {
                res.json({ status: true, data: art });
            }
        });
    },

    createUser: function (req, res) {
        console.log("post datauser");
        var user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        });
        user.save(function (err) {
            if (err) {
                res.json({ status: false });
            } else {
                res.json({ status: true, data: user });
            }
        });
    },

    retrieveArt: function (req, res) {
        Art.find({}, function (err, art) {
            if (err) {
                res.json({ status: false });
            } else {
                res.json({ data: art });
            }
        });
    },

    showPiece: function (req, res, err) {
        var id = req.params.id
        Art.findOne({ _id: id }, function (err, art) {
            if (err) {
                res.json({ status: false });
            } else {
                res.json({ status: true, data: art });
            }
        });
    },

    retrieveUser: function (req, res, err) {
        var id = req.params.id
        User.findOne({ _id: id }, function (err, user) {
            if (err) {
                res.json({ status: false });
            } else {
                res.json({ status: true, data: user });
            }
        });
    },


    interested: function (req, res, err) {
        var id = req.params.id
        Art.findById({ _id: id }, function (err, art) {
            if (err) {
                res.json(err);
            } else {
                art.interested += 1,
                art.save(function (err, updatedArt) {
                    if (err) {
                        res.json({ status: false });
                    }
                    else {
                        res.json({ status: true, updatedArt });
                    }
                });

            }
        });
    },

    uninterested: function (req, res, err) {
        var id = req.params.id
        Art.findById({ _id: id }, function (err, art) {
            if (err) {
                res.json(err);
            } else {
                art.interested -= 1,
                    art.save(function (err, updatedArt) {
                        if (err) {
                            res.json({ status: false });
                        }
                        else {
                            res.json({ status: true, updatedArt });
                        }
                    });

            }
        });
    },

}