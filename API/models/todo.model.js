var mongoose = require(`mongoose`);

var TaskSchema = new mongoose.Schema({
    title:      {type: String,  default: String},
    description:{type: String,  default: String},
    date:       {type: Date,    default: Date.now},
    alarm:      {type: Date,    default: new Date(`2000-01-01 00:00`)},
    status:     {type: Boolean, default: false}
});

module.exports = mongoose.model(`task`, TaskSchema);