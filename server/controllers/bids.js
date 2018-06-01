const mongoose = require("mongoose");
var User = mongoose.model("user");
var Art = mongoose.model("art");
const bcrypt = require('bcrypt-as-promised');

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
        });
        console.log("processed info");
        bcrypt.hash(req.body.password, 10)
        .then( hashed => {
            user.password = hashed;
            console.log("hashed");
            user.save(function (err, user) {
                console.log(err)
                console.log("saved")
                if (err) {
                    res.json({status: false, data: err});
                    console.log(data)
                } else {
                    console.log(user.email)
                    res.json({ status: true, data: user });
                }
            })
        })
        .catch(error => {
            console.log("oops! something went wrong", error);
            res.json({ status: false, data: error.message});
        });
    },

    logIn: function( req, res ) {
        console.log(" req.body: ", req.body);
        User.findOne({ email: req.body.email }, function (err, user) {
            if (err) {
                res.json({ status: false, data: err });
            }
            else {
                bcrypt.compare(req.body.password, user.password)
                    .then(result => {
                        console.log(user.email)
                        res.json({ status: true, data: user });
                    })
                    .catch(error => {
                        console.log("oops! something went wrong", error);
                        res.json({ status: false, data: error.message });
                    });
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
        var email = req.params.email
        User.findOne({ _email: email }, function (err, user) {
            if (err) {
                res.json({ status: false });
            } else {
                res.json({ status: true, data: user });
            }
        });
    },


    interested: function (req, res, err) {
        var id = req.params.id
        var email = req.params.email
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

        User.findOne({ email: email}, function( err, user) {
            if (err) {
                res.json(err);
            } else {
                user.wishlist.push(id);
                user.save(function (err) {
                    if(err) {
                        res.json({status:false, data:err});
                    } else {
                        res.json({status:true, data: user});
                        console.log(user);
                    }
                });
            }
        })
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
        User.findOne({ email: email }, function (err, user) {
            if (err) {
                res.json(err);
            } else {
                user.wishlist.pop(id);
                user.save(function (err) {
                    if (err) {
                        res.json({ status: false, data: err });
                    } else {
                        res.json({ status: true, data: user });
                        console.log(user);
                    }
                });
            }
        })
    }

}