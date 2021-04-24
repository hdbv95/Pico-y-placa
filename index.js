const Car = require('./js/car');

const predict= (licensePlate,date,time)=>{
    let userCar = Car(licensePlate);
    return userCar.getPrediction(date,time+':00');
}

module.exports = predict;