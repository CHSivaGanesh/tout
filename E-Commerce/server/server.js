const express = require('express');
const path =require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const PORT = 3000;
const api = require('./routes/api');
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/api' , api);

app.get('/' , (req,res) => {
    res.send('Hello From Server')
});



app.listen(PORT,function(){
    console.log('Server is up and running on localhost:'+PORT)
})