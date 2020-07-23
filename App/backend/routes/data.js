const express = require('express')
const router = express.Router()
const { MongoClient, ObjectID } = require('mongodb');
const config = require('../config/config')
const monogconfig = config.DATABASE_CONFIG.url;
const database = config.DATABASE_CONFIG.database
let connection;


MongoClient.connect(monogconfig,{ useUnifiedTopology: true })
    .then(db => {
        connection = db;
    })
    .catch(err => console.error(err.stack))


router.get('/get',(req,res)=>{ 

        connection.db(database).collection('RegistrationData').find().toArray((err,result)=>{
        if(err) throw err;
        res.json(result)
    })

})

router.post('/create',(req,res)=>{
    console.log('create record')
    console.log(req.body)
    connection.db(database).collection('RegistrationData').insertOne(req.body,(err,doc)=>{
        if(err) throw err;
        console.log(doc.insertedCount)
        res.json("added suucesfully")
    })
})

module.exports = router