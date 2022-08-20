// view-timer-section veriable 
let viewTimerSection = document.getElementById("view-timer-section");
let timeIn_hrs = document.getElementById("hrs");
let timeIn_min = document.getElementById("min");
let timeIn_sec = document.getElementById("sec");
let btnStart = document.getElementById("btn-start");
let btnStop = document.getElementById("btn-stop");
let btnBackToSetTimer = document.getElementById("btn-back-set");

// set-timer-section veriable
let setTimerSection = document.getElementById("set-timer-section");
let inputIn_hours = document.getElementById("input-hour");
let inputIn_minute = document.getElementById("input-minute");
let inputIn_seconds = document.getElementById("input-seconds");

let btnSetTimer = document.getElementById("btn-set");

let setTimerHeadingText = document.getElementById("h1-timer");

function toggleSection(){
    if(setTimerSection.hasAttribute("name")){
        viewTimerSection.style.display = "flex";
        setTimerSection.style.display = "none";
        setTimerSection.removeAttribute("name");
    }else{
        viewTimerSection.style.display = "none";
        setTimerSection.style.display = "flex";
        setTimerSection.setAttribute("name", "true");
        
    }
}

btnSetTimer.addEventListener("click", toggleSection);

btnBackToSetTimer.addEventListener("click",toggleSection);
