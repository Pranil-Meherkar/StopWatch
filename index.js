let sec = 0;
let min = 0;
let hours = 0;
var running;

function start() {
    running = true;
    setTimeout(1000);
    stopWatch();
    document.getElementById("reset").style.display = "inline-block";
    setTimeout(1000);
}

function stopTime() {
    running = false;
    console.log("stop");  
}

function reset() {
    [sec,min,hours] = [0, 0, 0]
    displayTime();
}

function displayTime() {
    document.getElementById("stopwatch").innerHTML = `${hours} : ${min} : ${sec}`
}
function stopWatch() {
    
    if(running){
        displayTime();
        sec++;
        if (sec === 60){
            sec = 0;
            min++;
        }
        if (min === 60){
            min = 0;
            hours++;
        }
        console.log(hours,min,sec);   
    }
    
    
}
const x = setInterval(stopWatch,1000);

