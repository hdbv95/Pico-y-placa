const Car = require('./js/car');

//this function recieves license plate, date and time as parameters
//to create a Car object that uses it's method get prediction based on user input
const predict= (licensePlate,date,time)=>{
    let userCar = Car(licensePlate);
    return userCar.getPrediction(date,time+':00');
}

module.exports = predict;