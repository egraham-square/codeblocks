/* ______________________ PART 1 ______________________
Comments
*/

/*
1.1
Comment out the text below using single-line comments (//)
*/

"Comment me out please!"

/*
1.2
Comment out the text below using multiline-line comments (like this text!)
*/

"Also comment me out please!"

/*
1.3
Comment out the text below using multiline-line comments ()
*/

"Please"
"comment me"
"out too!"

/*
1.4
Change the single-line comments below to a multiline comment
*/

// Change
// me to
// multiline!

/*
1.5
Change the multiline comment below to a single-line comment
*/

/* Change me to a single-line comment! */

/*
1.6
Write out "Hello World!" and then comment it out using single line comments
*/

/*
1.7
Write out "Goodbye World!" and then comment it out using multiline comments
*/

/*
1.8
Uncomment the text below
*/

// "Uncomment me!!"

/*
1.9
Uncomment the text below
*/

/*
"Also uncomment me!!"
*/


/*
1.10 Bonus
Replit works with keyboard shortcuts to comment/uncomment

Find the shortcut here and practice it on the comment below!
https://docs.replit.com/replit-workspace/keyboard-shortcuts
*/

// "Toggle back and forth! So speedy!"

/* ______________________ PART 2 ______________________
Declaring Variables
*/

/*
2.1
Rename the variable below from "city" to "country"
*/
var city;

// Uncomment below and run your code to check your answer
// checkAnswer('2.1');

/*
2.2
Add a semicolon at the end of the variable declaration below
Note: Javascript doesn't strictly require semicolons at the end of code, but it's best practice!
*/
var continent

/*
2.3
Declare a variable below named "planet"
*/

// Uncomment below and run your code to check your answer
// checkAnswer('2.3');

/*
2.4
Declare a variable below named "galaxy"
*/

// checkAnswer('2.4');

/*
2.5
Declare a variable below named "numberOfContinents"
*/

// checkAnswer('2.5');

/*
2.6
Declare a variable below that stores the number of countries. Give it an appropriate name.
*

// checkAnswer('2.5');

/* ______________________ PART 3 ______________________
Assigning Variables
*/

/*
3.1
Change the value of the myCity variable to city you live in
*/
var myCity
myCity = "Zootopia";

// checkAnswer('3.1');

/*
3.2
Change the value of the cityPopulation variable to reflect the population of your city (you can look it up or just guess)
*/
var cityPopulation
cityPopulation = 293531;

// checkAnswer('3.2');

/*
3.3
Assign the myState variable to the state you live in
*/
var myState
myState;

// checkAnswer('3.3');

/*
3.4
Assign the stateFounded variable to the year that your state became a state (you can look it up or just guess)
*/
var stateFounded
stateFounded;

// checkAnswer('3.4');

/*
3.5
On a separate line, set the myCountry variable equal to the country you live in
*/
var myCountry

// checkAnswer('3.5');

/*
3.6
On a separate line, set the myContinent variable equal to the continent you live in
*/
var myContinent

// checkAnswer('3.6');

/*
3.7
Create a variable called myPlanet.
On a separate line, set the myPlanet variable equal to the planet you live on
*/


// checkAnswer('3.7');

/*
3.8
Create a variable called numberPlanets.
On a separate line, set the numberPlanets variable equal to the number of planets in our solar system (sorry pluto, you're out)
*/

// checkAnswer('3.8');

/* ______________________ PART 4 ______________________
Assigning Variables to other variables
*/

/*
4.1
Change the value of myGalaxy to the Milky Way
*/
var myGalaxy = "Andromeda"
var yourGalaxy;
yourGalaxy = myGalaxy;

// checkAnswer('4.1');

/*
4.2
We live in the same solar system, so set yourSolarSystem equal to mySolarSystem.
*/
var mySolarSystem = "Sol"
var yourSolarSystem;

// checkAnswer('4.2');

/*
4.3
North Dakota became a state in 1889. South Dakota, Montana, and Washington also became states 1889.

Instead of repeating 1889 for those states, we could just say they were founded whenever North Dakota was.

Set southDakotaFounded, montanaFounded, and washingtonFounded each equal to northDakotaFounded (instead of 1889).
*/
var northDakotaFounded;
var southDakotaFounded;
var montanaFounded;
var washingtonFounded;

northDakotaFounded = 1889;

southDakotaFounded = 1889;
montanaFounded = 1889;
washingtonFounded = 1889;

// checkAnswer('4.3');

/*
4.4
Sacremento is the capital of California! Los Angeles and San Francisco are two other large cities in California.

We could say that Los Angeles and San Francisco are in whatever state Sacremento is in.

Below the sacramentoState assignment, set losAngelesState and sanFranciscoState equal to sacramentoState.
*/
var sacramentoState;
var losAngelesState;
var sanFranciscoState;

sacramentoState = "California";

// checkAnswer('4.4');

