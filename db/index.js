const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/pokemon';

// Connect Mongoose to our local MongoDB with the specified Uri

const db = mongoose.connect(mongoUri);

// exporting our db
module.exports = db;