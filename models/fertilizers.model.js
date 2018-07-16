const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const plotSchema = new Schema({
    FertilizerId: Schema.Types.Number,
    Name: Schema.Types.String,
    Concentration: Schema.Types.Number,
    ConcentrationUnit: Schema.Types.Number,
    IsLiquid: Schema.Types.Boolean
});

module.exports = mongoose.model('plot', plotSchema);