/*
4.5
Earth is inside of the Milky Way Galaxy. So is Mars! We could say that Mars is in whatever Galaxy Earth is in.

Create a var named marsGalaxy and (on a separate line) assign it to earthGalaxy.
*/
var earthGalaxy
earthGalaxy = "Milky Way"

// checkAnswer('4.5');

/* ______________________ STOP HERE ______________________
Below this is a bunch of stuff you don't need to worry about yet!
*/
function isDefined(variableName) {
    try {
        eval(variableName);
        return true;
    } catch (e) {
        if (e.name == 'ReferenceError') {
            return false;
        }
    }
}

function equals(actualValue, expectedValue) {
    if (Array.isArray(expectedValue)) {
        return JSON.stringify(expectedValue) === JSON.stringify(actualValue);
    }
    return actualValue == expectedValue;
}

function assertEquals(actualValue, expectedValue) {
    if (!equals(actualValue, expectedValue)) {
        throw new Error('Expected: ' + expectedValue + ', but got: ' + actualValue);
    }
}

function variableEqualsValue(variableName, expectedValue) {
    if (isDefined(variableName) && equals(eval(variableName), expectedValue)) {
        return true;
    }
    return false;
}

function checkVariable(variableName, expectedValue) {
    var variableValue = eval(variableName);
    if (!variableEqualsValue(variableName, expectedValue)) {
        throw new Error(
            'Expected ' +
            variableName +
            ' to be: ' +
            expectedValue +
            ' but was: ' +
            variableValue
        );
    }
    console.log(variableName + ' equals: ' + variableValue);
}

function isInitializedVariable(variableName) {
    var variableValue = eval(variableName);

    if (!isDefined(variableName) || variableValue == null) {
        throw new Error('Expected ' + variableName + ' to be initialized.');
    }
    console.log(variableName + ' equals: ' + variableValue);
}

function isUninitializedVariable(variableName) {
    if (!variableEqualsValue(variableName, null)) {
        throw new Error(
            'Expected ' + variableName + ' to be declared but uninitialized.'
        );
    }
    console.log(variableName + ' equals: ' + eval(variableName));
}

function trackProgress(exercise) {
    console.log(
        '❓ Done with exercise ' + exercise + '! Check your own work!❓\n\n'
    );
}

function checkAnswer(exercise) {
    switch (exercise) {
        case '1.1':
            checkVariable('', '');
            break;
        case '1.2':
            checkVariable('', '');
            break;
        case '1.3':
            checkVariable('', '');
            break;
        case '1.4':
            checkVariable('', '');
            break;
        case '1.5':
            checkVariable('', '');
            break;
        case '1.6':
            checkVariable('', '');
            break;
        case '1.7':
            checkVariable('', '');
            break;
        case '1.8':
            checkVariable('', '');
            break;
        case '2.1':
            isDefined('country');
            break;
        case '2.2':
            checkVariable('', '');
            break;
        case '2.3':
            isDefined('planet');
            break;
        case '2.4':
            isDefined('galaxy');
            break;
        case '2.5':
            isDefined('numberOfContinents');
            break;
        case '2.6':
            isDefined('numberOfContinents');
            break;
        case '2.7':
            checkVariable('', '');
            break;
        case '2.8':
            checkVariable('', '');
            break;
        case '3.1':
            isInitializedVariable('myCity');
            break;
        case '3.2':
            isInitializedVariable('cityPopulation');
            break;
        case '3.3':
            isInitializedVariable('myState');
            break;
        case '3.4':
            isInitializedVariable('stateFounded');
            break;
        case '3.5':
            isInitializedVariable('myCountry');
            break;
        case '3.6':
            isInitializedVariable('myContinent');
            break;
        case '3.7':
            isInitializedVariable('myPlanet');
            break;
        case '3.8':
            isInitializedVariable('numberPlanets');
            break;
        case '4.1':
            checkVariable('myGalaxy', 'Milky Way');
            checkVariable('yourGalaxy', 'Milky Way');
            break;
        case '4.2':
            isInitializedVariable('mySolarSystem');
            checkVariable('yourSolarSystem', mySolarSystem);
            break;
        case '4.3':
            checkVariable('northDakotaFounded', 1889);
            checkVariable('southDakotaFounded', 1889);
            checkVariable('montanaFounded', 1889);
            checkVariable('washingtonFounded', 1889);
            break;
        case '4.4':
            isInitializedVariable('sacramentoState');
            checkVariable('losAngelosState', sacramentoState);
            checkVariable('sanFranciscoState', sacramentoState);
            break;
        case '4.5':
            checkVariable('marsGalaxy', earthGalaxy);
            break;
        case '4.6':
            checkVariable('', '');
            break;
        case '4.7':
            checkVariable('', '');
            break;
        case '4.8':
            checkVariable('', '');
            break;
        default:
            throw new Error(exercise + ' does not have an answer key.');
    }
    console.log('✅ Passed exercise ' + exercise + '! ✅\n\n');
}