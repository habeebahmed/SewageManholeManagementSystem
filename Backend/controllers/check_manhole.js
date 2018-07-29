"use strict";
const mongoose = require('mongoose');
const Manhole = mongoose.model('Manhole');
const Overflow = mongoose.model('Overflow');

exports.checkOverflow = async (req, res) => {
  let manholeId = req.query.manholeId;
  Manhole.find({manholeId},(err,manhole) => {
      console.log(manhole);
      manhole[0].log.push({
          type:"overflow",
          date:Date.now()
      });
      manhole[0].status.overflow = true;
      Overflow.find({},(err,overflow) => {
            
            overflow[0].total_overflow += 1
            overflow[0].save((err) => {
                if (err) throw err;
                console.log("overflow incremented")
            })
        
      });

      manhole[0].save((err) => {
        if (err) {
            console.log(err);
            res.json({
              success: false,
              message: 'Something went wrong.'
            })
        }
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.json({
          success: true,
          message: 'OK Noted'
        });
      })
  })
}

exports.checkDamage = async (req, res) => {
    let manholeId = req.query.manholeId;
    Manhole.find({manholeId},(err,manhole) => {
        manhole[0].status.damage = true;
        manhole[0].log.push({
            type:"damage",
            date:Date.now()
        });
        Overflow.find({},(err,overflow) => {
            
            overflow[0].total_damage += 1
            overflow[0].save((err) => {
                if (err) throw err;
                console.log("damaged incremented")
            })

      })
  
        manhole[0].save((err) => {
          if (err) {
              console.log(err);
              res.json({
                success: false,
                message: 'Something went wrong.'
              })
          }
          res.json({
            success: true,
            message: 'OK Noted'
          });
        })
    })
  }

  exports.checkManhole = async (req, res) => {
    let manholeId = req.query.manholeId;
    Manhole.find({manholeId},(err,manhole) => {
        manhole[0].log.push({
            type:"overflow",
            date:Date.now()
        });
        manhole[0].status.manholeCover = true;
        Overflow.find({},(err,overflow) => {
            
            overflow[0].total_missing += 1
            overflow[0].save((err) => {
                if (err) throw err;
                console.log("missing incremented")
            })

      })
  
        manhole[0].save((err) => {
          if (err) {
              console.log(err);
              res.json({
                success: false,
                message: 'Something went wrong.'
              })
          }
          res.json({
            success: true,
            message: 'OK Noted'
          });
        })
    })
  }