"use strict";
const mongoose = require('mongoose');
const Manhole = mongoose.model('Manhole');

exports.addManhole = async (req, res) => {
  let newManhole = Manhole({
    manholeId: req.query.manholeId,
    location: {
        lat: req.query.lat,
        long: req.query.long
    },
    status: {
      overflow: req.query.overflow,
      damage: req.query.damage,
      manholeCover: req.query.manholeCover
  },
    phoneNumber:req.query.phoneNumber
  });

  //Save the product.
  newManhole.save((err) => {
    if (err) {
        console.log(err);
        res.json({
          success: false,
          message: 'Something went wrong.'
        })
    }
    res.json({
      success: true,
      message: 'manhole added.'
    });
  })
}
