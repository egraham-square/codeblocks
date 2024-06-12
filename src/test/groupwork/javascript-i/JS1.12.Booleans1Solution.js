/* ______________________ PART 1 ______________________
Booleans
*/

/*
1.1
Change the boolean value below to false.
*/

const earthIsFlat = true;

// checkAnswer('1.1');

/*
1.2
Create a boolean constant called skyIsBlue and set it equal to true.
*/

// checkAnswer('1.2');

/*
1.3
We tried to create a boolean below, but messed up! Can you find and fix the mistake?
*/

const waterIsWet = 'true';

// checkAnswer('1.3');

/* ______________________ PART 2 ______________________
If Statement
*/

/*
2.1
It's cold outside so we need a jacket!
- Pass in true instead of false to the function call below so that jacketMessage equals 'grab a jacket!'
*/

function decideOnJacket(isColdOutside) {
    if (isColdOutside) {
        return 'grab a jacket!';
    }
    return 'no jacket needed';
}

const jacketMessage = decideOnJacket(false);

// checkAnswer('2.1');

/*
2.2
It's not raining outside, so we don't need an umbrella.
- Replace null below with a call to decideOnUmbrella (with the correct argument) so that umbrellaMessage equals 'no umbrella needed'
*/

function decideOnUmbrella(isRaining) {
    if (isRaining) {
        return 'grab the umbrella!';
    }
    return 'no umbrella needed';
}

const umbrellaMessage = null;

// checkAnswer('2.2');

/*
2.3
We started writing a function, but need help finishing it
- If it's not sunny out, we want our function to return 'no hat needed'. Can you update the function body to make that happen?
- Let's check our work. Call the function with both true and false arguments and assign them to constants named sunnyHatMessage and notSunnyHatMessage respectively
- Log the values of those constants to check your work!
*/

function decideOnHat(isSunny) {
    if (isSunny) {
        return 'grab a hat';
    }
}

// trackProgress('2.3');

/*
2.4
A function can have multiple if statements! Let's add one more to our function below.
- Below the existing if statement (after the closing curly brace), add another if statement that returns 'put on rain boots' when it's raining (using the unused isRaining parameter)
- Call the function at least three different times with different arguments to produce all three possible results. Log the results to check your work!

hint: it's often helpful to write out "skeleton" code before filling it in. If you know you want an if statement, you can start with just the outline (shown below), then go back and fill it in.
    if () {
    }
*/

function decideOnShoes(isSnowing, isRaining) {
    if (isSnowing) {
        return 'put on snow shoes';
    }
    return 'put on normal shoes';
}

// trackProgress('2.4');

/* ______________________ PART 3 ______________________
Equality & Inequality
*/

/*
3.1
- For each variable below, update the value to the right of the equality comparison so that each variable evaluates to true.

Note: These are awful variable names. They aren't descriptive. Don't do this in real code!!!
*/

const varA = 9 == 0;
const varB = 9 != 9;
const varC = '9' == 0;
const varD = '9' === 0;
const varE = '9' !== '9';
const varF = 'hello' == 'world';

// checkAnswer('3.1');

/*
3.2
We have a complicated function below to help us decide on the kind of coat (if any) we should wear depending on the weather.
- Replace null below with a call to decideOnCoat (with the correct argument) so that coatMessage equals 'no coat needed!'
- Add a log to check your work
*/

function decideOnCoat(weather) {
    if (weather == 'rain') {
        return 'put on a raincoat';
    }
    if (weather == 'snow') {
        return 'put on a heavy coat';
    }
    if (weather != 'warm') {
        return "you'll still need a coat";
    }
    return 'no coat needed!';
}

const coatMessage = null;

// checkAnswer('3.2');

/*
3.3
Let's create a function that helps us decide if we should wear shorts or pants.
Let's pretend we live in a warm climate and want to wear shorts every month except December.
- Create a function called decideOnShorts that takes in the month as a parameter
- Update the function body so that if the month is not December, we return the text "You can wear shorts!". Otherwise, we return "Time for pants"
- Call the function with different arguments so that you trigger both responses.
- Log the results to check your work
*/

// trackProgress('3.3');

/* ______________________ PART 4 ______________________
Comparison Operators
*/

