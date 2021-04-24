//function that convert a specified time(hh:mm:ss) into seconds
const timeToSeconds = (time)=>{
    let currentHour = time.split(':')[0]*3600;
    let currentMinutes = time.split(':')[1]*60;
    let currentSeconds = parseInt(time.split(':')[2]);//turns into integer because it could be a string '00'
    let currentTimeSeconds = currentHour+currentMinutes+currentSeconds;
    return currentTimeSeconds;
}
module.exports = timeToSeconds;