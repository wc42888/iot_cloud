var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IOTSchema = new Schema({
    username: String,
    iot: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var IOTs = mongoose.model('IOTs', IOTSchema);

module.exports = IOTs;
