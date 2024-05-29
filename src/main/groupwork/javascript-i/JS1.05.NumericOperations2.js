/* ______________________ PART 1 ______________________
Remainder Operator
*/

/*
1.1
Change the 7 below to get the remainder to equal 0
*/
const COOL_REMAINDER = 7 % 2;

// Uncomment below to check your answer
// checkAnswer('1.1');

/*
1.2
Change the 16 below to get the remainder to equal 1
*/
const FUN_REMAINDER = 16 % 2;

// checkAnswer('1.2');

/*
1.3
Change the zero below to get the remainder to equal 1
*/
const NEAT_REMAINDER = 9 % 0;

// checkAnswer('1.3');

/*
1.4
Change the zero below to get the remainder to equal 0
*/
const GOOD_REMAINDER = 12 % 0;

// checkAnswer('1.4');

/*
1.5
Change the zero below to get the remainder to equal 0
*/
const GROOVY_REMAINDER = 0 % 5;

// checkAnswer('1.5');

/*
1.6
Change the zero below to get the remainder to equal 1
*/
const RAD_REMAINDER = 0 % 5;

// checkAnswer('1.6');

/*
1.7
Change the zero below to get the remainder to equal 3
*/
const FUNKY_REMAINDER = 0 % 5;

// checkAnswer('1.7');

/*
1.8
Change the zero below to get the remainder to equal 4
*/
const SUPER_REMAINDER = (8 + 0) % 8;

// checkAnswer('1.8');

/*
1.9
Change the zero below to get the remainder to equal 0
*/
const GREAT_REMAINDER = (0 + 75) % 10;

// checkAnswer('1.9');

/* ______________________ PART 2 ______________________
Evaluating Compound Assignments
*/

/*
2.1
Change the zero below so that the final variable equals 9
*/

let greatSum = 5;
greatSum += 0;

// checkAnswer('2.1');

/*
2.2
Change the zero below so that the final variable equals 9
*/

let bestSum = 0;
bestSum += 7;

// checkAnswer('2.2');

/*
2.3
Change the zero below so that the final variable equals 9
*/

let bestDifference = 16;
bestDifference -= 0;

// checkAnswer('2.3');

/*
2.4
Change the zero below so that the final variable equals 9
*/

let bestQuotient = 0;
bestQuotient /= 10;

// checkAnswer('2.4');

/*
2.5
Change the zero below so that the final variable equals 9
*/

let bestProduct = 0;
bestProduct *= 3;

// checkAnswer('2.5');

/*
2.6
Use compound assignment to get the final value of the variable equal to 9
*/
let groovySum = 7;

// checkAnswer('2.6');

/*
2.7
Use compound assignment to get the final value of the variable equal to 9
*/
let groovyDifference = 12;

// checkAnswer('2.7');

/*
2.8
Let's go forward in time!
- Create a variable named thisYear and set it equal to the current year
- Use compound assignment to fast forward 22 years
*/

// checkAnswer('2.8');

/*
2.9
Let's go back in time!
- Create a variable named thatYear and set it equal to the current year
- Use compound assignment to rewind 1,000 years
*/

// checkAnswer('2.9');

/*
2.10
BONUS!
You haven't seen compound remainder assignment yet (%=), but can you guess how it works?
- Change the zero below so that the final variable equals 9
*/

let bestRemainder = 0;
bestRemainder %= 10;

// checkAnswer('2.10');

/* ______________________ PART 3 ______________________
Compound Assignment vs Simple Assignment
*/

/*
3.1
Rework the operation below to use compound assignment
*/
let funSum = 3;
funSum = funSum + 5;

// checkAnswer('3.1');

/*
3.2
Rework the operation below to use compound assignment
*/
let funProduct = 3;
funProduct = funProduct * 5;

// checkAnswer('3.2');

/*
3.3
Switch the compound assignment below to use non-compound assignment
*/
let coolProduct = 3;
coolProduct *= 5;

// checkAnswer('3.3');

/*
3.4
Switch the compound assignment below to use non-compound assignment
*/
let coolQuotient = 15;
coolQuotient /= 5;

// checkAnswer('3.4');

/* ______________________ PART 4 ______________________
Compound Assignment vs Increment/Decrement
*/

/*
4.1
Switch from the increment operator to compound assignment

hint: The increment operator just adds one to the variable.
*/
let neatSum = 3;
neatSum++;

// checkAnswer('4.1');

/*
4.2
Switch from the decrement operator to compound assignment
*/
let neatDifference = 3;
neatDifference--;

// checkAnswer('4.2');

/*
4.3
Switch from compound assignment to the decrement operator
*/
let radDifference = 3;
radDifference -= 1;

// checkAnswer('4.3');

/*
4.4
Switch from compound assignment to the increment operator
*/
let radSum = 3;
radSum += 1;

// checkAnswer('4.4');

/* ______________________ BONUS ______________________
Extra Practice
*/

/*
5.1
We're having pie! There are 5 people sharing the pie, which is already cut into 8 pieces.
- Create a variable called LEFTOVER_PIECES
- Using the remainder operator, set LEFTOVER_PIECES equal to the number of pieces left after everyone has had their slice of pie
*/

// checkAnswer('5.1');

