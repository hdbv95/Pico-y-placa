//const prompt = require('prompt-sync')();
const express = require('express');
const path = require('path');

const predict = require('./index');

const app = express();

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.urlencoded({
  extended: true
}));

app.post('/',(req,res)=>{

  if(req.body.licensePlate=="" || req.body.date=="" || req.body.time==""){
    res.send('form not filled correctly');
  }
  else{
    let response = predict(req.body.licensePlate,req.body.date,req.body.time);
    res.send(response);
  }

});