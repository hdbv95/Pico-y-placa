const assert = require('assert');
const Car = require('../js/car');
const predictor = require('../js/predictor');
const timeToSeconds = require('../js/timeToSeconds');

before('sets global variables', ()=> {
    global.initialMorningTimeSeconds =25200;//'07:00:00' in seconds
    global.endMorningTimeSeconds = 34200;//'09:30:00' in seconds
    global.initialEveningTimeSeconds = 57600;//'16:00:00' in seconds
    global.endEveningTimeSeconds = 70200;//'19:30:00' in seconds
});

describe('car.js tests',()=>{
    let testCar= Car('pcv-7321');
    it('the type shoud be an Object',()=>{
        typeof(testCar);
    });
    it("the car prediction should be the negative answer ",()=>{
        assert.strictEqual(testCar.getPrediction('2021-04-26','07:30:00'),"Your car with the license plate: pcv-7321 can't be on the road the monday at 07:30:00 .");
    });
    it("the car prediction should be the positive answer ",()=>{
        assert.strictEqual(testCar.getPrediction('2021-04-27','07:30:00'),"Your car with the license plate: pcv-7321 can be on the road the tuesday at 07:30:00 .");
    });
});

describe('predictor tests',()=>{
    it("should be the negative answer ",()=>{
        assert.strictEqual(predictor('pcv-7321','2021-04-26','07:30:00'),"Your car with the license plate: pcv-7321 can't be on the road the monday at 07:30:00 .");
    });
    it("should be the positive answer ",()=>{
        assert.strictEqual(predictor('pcv-7321','2021-04-27','07:30:00'),"Your car with the license plate: pcv-7321 can be on the road the tuesday at 07:30:00 .");
    });
});

describe('timeToSeconds function',()=>{
    it('should return 27000',()=>{
        timeToSeconds('07:30:00');
    });
    it('should not return 27000',()=>{
        timeToSeconds('19:30:00');
    });
});
