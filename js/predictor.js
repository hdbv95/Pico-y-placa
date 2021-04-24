const timeToSeconds = require('./timeToSeconds')
const data = require('./data')

//const used to get de day name instead of the number returned by the getDay function
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

//function that predicts if the car can or can't be on the road
const predictDate = ( licensePlate,date,time )=>{
    //gets last character of the licensePlate
    let licensePlateNumber = parseInt(licensePlate.slice(-1));
    
    //splits the date in year, month, day
    let  year = date.split('-')[0];
    let  month = date.split('-')[1];
    let  day = date.split('-')[2];
    
    //instantiates a new Date with the user inputs and gets which day it is
    let expectedDate = new Date(year,month-1,day);
    let expectedDay = days[expectedDate.getDay()];
    
    //turns the time input by the user into seconds
    let timeSeconds = timeToSeconds(time);

    //checks if the car have one of the license plates that can't be on the road but it can if it's out of the specified schedule
    //checks if the car don't have one of the license plates so it can be on the road
    //checks if its saturday or sunday so it can be on the road
    if( (data.days[expectedDay].includes(licensePlateNumber)&&(timeSeconds<initialMorningTimeSeconds||(endMorningTimeSeconds<timeSeconds && timeSeconds<initialEveningTimeSeconds)||endEveningTimeSeconds<timeSeconds))
        ||data.days[expectedDay].includes(licensePlateNumber)==false
        ||expectedDay=='saturday'
        ||expectedDay =='sunday'){
            return  (`Your car with the license plate: ${licensePlate} can be on the road the ${expectedDay} at ${time} .`);
        }
        else return (`Your car with the license plate: ${licensePlate} can't be on the road the ${expectedDay} at ${time} .`);
}

module.exports = predictDate;