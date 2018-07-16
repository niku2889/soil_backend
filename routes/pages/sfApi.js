module.exports = (app) => {
    const user = require('../../controllers/user.controller.js');

    // Create a new Sport Details
    app.post('/api/crops/', user.getcrops);

    // Retrieve all Sport Details
    app.post('/api/varieties/', user.getvarieties);

    
}