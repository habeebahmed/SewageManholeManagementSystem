const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const overflowSchema = new mongoose.Schema({
        total_overflow: Number,
        total_damage: Number,
        total_missing: Number
});


module.exports = mongoose.model('Overflow', overflowSchema);