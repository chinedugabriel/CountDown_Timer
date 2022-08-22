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

    btnBackToSetTimer.addEventListener("click", ()=>{
        toggleSection();
        inputIn_seconds.value = "";

        inputIn_minute.value = "";
        
        inputIn_hours.value = "";

    });

    btnSetTimer.addEventListener("click", toggleSection);

    
function startAction(){

    function countTime(){
        timeIn_sec.innerHTML = inputIn_seconds.value;
        timeIn_min.innerHTML = inputIn_minute.value;
        timeIn_hrs.innerHTML = inputIn_hours.value;


            
            let result_seconds = inputIn_seconds.value; 
            
            if (result_seconds == 0){
                inputIn_seconds.value = 0;
                
                if(inputIn_minute.value >=1 ){

                    timeIn_min.innerHTML = --inputIn_minute.value;

                    inputIn_seconds.value = 59;
                }else{
                    if(inputIn_hours.value >= 1){
                        timeIn_hrs.innerHTML = --inputIn_hours.value;

                        inputIn_minute.value = 60;
                        timeIn_min.innerHTML = inputIn_minute.value;
                    }else{
                        
                        if(inputIn_hours.value == 0 && inputIn_minute.value == 0 && inputIn_seconds.value ==0){

                            clearInterval(interv);

                            inputIn_seconds.value = 0;
                            timeIn_sec.innerHTML =  0 + "0";

                            inputIn_minute.value = 0;
                            timeIn_min.innerHTML =  0 + "0";
                            
                            inputIn_hours.value = 0 ;
                            timeIn_hrs.innerHTML =  0 + "0";
                            
                        }

                    }
                }

            }else{
                timeIn_sec.innerHTML = --inputIn_seconds.value;

            }

    
        
    }
    let interv = setInterval(countTime, 1000);

    btnStop.addEventListener("click", ()=>{
        clearInterval(interv);
    });
    btnStart.addEventListener("click", startAction);

}

btnSetTimer.addEventListener("click", startAction);
    // inputIn_seconds.value = --inputIn_minute.value;

    // if( Number(inputIn_hours.value) == 0 || Number(inputIn_minute.value) == 0 || Number(inputIn_seconds) == 0 ){

    //     setTimerWarningText.innerHTML = "Please input a number";
    //     setTimerWarningText.style.display = "block";
    //     setTimerWarningText.style.color = "white";
    //     setTimeout(()=>{
    //         setTimerWarningText.style.display = "none";
    //     },2000);
        
    // }else{
    //     btnSetTimer.addEventListener("click", toggleSection);
        
    // }

/*
on the seconds 
check if the value is not set let the value be 59 or use the value set in the input and reduce it by -1 till it (the seconds ) becomes 0 and then remove -1 from the minutes, this process should repeat till minute == 0 and then remove -1 from hours till it (hours) gets to "0" and check if minutes is == 0 
*/ 