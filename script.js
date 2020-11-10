const newYear = '1 Jan 2021';

function countdown(){
    
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    
    const totalSeconds = (newYearDate - currentDate) / 1000;
    
    const day = Math.floor(totalSeconds / 3600 / 24);
    const hour = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const sec = Math.floor(totalSeconds) % 60;
    
    document.getElementById("days").innerHTML = day;
    document.getElementById("hours").innerHTML = formatTime(hour);
    document.getElementById("mins").innerHTML = formatTime(mins);
    document.getElementById("secs").innerHTML = formatTime(sec);
}

countdown();
setInterval(countdown,1000);

function formatTime(time){
    return time < 10 ? `0${time}` : time; 
}
