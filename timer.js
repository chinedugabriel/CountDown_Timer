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

let setTimerWarningText = document.getElementById("p-timer");//this represents the p tag

function toggleSection(){
    // this function toggles the view between input time section and view countdown section
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

function viewMessage(){   
    // this function toggles the <p> tag that is used for alerting the user if the input is empty    
setTimerWarningText.innerHTML = "Please input a number";

setTimerWarningText.style.display = "block";

setTimerWarningText.style.color = "white";
setTimeout(()=>{
    // this removes the alert after 2seconds
    setTimerWarningText.style.display = "none";
},2000);
}

btnBackToSetTimer.addEventListener("click", ()=>{
        toggleSection();
        inputIn_seconds.value = "";

        inputIn_minute.value = "";
        
        inputIn_hours.value = "";

        viewMessage();// it calls the alert tag

});
    // this event listener calls the toggleSection above
    btnSetTimer.addEventListener("click", toggleSection);

    
function startAction(){

    function countTime(){
        // this function is responsible for the count down
        
        //validate to check the input value so it could mirror the input value into the display countdown view 
        inputIn_seconds.value == 0 ? timeIn_sec.innerHTML = 0+"0": timeIn_sec.innerHTML = inputIn_seconds.value ;

         inputIn_minute.value == 0 ? timeIn_min.innerHTML = 0 + "0": timeIn_min.innerHTML = inputIn_minute.value ;

         inputIn_hours.value == 0 ? timeIn_hrs.innerHTML = 0 + "0" : timeIn_hrs.innerHTML = inputIn_hours.value;

 
            
         // check if the seconds is == 0 
            if (inputIn_seconds.value == 0){
                // then check if minute input value is greater then 1
                if(inputIn_minute.value >=1 ){
                    // then remove -1 from minutes
                    timeIn_min.innerHTML = --inputIn_minute.value;
                    // then add 59 to seconds value to wait for 59seconds before removing -1 from minute again
                    inputIn_seconds.value = 59;
                }else{
                    // if the minutes value is == 0 then check if hours has a value >= 1
                    if(inputIn_hours.value >= 1){
                        timeIn_hrs.innerHTML = --inputIn_hours.value;
                        // remove -1 from hours and add 60minutes to minute
                        inputIn_minute.value = 60;
                        timeIn_min.innerHTML = inputIn_minute.value;
                    }else{
                        // if all input value for all is = 0
                        if(inputIn_hours.value == 0 && inputIn_minute.value == 0 && inputIn_seconds.value ==0){
                            // stop the loop
                            clearInterval(interv);

                            // set all values to 0

                            // inputIn_seconds.value = 0;
                            timeIn_sec.innerHTML =  0 + "0";

                            // inputIn_minute.value = 0;
                            timeIn_min.innerHTML =  0 + "0";
                            
                            // inputIn_hours.value = 0 ;
                            timeIn_hrs.innerHTML =  0 + "0";
                            
                        }

                    }
                }

            }else{
                // remove -1 from the actual value in the input second and show in the sec span view
                timeIn_sec.innerHTML = --inputIn_seconds.value;

            }

    
        
    }
    let interv = setInterval(countTime, 1000);// it calls the count function for every 1 second

    btnStop.addEventListener("click", ()=>{
        clearInterval(interv);
    });
    btnStart.addEventListener("click", startAction);

}

// this calls the start action function
btnSetTimer.addEventListener("click", startAction);





/*
on the seconds 
check if the value is not set let the value be 59 or use the value set in the input and reduce it by -1 till it (the seconds ) becomes 0 and then remove -1 from the minutes, this process should repeat till minute == 0 and then remove -1 from hours till it (hours) gets to "0" and check if hour == 0, minutes is == 0, sec == 0 then clearInterval() 
*/ 