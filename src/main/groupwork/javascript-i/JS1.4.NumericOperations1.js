/* ______________________ PART 1 ______________________
Arithmetic Operators
*/

/*
1.1
Change the zero below to get the variable to equal 2
*/
const SUM = 0 + 1;

// Uncomment below and run the program to check your answer
// checkAnswer('1.1');

/*
1.2
Change the zero below to get the variable to equal 2
*/
const DIFFERENCE = 0 - 10;

// checkAnswer('1.2');

/*
1.3
Change the zero below to get the variable to equal 2
*/
const PRODUCT = 0 * 2;

// checkAnswer('1.3');

/*
1.4
Change the zero below to get the variable to equal 2
*/
const QUOTIENT = 0 / 3;

// checkAnswer('1.4');

/*
1.5
Change the zero below to get the variable to equal 2
*/
const COOL_VALUE = (5 + 15) / 0;

// checkAnswer('1.5');

/*
1.6
Change the zero below to get the variable to equal 2
*/
const FUN_VALUE = 2 * (7 - 0);

// checkAnswer('1.6');

/* ______________________ PART 2 ______________________
Arithmetic Operators w/ Variables
*/

/*
2.1
We've got a group of cats and want to count how many paws there are in the whole group.
The equation is already set up, but we need you to fill in some values
- Set NUMBER_CATS equal to a random number between 1 and 10
- Set PAWS_PER_CAT equal to how many paws a cat has
*/
const NUMBER_CATS = 0;
const PAWS_PER_CAT = 0;

const TOTAL_PAWS = NUMBER_CATS * PAWS_PER_CAT;

// checkAnswer('2.1');

/*
2.2
We've got a group of rabbits and want to count how many ears there are in the whole group.
- Set TOTAL_EARS equal to NUMBER_RABBITS times EARS_PER_RABBIT.
*/
const NUMBER_RABBITS = 12;
const EARS_PER_RABBIT = 2;

const TOTAL_EARS = 0;

// checkAnswer('2.2');

/*
2.3
We've got a group of dogs and want to count how many legs there are in the whole group.
Curveball: one dog is a three-legged dog
- Set TOTAL_LEGS equal to numberDogs times LEGS_PER_DOG but make sure to subtract one leg for the three-legged dog!
*/
const NUMBER_DOGS = 6;
const LEGS_PER_DOG = 4;

const TOTAL_LEGS = 0;

// checkAnswer('2.3');

/*
2.4
We've got a group of sharks and want to count how many teeth there are in the whole group (from a distance!)
There are 15 sharks in this group, and most of the sharks have 260 teeth
Curveball: one shark has an extra row of 130 teeth

- Set NUMBER_SHARKS and TEETH_PER_SHARK equal to 15 and 260 respectively.
- Set TOTAL_TEETH equal to an accurate count of all the teeth in the group (accounting for the extra toothy shark!)
*/
const NUMBER_SHARKS = 0;
const TEETH_PER_SHARK = 0;

const TOTAL_TEETH = 0;

// checkAnswer('2.4');

/*
2.5
We've got a group of 27 baby pandas that we need to buy hammocks for. We know that each hammock can hold 3 pandas.
How many hammocks do we need?

- Set NUMBER_PANDAS and pandasPerHammock equal to the values above
- Set HAMMOCKS_TO_BUY equal to how many hammocks we need!
*/
const NUMBER_PANDAS = 0;
const PANDAS_PER_HAMMOCK = 0;

const HAMMOCKS_TO_BUY = 0;

// checkAnswer('2.5');

/*
2.6
We've got a group of 12 racoons to feed and they love bananas.
Mosts racoons are full after 2 bananas, but there's one racoon in the group that always eats 3 bananas!
Let's figure out how many bananas we need to buy to feed our racoons

- Declare a variable called NUMBER_RACOONS and initialize it with the value mentioned above
- Declare a variable called BANANAS_PER_RACOON and initialize it with the number of bananas most racoons will eat
- Declare a variable called BANANAS_TO_BUY and initialize it to the total number of bananas we need (accounting for the extra hungry racoon)
*/

