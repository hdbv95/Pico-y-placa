const express = require('express');
const path = require('path');

const predict = require('./index');
const timeToSeconds = require('./js/timeToSeconds')
const data = require('./js/data');

//sets global variables for the data times for morning and evening in seconds
global.initialMorningTimeSeconds =timeToSeconds(data.initialMorningTime);
global.endMorningTimeSeconds = timeToSeconds(data.endMorningTime);
global.initialEveningTimeSeconds = timeToSeconds(data.initialEveningTime);
global.endEveningTimeSeconds = timeToSeconds(data.endEveningTime);

const app = express();

//starts a server that listens on port 7000
const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

//it shows the index.html file as the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

//used for post requests
app.use(express.urlencoded({
  extended: true
}));

//recieves post requests and runs the predict function
app.post('/',(req,res)=>{

  if(req.body.licensePlate=="" || req.body.date=="" || req.body.time==""){
    res.send('form not filled correctly');
  }
  else{
    let response = predict(req.body.licensePlate,req.body.date,req.body.time);
    res.send(response);
  }

});