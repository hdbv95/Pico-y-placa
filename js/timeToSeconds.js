const timeToSeconds = (time)=>{
    let currentHour = time.split(':')[0]*3600;
    let currentMinutes = time.split(':')[1]*60;
    let currentSeconds = time.split(':')[2];
    let currentTimeSeconds = currentHour+currentMinutes+currentSeconds;
    return currentTimeSeconds;
}
module.exports = timeToSeconds;