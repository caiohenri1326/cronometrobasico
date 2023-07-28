let intervalID;
let TotalMiliseconds = 0;

function play(){
    intervalID = setInterval(updateTime, 100);
}

function pause(){
    clearInterval(intervalID);
}

function refresh(){
    clearInterval(intervalID);
    TotalMiliseconds = 0;
    updateDisplay();
}

function updateTime(){
    TotalMiliseconds += 100;
    updateDisplay();
}

function updateDisplay(){
    const timesSpan = document.getElementById('timer');
    const min = Math.floor(TotalMiliseconds / 60000).toString().padStart(2, '0');
    const sec = Math.floor((TotalMiliseconds % 60000) / 1000).toString().padStart(2, '0');
    const milisec = Math.floor(TotalMiliseconds % 1000).toString().padStart(3, '0');
    timesSpan.innerHTML = `${min}:${sec}:${milisec}`;
}