// checkAnswer('2.6');

/* ______________________ PART 3 ______________________
Increment/Decrement Operators

Although it's generally best to avoid reassigning (or "mutating") a variable where possible, it's a common and acceptable practice to do so for variables with limited scope (something we'll learn about in a few weeks!), and incrementing/decrementing is a common example of where it's okay to use let.
*/

/*
3.1
We're counting sheep! But it looks like we're accidentally counting down instead of up.
- Replace the decrement operator with the increment operator.
*/
let sheepCount = 100;
sheepCount--;

// checkAnswer('3.1');

/*
3.2
We're counting llamas!
- Rework the llamaCount assignment to use the increment operator
*/
let llamaCount = 20;
llamaCount = llamaCount + 1;

// checkAnswer('3.2');

/*
3.3
We're counting bears!
- Below the initialization, increment the bearCount by 1 using the increment operator
*/
let bearCount = 5;

// checkAnswer('3.3');

/*
3.4
We're losing zebras!
- Reduce the zebraCount by one using the decrement operator
*/
let zebraCount = 14;

// checkAnswer('3.4');

/*
3.5
We're losing polar bears!
- Rework the polarBearCount assignment to use the decrement operator
*/
let polarBearCount = 50;
polarBearCount = polarBearCount - 1;

// checkAnswer('3.5');

/*
3.6
We're losing foxes!
- Create a variable called foxCount and initialize it with a value of 28
- Reduce the foxCount by one using the decrement operator
*/

// checkAnswer('3.6');

/*
3.7
We're losing elephants!
- Replace the decrement operator below with the expanded re-assignment syntax
*/

let elephantCount = 200;
elephantCount--;

// checkAnswer('3.7');

/* ______________________ PART 4 ______________________
Decimal Numbers
*/

/*
4.1
Change the 0.0 below to get the variable to equal 2.0
*/

const COOL_DECIMAL = 0.5 + 0.0;

// checkAnswer('4.1');

/*
4.2
Change the 0.0 below to get the variable to equal 2.0
*/

const FUN_DECIMAL = 3.5 - 0.0;

// checkAnswer('4.2');

/*
4.3
Change the 0.0 below to get the variable to equal 2.0
*/

const NEAT_DECIMAL = 2 * 3.2 - 0.0;

// checkAnswer('4.3');

/*
4.4
Change the 0.0 below to get the variable to equal 2.0
*/

const GREAT_DECIMAL = (3.1 + 0.0) / 2.2;

// checkAnswer('4.4');

/* ______________________ PART 5 ______________________
Bonus
*/

/*
5.1
Below its initialization, increment or decrement the count variable to get the final value equal to 2.
*/

let funCount = 8;

const FUN_FINAL_NUMBER = funCount - 7;

// checkAnswer('5.1');

/*
5.2
Below its initialization, increment or decrement the count variable to get the final value equal to 2.
*/

let coolCount = -1;

const COOL_FINAL_NUMBER = coolCount + 2;

// checkAnswer('5.2');

/*
5.3
Below its initialization, increment or decrement the count variable to get the final value equal to 2.
*/

let awesomeCount = 49;

const AWESOME_FINAL_NUMBER = awesomeCount / 24;

// checkAnswer('5.3');

/*
5.4
Below its initialization, increment or decrement the count variable to get the final value equal to 2.
*/

let greatCount = -7;

const GREAT_FINAL_NUMBER = greatCount / -4;

// checkAnswer('5.4');

/*
5.5
Initialize the count variable so that the final value equals 2.
*/

let superCount;
superCount++;

const SUPER_FINAL_NUMBER = superCount - 4;

// checkAnswer('5.5');

/*
5.6
Initialize the count variable so that the final value equals 2.
*/

let neatCount;
neatCount++;

const NEAT_FINAL_NUMBER = neatCount / 8;

