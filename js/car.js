const predictDate = require('./predictor');

//function that returns a car object that has the attribute licensePlate, and the method getPrediction
//the method is written in the module predictor
const Car = (licensePlate) => {
    obj={};
    obj.licensePlate = licensePlate;
    
    obj.getPrediction = (date,time) => {
        return predictDate(licensePlate,date,time)
    };
    return obj;
}

module.exports = Car;