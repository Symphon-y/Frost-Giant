// Stop Watch Variables
let sWDisplay = document.getElementById("SWdisplay");
let sWseconds = 0
let minutesDisplay = 0;
let hoursDisplay = 0;
let secondsDisplay = seconds;
let intervalIdStopWatch;
var SWStartButton = document.getElementById("startSW")
var SWStopButton = document.getElementById("stopSW")
var SWResetButton = document.getElementById("resetSW")

// Stop Watch
function stopwatch(){

    intervalIdStopWatch = setInterval(countTime, 1000)
};

function countTime(){

  sWseconds++

    if (sWseconds < 59){
      secondsDisplay = sWseconds;
    }

    if (sWseconds > 59){
      secondsDisplay = sWseconds % 60
    }
    
    if (sWseconds > 119 && secondsDisplay === 0){
      minutesDisplay++
    }

    if (sWseconds > 119 && minutesDisplay === 60){
      minutesDisplay = 0
    }

    if (sWseconds > 119 && minutesDisplay === 0 && secondsDisplay === 0){
      hoursDisplay++
    }
    sWDisplay.textContent = `Hours: ${hoursDisplay} Minutes: ${minutesDisplay} Seconds: ${secondsDisplay}`;
  }

function stopTimer(){
  if (intervalIdStopWatch){
    clearInterval(intervalIdStopWatch)
  }
};

function resetTimer(){
  sWseconds = 0
  minutesDisplay = 0;
  hoursDisplay = 0;
  sWDisplay.textContent = `Hours: 0 Minutes: 0 Seconds: 0`;
};

// Countdown Timer | Variables
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var timerButton = document.getElementById("start")
const todaysDate = new Date ();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let todaysDayOfWeek = weekday[todaysDate.getDay()];
let timerTrigger = false;
var dayOfTheWeekHtml = document.getElementById("dayOfTheWeek")
dayOfTheWeekHtml.textContent = `Today is ${todaysDayOfWeek}`;
var ul = document.getElementById("ScheduledLifts");

// Countdown Timer 
function countDownTimer(hours, minutes, seconds){
    // Variables
    timerTrigger = true;
    var inputTimeInSeconds = ((hours * 3600) + (minutes * 60) + seconds);
    var secondsCounter = 59;
    var minutesCounter = 59;
    
  
      // Subtract one second at a time from the user input
      function decrementTime(inputTimeInSeconds){
        // Variables
        var hoursConverted = Math.floor(inputTimeInSeconds / 3600);
        var minutesConverted = Math.floor((inputTimeInSeconds - (hours * 3600)) / 60);
        var secondsConverted = inputTimeInSeconds - (hours * 3600) - (minutes * 60);
        var displayCountdown = document.getElementById("display");

        // Subtract one second from total and wait for one second before running the function again
        setTimeout(function(){
          inputTimeInSeconds-= 1;
          
            if (secondsConverted < 0 ){
              secondsConverted = secondsCounter
              secondsCounter-= 1
            };
  
            if (secondsCounter < 0){
              secondsCounter = 59
            };
  
            if (minutesConverted < 0){
              minutesConverted = minutesCounter;
            };
  
            if (minutesConverted === minutesCounter && secondsCounter === 59){
              minutesCounter-= 1;
            };
  
            if (minutesCounter < 0){
              minutesCounter = 59;
            };
  
            if (hoursConverted < 0){
              hoursConverted = 0
            };
          
        
          // console.log(`Time Remaining : ${hoursConverted} hours ${minutesConverted} minutes and ${secondsConverted} seconds.`);
          displayCountdown.textContent = `Time Remaining : ${hoursConverted} hours ${minutesConverted} minutes and ${secondsConverted} seconds.`;
          
          if (inputTimeInSeconds < 0){
            timerTrigger = false;
            return;
          } else if (inputTimeInSeconds >= 0){
          return(decrementTime(inputTimeInSeconds));
          }
        }, 1000)
      };
  
    // Call Internal function until user input is zero
    if (inputTimeInSeconds > 0){
      return(decrementTime(inputTimeInSeconds))
    };
    
  };

  function updateHoursValue(e) {
    hours = Number(e.target.value);
  };
  function updateMinutesValue(e) {
    minutes = Number(e.target.value);
  };
  function updateSecondsValue(e) {
    seconds = Number(e.target.value);
  };

