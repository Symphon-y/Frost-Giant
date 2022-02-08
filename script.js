// Countdown Timer | Variables
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var timerButton = document.getElementById("start")

 
// Countdown Timer 
function countDownTimer(hours, minutes, seconds){
    // Variables
    var hoursIsNumber = typeof hours;
    var minutesIsNumber = typeof minutes;
    var secondsIsNumber = typeof seconds;
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
var oneRepMax = document.getElementById("pBuilderOneRepMax")
var dayOfWeek = document.getElementById("pBuilderDayOfWeek")
var i = 0
var programArray = []

// Program Builder
function programBuilder(exercise, onerepmax, dayofweek){
  
  
  var lifts = {}
    lifts['Exercise'] = exercise;
    lifts['One Rep Max'] = onerepmax;
    lifts['Day Of The Week'] = dayofweek;

  programArray[i] = lifts;
  i++
  console.log(programArray);
};

// Program Builder | Schedule Display
function programScheduleDisplay(){

};



function callProgramBuilder(){
  programBuilder(exerciseName, oneRepMax, dayOfWeek);
  
}
function updateOneRepMax(e) {
  oneRepMax = Number(e.target.value);
};
function updateExerciseName(e) {
  exerciseName = e.target.value;
};
function updateDayOfWeek(e){
  dayOfWeek = e.target.value;
};

// Event Listeners

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
  pBuilderSubmit.addEventListener("click", callProgramBuilder);

