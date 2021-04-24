const timeToSeconds = require('./timeToSeconds')
const data = require('./data')

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const predictDate = ( licensePlate,date,time )=>{
    let licensePlateNumber = parseInt(licensePlate.slice(-1));
    
    let  year = date.split('-')[0];
    let  month = date.split('-')[1];
    let  day = date.split('-')[2];
    
    let expectedDate = new Date(year,month-1,day);
    let expectedDay = days[expectedDate.getDay()];
    
    let timeSeconds = timeToSeconds(time);

    let initialMorningTimeSeconds = timeToSeconds(data.initialMorningTime);
    let endMorningTimeSeconds = timeToSeconds(data.endMorningTime);

    let initialEveningTimeSeconds = timeToSeconds(data.initialEveningTime);
    let endEveningTimeSeconds = timeToSeconds(data.endEveningTime);
    if( (data.days[expectedDay].includes(licensePlateNumber)&&(timeSeconds<initialMorningTimeSeconds||(endMorningTimeSeconds<timeSeconds && timeSeconds<initialEveningTimeSeconds)||endEveningTimeSeconds<timeSeconds))
        ||data.days[expectedDay].includes(licensePlateNumber)==false
        ||expectedDay=='saturday'
        ||expectedDay =='sunday'){
            return  (`Your car with the license plate: ${licensePlate} can be on the road the ${expectedDay} at ${time} .`);
        }
        else return (`Your car with the license plate: ${licensePlate} can't be on the road the ${expectedDay} at ${time} .`);
}

module.exports = predictDate;