function callTheTimer(){
  if (timerTrigger === true){
    return;
  }
countDownTimer(hours, minutes, seconds);
};

// Barbell Plate Calculator | Variables
var barbellWeight = document.getElementById("BBWeight");
var targetWeight = document.getElementById("targetWeight");
var calculatePlates = document.getElementById("plateCalc");
var plateCalcDisplay = document.getElementById("pCalcDisplay");
var displayFortyFive = document.getElementById("fortyFive");
var displayTwentyFive = document.getElementById("twentyFive");
var displayTen = document.getElementById("ten");
var displayFive = document.getElementById("five");
var displayTwoAndHalf = document.getElementById("twoAndHalf");

// Barbell Plate Calculator
function barbellPlateCalculator(targetWeight, barWeight){
  
  var weightToAdd = targetWeight - barWeight;

  var fortyFives = Math.floor(weightToAdd/(2*45));
  var twentyFives = Math.floor((weightToAdd - (fortyFives * 45 * 2)) / (2*25));
  var tens = Math.floor((weightToAdd - ((fortyFives * 45 * 2)) - ((twentyFives * 25 * 2))) / (2*10));
  var fives = Math.floor((weightToAdd - ((fortyFives * 45 * 2)) - ((twentyFives * 25 * 2)) - ((tens * 10 * 2)))/ (2*5));
  var twoAndHalf = Math.floor((weightToAdd - ((fortyFives * 45 * 2)) - ((twentyFives * 25 * 2)) - ((tens * 10 * 2)) - ((fives * 5 * 2))) / (2*2.5)); 
  
  displayFortyFive.textContent = `45s: ${fortyFives}`;
  displayTwentyFive.textContent = `25s: ${twentyFives}`;
  displayTen.textContent = `10s: ${tens}`;
  displayFive.textContent = `5s: ${fives}`;
  displayTwoAndHalf.textContent = `2.5s: ${twoAndHalf}`;
};

  function updateBarbelWeightValue(e) {
    barbellWeight = Number(e.target.value);
  };
  function updateTargetWeightValue(e) {
    targetWeight = Number(e.target.value);
  };
  function calculatePlatesOnBar(){
    barbellPlateCalculator(targetWeight, barbellWeight);
  };

// Program Builder | Variables
var exerciseName = document.getElementById("exerciseName");
var oneRepMax = document.getElementById("pBuilderOneRepMax");
var dayOfWeek = document.getElementById("pBuilderDayOfWeek");
var typeOfMvmnt = document.getElementById("typeOfMvmnt");
var i = 0
var programArray = []
var programArrayForTargetLifts = [];

// Program Builder | Input Information 
function programBuilder(exercise, onerepmax, dayofweek, typeOfMvmnt){

  var lifts = {}
    lifts['Exercise'] = exercise;
    lifts['One Rep Max'] = onerepmax;
    lifts['Day Of The Week'] = dayofweek;
    lifts['Type of Movement'] = typeOfMvmnt;

  programArray[i] = lifts;
  i++
  programScheduleDisplay()
};

function updateOneRepMax(e){
  oneRepMax = Number(e.target.value);
};
function updateExerciseName(e){
  exerciseName = e.target.value;
};
function updateDayOfWeek(e){
  dayOfWeek = e.target.value;
};
function updateTypeOfMvmnt(e){
  typeOfMvmnt = e.target.value;
};
function callProgramBuilder(){
  programBuilder(exerciseName, oneRepMax, dayOfWeek, typeOfMvmnt);
  calculateBaselineTargets(programArray);
};


// Program Builder | Schedule Display | Variables
var sunDisplay = document.getElementById("sunDisplay");
var monDisplay = document.getElementById("monDisplay");
var tueDisplay = document.getElementById("tueDisplay");
var wedDisplay = document.getElementById("wedDisplay");
var thuDisplay = document.getElementById("thuDisplay");
var friDisplay = document.getElementById("friDisplay");
var satDisplay = document.getElementById("satDisplay");
var scheduledLifts = document.getElementById("Scheduledlifts");
var actualLifts = document.getElementById("Actuallifts");



