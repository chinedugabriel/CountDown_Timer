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

let setTimerWarningText = document.getElementById("p-timer");

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

    btnBackToSetTimer.addEventListener("click",toggleSection);


    
function setAction(){

    // inputIn_seconds.value = --inputIn_minute.value;

    if(inputIn_hours.value == "" || inputIn_minute.value == "" || inputIn_seconds == ""){
        setTimerWarningText.innerHTML = "Please input a number";
        setTimerWarningText.style.display = "block";
        setTimerWarningText.style.color = "white";
        setTimeout(()=>{
            setTimerWarningText.style.display = "none";
        },2000);
    }else{
        btnSetTimer.addEventListener("click", toggleSection);
        
        if( inputIn_seconds.value == ""){
    
            timeIn_sec.innerHTML = 59;
    
            console.log("stage 1 is working");
            
        }else{
            console.log("Else is working");
            
            timeIn_sec.innerHTML = inputIn_seconds.value;
    
            let result_seconds = timeIn_sec.innerHTML; 
            
            
            // if(result_seconds == 0){
            //     console.log("stage 2 is working");
    
            //     timeIn_sec.innerHTML = "00";
                
            //     if(inputIn_minute.value == 0){
    
            //         inputIn_minute.value = 59;
    
            //     }else{
    
            //         result_minutes = --inputIn_minute.value;
            //     }
    
            // }else{
            //     timeIn_sec.innerHTML = --inputIn_seconds.value;
            // }
        }
        
    
        // console.log(inputIn_seconds.value == "")

    }
}

btnSetTimer.addEventListener("click", setAction);
