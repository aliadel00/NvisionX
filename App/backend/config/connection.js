const { MongoClient, ObjectID } = require('mongodb');
const config = require('./config')
const monogconfig = config.DATABASE_CONFIG.url;

MongoClient.connect(monogconfig, { useNewUrlParser: true }, { useUnifiedTopology: true })
    .then(db => {
        const connection = db;
        module.exports = connection
    })
    .catch(err => console.error(err.stack))