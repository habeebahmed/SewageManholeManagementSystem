const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const manholeSchema = new mongoose.Schema({
    manholeId:  {
      type: String,
      required: true
    },
    location: {
      lat:{
        type: Number,
        required: true
      },
      long:{
        type: Number,
        required: true
      }
    },
    log:{
      type: Array
    },
    status: {
      overflow: {
        type: Boolean,
        default: false
      },
      damage: {
        type: Boolean,
        default: false
      },
      manholeCover: {
        type: Boolean,
        default: false
      }
    },
    phoneNumber: {
      type: Number,
      required: true
    }

});


module.exports = mongoose.model('Manhole', manholeSchema);
