"use strict";
const mongoose = require('mongoose');
const Manhole = mongoose.model('Manhole');
const Overflow = mongoose.model('Overflow');

exports.getInfo = async (req, res) => {
 // let manholeId = req.query.manholeId;
  Manhole.find({},(err, manhole) => {
    if (err) {
        console.log(err);
        res.json({
          success: false,
          message: 'Something went wrong.'
        })
    }
    let total =  manhole.length;
    let overflow ; 
    Overflow.find({},(err,info) => {
         if (err) throw err;
         overflow = info[0];
        // console.log(info);  
         console.log(manhole.length);
         console.log(info);
         res.json({
           manhole,
           total_manholes: total,
           info
          });
          })    
          
    for (let i = 0; i < total.length; i++) {
        let total2 = manhole[i].log.length;
        let a = [];
        let b = [];
        let c = [];
        console.log("manhole id :"+manhole[i].manholeId);
       // console.log("Date :"+manhole[i].)
            for(let j =0; j < total2.length; j++){
                if(manhole[i].log[j].type == "overflow" ){
                    a.push({
                        manholeId:manhole[i].manholeId,
                        time:manhole[i].log[i].date,
                        type:'overflow'
                    })
                }
                else if(manhole[i].log[j].type == "damage"){
                    b.push({
                        manholeId:manhole[i].manholeId,
                        time:manhole[i].log[i].date,
                        type:'damage'
                    })
                }
                else{
                    c.push({
                        manholeId:manhole[i].manholeId,
                        time:manhole[i].log[i].date,
                        type:'missing'
                    })
                }
                console.log(a.length);
                console.log(b.length);
                console.log(c.length);
            }
        console.log("a: "+a);
        
    }

        
      

      

  })
}
exports.solved = async (req,res) => {
    let manholeId = req.query.manholeId;
    Manhole.find( { manholeId } ,(err,manhole) =>{
        manhole[0].status.overflow = false;
        manhole[0].status.damage = false;
        manhole[0].status.manholeCover = false;
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