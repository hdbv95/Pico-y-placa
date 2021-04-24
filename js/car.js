const predictDate = require('./predictor');

const Car = (licensePlate) => {
    obj={};
    obj.licensePlate = licensePlate;
    
    obj.getPrediction = (date,time) => {
        return predictDate(licensePlate,date,time)
    };
    return obj;
}

module.exports = Car;