/*
5.2
Let's practice extracting variables. Code is generally easier to write than it is to read, so an engineer's goal should be to make their code easy to follow (even for someone who's never looked at it before).

One tool in making your code more readable is using clear, descriptive variable names. Hardcoded values used directly in code are hard to decipher, especially when assigned to non-descript variable names! Take this example:

  const A = 60 * 60 * 24;

What the heck is going on there?? Now what about this instead:

  const SECONDS_IN_MINUTE = 60;
  const MINUTES_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;

  const SECONDS_IN_DAY = SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY;

Much better! That tells a clearer story of what's happening. It's longer, but shorter code doesn't always mean clearer code.

In the code below we're calculating how many meals we need to prepare for the week. Change the code (aka, "refactor" it) in the following ways:
- Rename PREP to MEALS_IN_WEEK
- Replace the hardcoded 3 with a constant called MEALS_IN_DAY (aka, "extract" the variable)
- Replace the hardcoded 7 with a constant called DAYS_IN_WEEK
*/

const PREP = 3 * 7;

// checkAnswer('5.2');

/*
5.3
Pizza time! There are 3 friends sharing a pizza, which is already cut into 10 slices. These friends don't want anyone in the group to feel left out, so they all grab a single slice at a time to eat, and they'll only grab another slice if there's enough for everyone to have one.

If each person gets the same number of slices, how many slices of pizza will be leftover? Let's calculate it!
- Create a variable called TOTAL_SLICES and initialize it to the total number of slices that the pizza starts out with
- Create a variable called NUM_PEOPLE and initialize it to the number of people

- Create a variable called LEFTOVER_PIZZA and initialize it to the number of slices we'll have left after dividing the pizza up amongst the friends (hint: make sure you're using the remainder operator and the variable you declared above)
*/

// checkAnswer('5.3');

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
    const currentYear = new Date().getFullYear();
    switch (exercise) {
        case '1.1':
            checkVariable('COOL_REMAINDER', 0);
            break;
        case '1.2':
            checkVariable('FUN_REMAINDER', 1);
            break;
        case '1.3':
            checkVariable('NEAT_REMAINDER', 1);
            break;
        case '1.4':
            checkVariable('GOOD_REMAINDER', 0);
            break;
        case '1.5':
            checkVariable('GROOVY_REMAINDER', 0);
            break;
        case '1.6':
            checkVariable('RAD_REMAINDER', 1);
            break;
        case '1.7':
            checkVariable('FUNKY_REMAINDER', 3);
            break;
        case '1.8':
            checkVariable('SUPER_REMAINDER', 4);
            break;
        case '1.9':
            checkVariable('GREAT_REMAINDER', 0);
            break;
        case '1.10':
            checkVariable('', '');
            break;
        case '2.1':
            checkVariable('greatSum', 9);
            break;
        case '2.2':
            checkVariable('bestSum', 9);
            break;
        case '2.3':
            checkVariable('bestDifference', 9);
            break;
        case '2.4':
            checkVariable('bestQuotient', 9);
            break;
        case '2.5':
            checkVariable('bestProduct', 9);
            break;
        case '2.6':
            checkVariable('groovySum', 9);
            break;
        case '2.7':
            checkVariable('groovyDifference', 9);
            break;
        case '2.8':
            checkVariable('thisYear', currentYear + 22);
            break;
        case '2.9':
            checkVariable('thatYear', currentYear - 1000);
            break;
        case '2.10':
            checkVariable('bestRemainder', 9);
            break;
        case '3.1':
            checkVariable('funSum', 3 + 5);
            break;
        case '3.2':
            checkVariable('funProduct', 3 * 5);
            break;
        case '3.3':
            checkVariable('coolProduct', 3 * 5);
            break;
        case '3.4':
            checkVariable('coolQuotient', 15 / 5);
            break;
        case '3.5':
            checkVariable('', '');
            break;
        case '3.6':
            checkVariable('', '');
            break;
        case '3.7':
            checkVariable('', '');
            break;
        case '3.8':
            checkVariable('', '');
            break;
        case '3.9':
            checkVariable('', '');
            break;
        case '3.10':
            checkVariable('', '');
            break;
        case '4.1':
            checkVariable('neatSum', 4);
            break;
        case '4.2':
            checkVariable('neatDifference', 2);
            break;
        case '4.3':
            checkVariable('radDifference', 2);
            break;
        case '4.4':
            checkVariable('radSum', 4);
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
            checkVariable('LEFTOVER_PIECES', 8 % 5);
            break;
        case '5.2':
            checkVariable('MEALS_IN_DAY', 3);
            checkVariable('DAYS_IN_WEEK', 7);
            checkVariable('MEALS_IN_WEEK', MEALS_IN_DAY * DAYS_IN_WEEK);
            break;
        case '5.3':
            checkVariable('TOTAL_SLICES', 10);
            checkVariable('NUM_PEOPLE', 3);
            checkVariable('LEFTOVER_PIZZA', TOTAL_SLICES % NUM_PEOPLE);
            break;
        case '5.4':
            checkVariable('', '');
            break;
        default:
            throw new Error(exercise + ' does not have an answer key.');
    }
    console.log('✅ Passed exercise ' + exercise + '! ✅\n\n');
}