const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const plotSchema = new Schema({
    PlotArea: Schema.Types.Number,
    PlotTypeId: Schema.Types.Number,
    FarmId: Schema.Types.Number,
    FarmName: Schema.Types.String,
    LocationGEO: {
        PlotName: Schema.Types.String,
        features: [{
            geometry: {

                coordinates: [Schema.Types.String],
                type: Schema.Types.String,
            },
            properties: Schema.Types.String,
            type: Schema.Types.String,
        }],
        type: Schema.Types.String
    }

});

module.exports = mongoose.model('plot', plotSchema);