/* ______________________ PART 1 ______________________
Initializing variables
*/

/*
1.1
Rename the variable below to ourPlanet
*/
const ourPlanet = 'Earth';

// Uncomment below to check your answer
checkAnswer('1.1');

/*
1.2
Rewrite the code below so that the variable is initialized on the same line as the declaration.

Note: Having the declaration and initialization on the same line is generally better practice. Separating them can lead to messier code.
*/
let funCity = 'Zootopia';

checkAnswer('1.2');

/*
1.3
Even though it's messier, just for practice, rewrite the code below so that the variable initialization happens on a different line than the declaration.
*/
let numberCountries
numberCountries = 195;

checkAnswer('1.3');

/*
1.4
On the same line as the declaration, initialize myState to the state or region you live in.
*/
let myState = `Missouri`;

checkAnswer('1.4');

/*
1.5
Create a variable called myContinent and initialize it to the continent you live in
*/
let myContinent = 'North America'

checkAnswer('1.5');

/*
1.6
Create a variable called numberContinentsVisited and initialize it to the number of continents you've been to
*/
let numberContinentsVisited = 4

checkAnswer('1.6');

/*
1.7
- Create a variable called vacationCountry and set it equal to somewhere you've been or want to go
- Create variables called placeToRelax and placeToEatGoodFood and initialize them both equal to vacationCountry.
*/
let vacationCountry = `France`
let placeToRelax = vacationCountry
let placeToEatGoodFood = vacationCountry

checkAnswer('1.7');

/* ______________________ PART 2 ______________________
Uninitialized Variables
*/

/*
2.1
Make coolCity undefined by deleting the initialization.
*/
var coolCity;

checkAnswer('2.1');

/*
2.2
Make numberStates undefined by deleting the initialization.
*/
var numberStates;

checkAnswer('2.2');

/* ______________________ PART 3 ______________________
Case Sensitivity
*/

/*
3.1
Convert all of the variable names below to camelCase
*/
var myCity;
var yourCity;
var ourCity;
var theirCity;

checkAnswer('3.1');

/*
3.2
You live in a town up north and your friend lives in a city down south, but the town variable names aren't quite right!
- Fix the casing on NORTH_TOWN (in both places it occurs!)
- Fix the casing on SouthTown (in both places it occurs!)
*/
var northTown = 'Manhattan';
var southTown = 'Atlanta';

var myTown = northTown;
var friendTown = southTown;

checkAnswer('3.2');

/* ______________________ PART 4 ______________________
Var vs Const vs Let
*/

/*
4.1
- Note: don't uncomment checkAnswer until the end!
- On a separate line, reassign the variable below to 'New York', run the code and observe that there are no errors
- Change the let to a const, and re-run the code . Observe the error and explain it to your group!
- I guess we can't change a constant, so let's leave Atlanta as the best city (delete the reassignment)
- Check your answer!
*/
const bestCity = 'Atlanta';

checkAnswer('4.1');

/*
4.2
- Initialize each of the variables below to an appropriate value
- For any variables that represents something that could change, reassign them to something else (on a separate line)!
- Change every var to either let or const (choose wisely!)
*/

let coolestCountry;
coolestCountry = "Costa Rica"
const countryNorthOfUnitedStates = "Canada"

const cityBornIn = "Roswell"
let cityLiveIn;
cityLiveIn = "Atlanta"

checkAnswer('4.2');

/* ______________________ PART 5 ______________________
Bonus
*/

/*
5.1
You used to live in San Francisco. You currently you live in New York but you plan to move back to San Francisco soon!
- Update previousCity so that it has a value of "San Francisco" (hint: reuse an existing variable instead of rewriting "San Francisco")
- Update currentCity so that it has a value of "New York"
- Update futureCity so that it has a value of "San Francisco"

Bonus Bonus
- Is there another way you could still get futureCity to have a value of "San Francisco" using a different variable? Make the change!
*/

const westCoastCity = 'San Francisco';
const eastCoastCity = 'New York';

const previousCity = westCoastCity
const currentCity = eastCoastCity
const futureCity = westCoastCity;

checkAnswer('5.1');

/*
5.2
You used to love pizza, but sushi is your new favorite food.

- Create variables called oldFavFood and newFavFood and set them equal to your old and new favorite foods, respectively
- Using const, create a variable called dinner and initialize it to newFavFood
- Using let, create a variable called lunch and initialize it to newFavFood

Actually, that's too much sushi! Let's go back to our old favorite for lunch, pizza.
- Without changing the previous initalization, reassign lunch to oldFavFood

Note: This is just practice to show you what's possible in JavaScript. You can reassign values after they've already been assigned to a different value.
While it's good to know that this is an option, it should be used sparingly since reassigning variables can make code hard to follow.
*/

const oldFavFood = 'pizza';
const newFavFood = 'sushi';
const dinner = newFavFood;
let lunch = newFavFood;
lunch = oldFavFood;
checkAnswer('5.2');

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
            checkVariable('ourPlanet', 'Earth');
            break;
        case '1.2':
            checkVariable('funCity', 'Zootopia');
            break;
        case '1.3':
            checkVariable('numberCountries', 195);
            break;
        case '1.4':
            isInitializedVariable('myState');
            break;
        case '1.5':
            isInitializedVariable('myContinent');
            break;
        case '1.6':
            isInitializedVariable('numberContinentsVisited');
            break;
        case '1.7':
            checkVariable('placeToRelax', vacationCountry);
            checkVariable('placeToEatGoodFood', vacationCountry);
            break;
        case '2.1':
            isUninitializedVariable('coolCity');
            break;
        case '2.2':
            isUninitializedVariable('numberStates');
            break;
        case '3.1':
            isUninitializedVariable('myCity');
            isUninitializedVariable('yourCity');
            isUninitializedVariable('ourCity');
            isUninitializedVariable('theirCity');
            break;
        case '3.2':
            checkVariable('northTown', 'Manhattan');
            checkVariable('southTown', 'Atlanta');
            checkVariable('myTown', northTown);
            checkVariable('friendTown', southTown);
            break;
        case '4.1':
            checkVariable('bestCity', 'Atlanta');
            break;
        case '4.2':
            isInitializedVariable('coolestCountry');
            isInitializedVariable('countryNorthOfUnitedStates');
            isInitializedVariable('cityBornIn');
            isInitializedVariable('cityLiveIn');
            break;
        case '4.3':
            checkVariable('', '');
            break;
        case '4.4':
            checkVariable('', '');
            break;
        case '4.5':
            checkVariable('', '');
            break;
        case '4.6':
            checkVariable('', '');
            break;
        case '5.1':
            checkVariable('westCoastCity', 'San Francisco');
            checkVariable('eastCoastCity', 'New York');
            checkVariable('previousCity', westCoastCity);
            checkVariable('currentCity', eastCoastCity);
            checkVariable('futureCity', westCoastCity);
            break;
        case '5.2':
            checkVariable('oldFavFood', 'pizza');
            checkVariable('newFavFood', 'sushi');
            checkVariable('dinner', newFavFood);
            checkVariable('lunch', oldFavFood);
            break;
        default:
            throw new Error(exercise + ' does not have an answer key.');
    }
    console.log('✅ Passed exercise ' + exercise + '! ✅\n\n');
}