// Program Builder | Schedule Display
function programScheduleDisplay(){
  var sundayTextDisplay = [];
  var mondayTextDisplay = [];
  var tuesdayTextDisplay = [];
  var wednesdayTextDisplay = [];
  var thursdayTextDisplay = [];
  var fridayTextDisplay = [];
  var saturdayTextDisplay = [];

  for (j = 0; j < programArray.length; j++){
    if (programArray[j]['Day Of The Week'] === "Sunday"){
      sundayTextDisplay.push(programArray[j]['Exercise'])
      var sundayOutput = sundayTextDisplay.join(' ');
      sunDisplay.textContent = `Sunday: ${sundayOutput}`;
    };

    if (programArray[j]['Day Of The Week'] === "Monday"){
      mondayTextDisplay.push(programArray[j]['Exercise'])
      var mondayOutput = mondayTextDisplay.join(' ');
      monDisplay.textContent = `Monday: ${mondayOutput}`;
    };

    if (programArray[j]['Day Of The Week'] === "Tuesday"){
      tuesdayTextDisplay.push(programArray[j]['Exercise'])
      var tuesdayOutput = tuesdayTextDisplay.join(' ');
      tueDisplay.textContent = `Tuesday: ${tuesdayOutput}`;
    };

    if (programArray[j]['Day Of The Week'] === "Wednesday"){
      wednesdayTextDisplay.push(programArray[j]['Exercise'])
      var wednesdayOutput = wednesdayTextDisplay.join(' ');
      wedDisplay.textContent = `Wednesday: ${wednesdayOutput}`;
    };

    if (programArray[j]['Day Of The Week'] === "Thursday"){
      thursdayTextDisplay.push(programArray[j]['Exercise'])
      var thursdayOutput = thursdayTextDisplay.join(' ');
      thuDisplay.textContent = `Thursday: ${thursdayOutput}`;
    };

    if (programArray[j]['Day Of The Week'] === "Friday"){
      fridayTextDisplay.push(programArray[j]['Exercise'])
      var fridayOutput = fridayTextDisplay.join(' ');
      friDisplay.textContent = `Friday: ${fridayOutput}`;
    };

    if (programArray[j]['Day Of The Week'] === "Saturday"){
      saturdayTextDisplay.push(programArray[j]['Exercise'])
      var saturdayOutput = saturdayTextDisplay.join(' ');
      satDisplay.textContent = `Saturday: ${saturdayOutput}`;
    } 
  }
};

// Lifts Calculator | Variables
var calculatedLifts = {};

// Lifts Calculator
function calculateBaselineTargets(array){
  
  var targetLiftArray = []
  for (i = 0; i < programArray.length; i++){
    var liftName = programArray[i]['Exercise'];
    var heaviestSet = programArray[i]['One Rep Max'] * 0.9;
    var middleSet = programArray[i]['One Rep Max'] * 0.8;
    var lightestSet = programArray[i]['One Rep Max'] * 0.7;
    var heaivestWarmUp = heaviestSet * 0.9;
    var middleWarmUp = heaviestSet * 0.75;
    var lightestWarmUp = heaviestSet * 0.6;
    

    calculatedLifts = {
        'Lift': liftName,
        'Warmup 1': lightestWarmUp,
        'Warmup 2': middleWarmUp,
        'Warmup 3': heaivestWarmUp,
        'Heaviest Set': heaviestSet,
        'Middle Set':middleSet,
        'Lightest Set':lightestSet,
      }

    targetLiftArray.push(calculatedLifts);
  }
  console.log(targetLiftArray);
};


// Event Listeners

  // Stop Watch
  SWStartButton.addEventListener("click", stopwatch);
  SWStopButton.addEventListener("click", stopTimer);
  SWResetButton.addEventListener("click", resetTimer);

  // Rest Timer
  hours.addEventListener("change", updateHoursValue);
  minutes.addEventListener("change",updateMinutesValue);
  seconds.addEventListener("change", updateSecondsValue);
  timerButton.addEventListener("click", callTheTimer);

  // Plate Calculator
  barbellWeight.addEventListener("change", updateBarbelWeightValue);
  targetWeight.addEventListener("change", updateTargetWeightValue);
  calculatePlates.addEventListener("click", calculatePlatesOnBar);

  // Program Builder
  dayOfWeek.addEventListener("change", updateDayOfWeek);
  oneRepMax.addEventListener("change", updateOneRepMax);
  exerciseName.addEventListener("change", updateExerciseName);
  typeOfMvmnt.addEventListener("change", updateTypeOfMvmnt);
  pBuilderSubmit.addEventListener("click", callProgramBuilder);
  
  

  
