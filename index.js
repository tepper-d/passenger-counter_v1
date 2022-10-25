/*
CIS 124: Intro to Javascript
Passenger Counter (Scrimba)
https://scrimba.com/learn/learnjavascript/setting-up-our-javascript-file-co8c8428fa88013351d68c967
Dominique Tepper, 15OCT2022
*/

// Step 3. Setup JS file. Tepper, 15OCT2022
//document.getElementByID("count-el").innerText = 0;

/* Step 6. Reassigning and incrementing
let count = 5;
count++;
console.log(count); */

// Step 7. Onclick event listener. Tepper, 15OCT2022
// Step 13. Display the count.
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count = 0; // 7.1 Initialize count as 0

console.log(saveEl);

// 7.3 Increment count var when button is clicked
function increment() {
    count++;
    countEl.textContent = count;
}

// Step 14. Set count to 0. Tepper, 15OCT2022.

function clearCount() {
    count = 0;
    countEl.textContent = count;
}

// Step 13. Create a Save button and save() function

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(count);
    
    clearCount(); // resets the people entered counter
}

save(); // calls the save() function


/*// Step 9. Using functions to write less code. Tepper, 15OCT2022.
// Challenge: Setting up a race.

function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}

// 9.1 Race 1 setup
console.log("Race 1 starting in...")
countdown();

// 9.2 Race 2 setup
console.log("Race 2 starting in...")
countdown();

// Step 10. Write first function
// 10.1 create a function that logs the number 42 to the console
function myLog() {
    console.log("My log: " + 42);
}

// 10.2 call the function
myLog();

// Step 11. A function the logs the sum
// Challenge: Lap times sum
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// 11.1 function that logs all lap times
function logLapTime() {
    let totalTime = lap1 + lap2 + lap3;
    console.log("The total lap time is: " + totalTime);
}

logLapTime();

// Step 12. Function that increments
let lapsCompleted = 0;

// 12.1 lapsCompleted + 1 each time function is called
function lapsIncrement() {
    lapsCompleted++;
}

// 12.2 call the increment function 3 times
lapsIncrement();
lapsIncrement();
lapsIncrement();

console.log("Total laps completed: " + lapsCompleted);*/


/*// Step 6 Challenge: console.log after each step

// 6.1 Create var bonusPoints. Init @ 50. Increase to 100
let bonusPoints = 50;
console.log(bonusPoints); //50

bonusPoints += 50;
console.log(bonusPoints); //100

// 6.2 bonusPoints decrease to 25, then increase to 70
bonusPoints -= 75;
console.log(bonusPoints); //25

bonusPoints += 45;
console.log(bonusPoints); //70

/*
// Step 4. Write the first JS var. Tepper, 15OCT2022
// Step 5. Basic mathematical operations. Tepper, 15OCT2022
let firstBatch = 5;
let secondBatch = 7;

let count = firstBatch + secondBatch;

console.log(count);

// 4.1 Create a variable named myAge and set its value to student's age
// 5.1 Create vars myAge and humanDogRatio
let myAge = 35;
let humanDogRatio = 7;

// 4.2 Log the myAge variable to the console
console.log(myAge);

// 5.2 myAge * humanDogRatio; store in var myDogAge
let myDogAge = myAge * humanDogRatio;

// 5.3 Log myDogAge to the console
console.log(myDogAge);
*/