/*
4.1
- For each variable assignment below, change the 0 so that each variable evaluates to false.

Note: These are awful variable names. They aren't descriptive. Don't do this in real code!!!
*/

const varG = 4 < 5 - 0;
const varH = 4 > -1 + 0;
const varI = 4 <= 8 - 0;
const varJ = 4 >= -3 + 0;

// checkAnswer('4.1');

/*
4.2
We have a complicated function below to help us decide how many layers we should wear depending on the temperature.
- Replace null below with a call to layersToWear (with the correct argument) so that layerMessage equals 'wear 2 layers'
- Add a log to check your work
*/
function layersToWear(temperature) {
    if (temperature <= 32) {
        return 'wear 4 layers';
    }
    if (temperature <= 50) {
        return 'wear 3 layers';
    }
    if (temperature >= 70) {
        return 'wear 1 layer';
    }
    return 'wear 2 layers';
}

const layerMessage = null;

// checkAnswer('4.2');

/*
4.3
Backstory:
Let's write a function that tells us the state of water at a given temperature.

What we know:
- At 32 degrees and below, water is in the 'ice' state
- At above 212, water is in the 'steam' state
- At greater than 32 and less than or equal to 212, water is in the 'liquid' state

Task:
- Create a function called getWaterState that takes in a temperature parameter and returns the correct state based on the information above.

Note:
- There are a lot of different ways to do this, so just try something and see what works!

Testing:
- Create your own test cases! Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 31 => expected output: 'ice'
- input: 32 => expected output: 'ice'
- input: 33 => expected output: 'liquid'
- input: 212 => expected output: 'liquid'
- input: 213 => expected output: 'steam'
*/

// trackProgress('4.3');

/* ______________________ PART 5 ______________________
Bonus
*/

/*
5.1
Backstory:
Let's write a function that takes in two numbers and returns whichever one is bigger

Task:
- Create a function called getMax that takes in two parameters (firstNumber, secondNumber) and returns whichever one is greater.
- If they're equal, then return either one.

Note:
- There are a lot of different ways to do this, so just try something and see what works!

Testing:
- Create your own test cases! Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: (5, 10) => expected output: 10
- input: (22, -7) => expected output: 22
- input: (4, 4) => expected output: 4
*/

// trackProgress('5.1');

/*
5.2
Backstory:
Let's write a function that takes in two strings and returns whichever one is shortest

Task:
- Create a function called getShortestString that takes in two parameters (firstString, secondString) and returns whichever one is shorter.
- If they're equal in length, then return the firstString parameter.

Note:
- There are a lot of different ways to do this, so just try something and see what works!

Hint:
- If you don't remember how to find the length of a string, check out this page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

Testing:
- Create your own test cases! Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: ('april', 'december') => expected output: april
- input: ('sqill', 'up') => expected output: 'up'
- input: ('hello', 'world') => expected output: 'hello'
*/

// trackProgress('5.2');

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
            checkVariable('earthIsFlat', false);
            break;
        case '1.2':
            checkVariable('skyIsBlue', true);
            break;
        case '1.3':
            checkVariable('waterIsWet', true);
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
            checkVariable('jacketMessage', decideOnJacket(true));
            break;
        case '2.2':
            checkVariable('umbrellaMessage', decideOnUmbrella(false));
            break;
        case '2.3':
            checkVariable('', '');
            break;
        case '2.4':
            checkVariable('', '');
            break;
        case '2.5':
            checkVariable('', '');
            break;
        case '2.6':
            checkVariable('', '');
            break;
        case '2.7':
            checkVariable('', '');
            break;
        case '2.8':
            checkVariable('', '');
            break;
        case '3.1':
            checkVariable('varA', true);
            checkVariable('varB', true);
            checkVariable('varC', true);
            checkVariable('varD', true);
            checkVariable('varE', true);
            checkVariable('varF', true);
            break;
        case '3.2':
            checkVariable('coatMessage', decideOnCoat('warm'));
            break;
        case '3.3':
            checkVariable('', '');
            break;
        case '3.4':
            checkVariable('', '');
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
        case '4.1':
            checkVariable('varG', false);
            checkVariable('varH', false);
            checkVariable('varI', false);
            checkVariable('varJ', false);
            break;
        case '4.2':
            checkVariable('layerMessage', 'wear 2 layers');
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
