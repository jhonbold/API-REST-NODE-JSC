const express = require('express');
const app = express();
//const data = require('./data.jason');

//app.use(express.json());

//Métodos Get,Post,Put,Delete
app.get('/clients',function(req, res){
    //res.json(data);
});
app.get('/clients/:id',function(req, res){});
app.post('/clients',function(req, res){});
app.put('/clients',function(req, res){});
app.delete('/clients',function(req, res){});

app.listen(3000, function(){
    console.log('Server is running');
});