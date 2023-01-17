let start = document.querySelector('.start');
let stopb = document.querySelector('.stop');
let remember = document.querySelector('.remember');
let reset = document.querySelector('.reset');
let stopwatch = document.querySelector('.stopwatch');
let blockSave = document.querySelector('.saveTime');
let int;
start.addEventListener('click', work)
stopb.addEventListener('click', spotf)
remember.addEventListener('click', rememberf)
reset.addEventListener('click', resetf)
let hours = 0;
let minets = 0;
let seconds = 0;
function work() {
    start.disabled = true;
    int = setInterval(()=>{
        if(seconds == 59) {
            minets++;
            seconds = 0;
        } else if(minets == 59){
            hours++;
            minets = 0;
        } else {
            seconds++
        }
        if(seconds >=10) stopwatch.innerHTML = `0${hours}:0${minets}:${seconds}`
            else if (hours >= 10) stopwatch.innerHTML = `${hours}:0${minets}:0${seconds}`
            else if (minets >= 10) stopwatch.innerHTML = `0${hours}:${minets}:0${seconds}`
            else if (seconds >= 10 || minets >= 10) stopwatch.innerHTML = `0${hours}:${minets}:${seconds}`
            else stopwatch.innerHTML = `0${hours}:0${minets}:0${seconds}`
    }, 1000)
    int()
}
function spotf() {
    start.disabled = false;
    clearInterval(int)
}
function rememberf() {
    if(seconds >=10) blockSave.innerHTML += `0${hours}:0${minets}:${seconds} <br>`
        else if (hours >= 10) blockSave.innerHTML += `${hours}:0${minets}:0${seconds}`
        else if (minets >= 10) blockSave.innerHTML += `0${hours}:${minets}:0${seconds} <br>`
        else if (seconds >= 10 || minets >= 10) blockSave.innerHTML += `0${hours}:${minets}:${seconds} <br>`
        else blockSave.innerHTML += `0${hours}:0${minets}:0${seconds} <br>`
}
function resetf(){
    start.disabled = false;
    clearInterval(int)
    hours = 0;
    minets = 0;
    seconds = 0;
    stopwatch.innerHTML = `0${hours}:0${minets}:0${seconds}`
    blockSave.innerHTML = ''
}