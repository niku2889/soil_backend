module.exports = (app) => {
    const covert = require('../../controllers/convertion.controller.js');

    // Create a new Sport Details
    app.get('/api/convertion', covert.getConvertion);

}