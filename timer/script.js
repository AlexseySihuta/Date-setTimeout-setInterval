let seconds = document.querySelector('.seconds');
let minutes = document.querySelector('.minutes');
let hours = document.querySelector('.hours');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let resetButton = document.querySelector('.reset');
let timeBlock = document.querySelector('.showtime');
let setTime;
let valueSeconds = seconds.value;
let valueMinutes = minutes.value;
let valueHours = hours.value;

startButton.addEventListener('click', startFunction)
stopButton.addEventListener('click', stopFunction)
resetButton.addEventListener('click', resetFunction)
function startFunction() {
    if (valueSeconds == '' && valueMinutes == '' && valueHours == '') {
        valueSeconds = seconds.value;
        valueMinutes = minutes.value;
        valueHours = hours.value;
    }
    if(valueSeconds == '') valueSeconds = 0;
    if(valueMinutes == '')valueMinutes = 0;
    if(valueHours == '')valueHours = 0;
    setTime = setInterval(() => {
        if (valueSeconds == 0 && valueMinutes == 0 && valueHours == 0) timeBlock.innerHTML = `00:00:00`
        else if (valueSeconds < 10 && valueMinutes < 10 && valueHours < 10) timeBlock.innerHTML = `0${valueHours}:0${valueMinutes}:0${valueSeconds}`
        else if (valueSeconds >= 10 && valueMinutes >= 10 && valueHours >= 10) timeBlock.innerHTML = `${valueHours}:${valueMinutes}:${valueSeconds}`
        else if (valueSeconds < 10 && valueMinutes < 10 && valueHours == 0) timeBlock.innerHTML = `00:0${valueMinutes}:0${valueSeconds}`
        else if (valueSeconds < 10 && valueMinutes == 0 && valueHours < 10) timeBlock.innerHTML = `0${valueHours}:00:0${valueSeconds}`
        else if (valueSeconds == 0 && valueMinutes < 10 && valueHours < 10) timeBlock.innerHTML = `0${valueHours}:0${valueMinutes}:00`
        else if (valueSeconds < 10 && valueMinutes == 0 && valueHours == 0) timeBlock.innerHTML = `00:00:0${valueSeconds}`
        else if (valueSeconds == 0 && valueMinutes == 0 && valueHours < 10) timeBlock.innerHTML = `0${valueHours}:00:00`
        else if (valueSeconds >= 10 && valueMinutes >= 10 && valueHours == 0) timeBlock.innerHTML = `00:${valueMinutes}:${valueSeconds}`
        else if (valueSeconds >= 10 && valueMinutes == 10 && valueHours >= 10) timeBlock.innerHTML = `${valueHours}:00:${valueSeconds}`
        else if (valueSeconds == 0 && valueMinutes >= 10 && valueHours >= 10) timeBlock.innerHTML = `${valueHours}:${valueMinutes}:00`
        else if (valueSeconds == 0 && valueMinutes == 0 && valueHours >= 10) timeBlock.innerHTML = `${valueHours}:00:00`
        else if (valueSeconds >= 10 && valueMinutes == 0 && valueHours == 0) timeBlock.innerHTML = `00:00:${valueSeconds}`
        else if (valueSeconds >= 10 && valueMinutes < 10 && valueHours < 10) timeBlock.innerHTML = `0${valueHours}:0${valueMinutes}:${valueSeconds}`
        else if (valueSeconds < 10 && valueMinutes >= 10 && valueHours < 10) timeBlock.innerHTML = `0${valueHours}:${valueMinutes}:0${valueSeconds}`
        else if (valueSeconds < 10 && valueMinutes < 10 && valueHours >= 10) timeBlock.innerHTML = `${valueHours}:0${valueMinutes}:0${valueSeconds}`
        else if (valueSeconds < 10 && valueMinutes >= 10 && valueHours >= 10) timeBlock.innerHTML = `${valueHours}:${valueMinutes}:0${valueSeconds}`
        else if (valueSeconds >= 10 && valueMinutes >= 10 && valueHours < 10) timeBlock.innerHTML = `0${valueHours}:${valueMinutes}:${valueSeconds}`
        else if (valueSeconds >= 10 && valueMinutes < 10 && valueHours >= 10) timeBlock.innerHTML = `${valueHours}:0${valueMinutes}:${valueSeconds}`
        else timeBlock.innerHTML = `${valueHours}:${valueMinutes}:${valueSeconds}`
        if (valueSeconds == 0 && valueMinutes == 0 && valueHours == 0) {
            clearInterval(setTime)
            timeBlock.innerHTML = '00:00:00'
            startButton.disabled = false;
        } else if (valueSeconds > 0) {
            valueSeconds--;
        }
        else if (valueSeconds == 0 && valueMinutes > 0) {
            valueMinutes--;
            valueSeconds = 59;
        } else if (valueSeconds == 0 && valueMinutes == 0 && valueHours > 0) {
            valueHours--;
            valueMinutes = 59;
            valueSeconds = 59;
        }
    }, 400)
    startButton.disabled = true;
}
function stopFunction() {
    clearInterval(setTime)
    startButton.disabled = false;
}
function resetFunction() {
    seconds.value = '';
    minutes.value = '';
    hours.value = '';
    valueSeconds = 0;
    valueMinutes = 0;
    valueHours = 0;
    clearInterval(setTime)
    startButton.disabled = false;
    timeBlock.innerHTML = `00:00:00`
}