// checkAnswer('5.6');

/*
5.7
Initialize the count variable so that the final value equals 2.
*/

let groovyCount;
groovyCount--;

const GROOVY_FINAL_NUMBER = groovyCount / 6;

// checkAnswer('5.7');

/*
5.8
Initialize the count variable so that the final value equals 2.
*/

let niceCount;
niceCount--;

const NICE_FINAL_NUMBER = niceCount / 4.2;

// checkAnswer('5.8');

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
            checkVariable('SUM', 2);
            break;
        case '1.2':
            checkVariable('DIFFERENCE', 2);
            break;
        case '1.3':
            checkVariable('PRODUCT', 2);
            break;
        case '1.4':
            checkVariable('QUOTIENT', 2);
            break;
        case '1.5':
            checkVariable('COOL_VALUE', 2);
            break;
        case '1.6':
            checkVariable('FUN_VALUE', 2);
            break;
        case '1.7':
            checkVariable('', '');
            break;
        case '2.1':
            checkVariable('PAWS_PER_CAT', 4);
            checkVariable('TOTAL_PAWS', NUMBER_CATS * PAWS_PER_CAT);
            break;
        case '2.2':
            checkVariable('TOTAL_EARS', NUMBER_RABBITS * EARS_PER_RABBIT);
            break;
        case '2.3':
            checkVariable('TOTAL_LEGS', NUMBER_DOGS * LEGS_PER_DOG - 1);
            break;
        case '2.4':
            checkVariable('TOTAL_TEETH', NUMBER_SHARKS * TEETH_PER_SHARK + 130);
            break;
        case '2.5':
            checkVariable('HAMMOCKS_TO_BUY', NUMBER_PANDAS / PANDAS_PER_HAMMOCK);
            break;
        case '2.6':
            checkVariable('BANANAS_TO_BUY', NUMBER_RACOONS * BANANAS_PER_RACOON + 1);
            break;
        case '2.7':
            checkVariable('', '');
            break;
        case '3.1':
            checkVariable('sheepCount', 101);
            break;
        case '3.2':
            checkVariable('llamaCount', 21);
            break;
        case '3.3':
            checkVariable('bearCount', 6);
            break;
        case '3.4':
            checkVariable('zebraCount', 13);
            break;
        case '3.5':
            checkVariable('polarBearCount', 49);
            break;
        case '3.6':
            checkVariable('foxCount', 27);
            break;
        case '3.7':
            checkVariable('elephantCount', 199);
            break;
        case '4.1':
            checkVariable('COOL_DECIMAL', 2.0);
            break;
        case '4.2':
            checkVariable('FUN_DECIMAL', 2.0);
            break;
        case '4.3':
            checkVariable('NEAT_DECIMAL', 2.0);
            break;
        case '4.4':
            checkVariable('GREAT_DECIMAL', 2.0);
            break;
        case '4.5':
            checkVariable('', '');
            break;
        case '4.6':
            checkVariable('', '');
            break;
        case '4.7':
            checkVariable('', '');
            break;
        case '5.1':
            checkVariable('FUN_FINAL_NUMBER', 2);
            break;
        case '5.2':
            checkVariable('COOL_FINAL_NUMBER', 2);
            break;
        case '5.3':
            checkVariable('AWESOME_FINAL_NUMBER', 2);
            break;
        case '5.4':
            checkVariable('GREAT_FINAL_NUMBER', 2);
            break;
        case '5.5':
            checkVariable('SUPER_FINAL_NUMBER', 2);
            break;
        case '5.6':
            checkVariable('NEAT_FINAL_NUMBER', 2);
            break;
        case '5.7':
            checkVariable('GROOVY_FINAL_NUMBER', 2);
            break;
        case '5.8':
            checkVariable('NICE_FINAL_NUMBER', 2);
            break;
        default:
            throw new Error(exercise + ' does not have an answer key.');
    }
    console.log('✅ Passed exercise ' + exercise + '! ✅\n\n');
}
