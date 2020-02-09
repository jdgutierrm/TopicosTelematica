const mongoose = require('mongoose');

const db = 'mongodb://localhost/telematicadb';

mongoose.connect(db)
    .then(db => console.log('DB is Connected'))
    .catch(err => console.error(err));

module.exports = mongoose;