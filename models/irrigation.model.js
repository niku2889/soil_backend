const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const irrigationSchema = new Schema({
    TotalWater: {
        Totalwater:Schema.Types.Number
    },
    ListOfStages:[{
        Totalwater:Schema.Types.Number
    }]
});

module.exports = mongoose.model('irrigation', irrigationSchema);