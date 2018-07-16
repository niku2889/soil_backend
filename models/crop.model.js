const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const cropSchema = new Schema({
    CropId: Schema.Types.Number,
    VarietyId:Schema.Types.Number,
    YieldGoalId: Schema.Types.Number
    
});

module.exports = mongoose.model('crop', cropSchema);