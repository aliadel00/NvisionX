const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const config = require('./config/config')
const data = require('./routes/data')
const { MongoClient, ObjectID } = require('mongodb');
const monogconfig = config.DATABASE_CONFIG.url;
app.use(bodyParser.json())
const database = config.DATABASE_CONFIG.database
//uncomment/comment if facing cors issue.
app.use(cors({
    origin: [
        "http://localhost:4200"
    ], credentials: true
}));

let connection;

MongoClient.connect(monogconfig,{ useUnifiedTopology: true })
    .then(db => {
        connection = db;
    })
    .catch(err => console.error(err.stack))

app.get('/test',(req,res)=>{
    res.json('I am working fine')
})

app.use('/api/data',data)

app.get('/getdata',(req,res)=>{
    connection.db(database).collection('RegistrationData').find().toArray((err,result)=>{
        if(err) throw err;
        res.json(result)
    })
})

const PORT = process.env.PORT || config.PORT
app.listen(PORT, () => console.log(`Application running on PORT ${PORT} `))

