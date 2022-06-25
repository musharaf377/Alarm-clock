
const selectMenu = document.querySelectorAll("select");
const currentTime = document.getElementById('time');
const setAlarmBtn = document.getElementById("set-btn");
const timeWrapper = document.querySelector(".time-wrapper");

let alarmTime = "", isAlarmSet = false;
let ringtone = new Audio("assets/ringtone.mp3")

for(let i = 1; i <= 12 ; i++ ){
  hour = i < 10 ? "0" + i : i;

  let option = `<option value="${hour}">${hour}</option>`;

  
  selectMenu[0].insertAdjacentHTML("beforeend", option);
}

for(let i = 0; i <= 59 ; i++ ){
  munite = i < 10 ? "0" + i : i;

  let option = `<option value="${munite}">${munite}</option>`;

  
  selectMenu[1].insertAdjacentHTML("beforeend", option);
}

for(let i = 1; i <= 2 ; i++ ){
  ampm = i == 1 ? "AM" : "PM";

  let option = `<option value="${ampm}">${ampm}</option>`;
  
  selectMenu[2].insertAdjacentHTML("beforeend", option);
}


setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  
  let ampmText = "AM";

  if(h >= 12){
    h = h - 12;
    ampmText = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
   
  currentTime.innerText = `${h}:${m}:${s} ${ampmText}`;

  let current_time = `${h}:${m} ${ampmText}` ;
  

  if(current_time == alarmTime ){
    ringtone.play();
    ringtone.loop = true;
  }
  
}, 1000);


setAlarmBtn.addEventListener('click', setAlram);
function setAlram(){

  if(isAlarmSet){
    alarmTime = "";
    ringtone.pause();
    timeWrapper.classList.remove('disable');
    setAlarmBtn.innerText = 'Set Alarm';
    return isAlarmSet = false;

  }


  let timeSet = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

  isAlarmSet = true;
  if(timeSet.includes("Hour") || timeSet.includes("Munite") || timeSet.includes("AM/PM")){
    alert("please insert your time");
  }
   alarmTime = timeSet;

  timeWrapper.classList.add('disable');
  setAlarmBtn.innerText = 'Clear Alarm';
}
