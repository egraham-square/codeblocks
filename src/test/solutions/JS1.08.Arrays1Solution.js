/* ______________________ PART 1 ______________________
Initializing Arrays
*/

/*
1.1
Change "red" to "yellow" (literally just change the value in initialization)
*/

const colorsA = ['blue', 'green', 'red'];
// checkAnswer('1.1');

/*
1.2
Add "pink" to the end of the array (literally just add the value in initialization)
*/

const colorsB = ['blue', 'green', 'red'];
// checkAnswer('1.2');

/*
1.3
Fill in the empty array below with two colors of your choice (literally just add them between the brackets)
*/

const colorsC = [];
// checkAnswer('1.3');

/*
1.4
Fill in the empty array below with "black", "orange", and the number 31
*/

const colorsD = [];
// checkAnswer('1.4');

/*
1.5
Create an array called colorsOfFall that contains "red" "yellow" and "orange"
*/

// checkAnswer('1.5');

/*
1.6
We're missing an entry for October!
- Add an entry for October (which has 31 days) in the multi-dimensional array below
*/
const daysInMonths = [
    ['January', 31],
    ['February', 28],
    ['March', 31],
    ['April', 30],
    ['May', 31],
    ['June', 31],
    ['July', 31],
    ['August', 31],
    ['September', 30],
    ['November', 30],
    ['December', 31],
];

// checkAnswer('1.6');

/*
1.7
We're missing Fall!
- Add an entry for Fall below (which covers September, October, & November) in the multi-dimensional array below
*/
const monthsBySeason = [
    ['Spring', ['March', 'April', 'May']],
    ['Summer', ['June', 'July', 'August']],
    ['Winter', ['December', 'January', 'February']],
];

// checkAnswer('1.7');

/*
1.8
Create an array called colorLengths that contains two separate arrays:
-- the first array should contain two elements:
    -- the string "pink"
    -- a number that's the length of "pink"
-- the second array should contain two elements:
    -- the string "red"
    -- a number that's the length of "red"

Bonus:
- Instead of hardcoding a number for the length, can you write the string again and access its length property?
*/

// checkAnswer('1.8');

/*
1.9
- Create an array of arrays called favoriteColors.
- The first nested array should have your name and your favorite color.
- Add similar entries to the array for the rest of your group members.

// checkAnswer('1.9');

/*
1.10 BONUS!!!
Just like strings, arrays have a length property too!
- Set the two uninitialized variables below to the respective lengths of each array (don't count! use the length property)
*/

const manyColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
];
const fewColors = ['red', 'yellow', 'blue'];

const manyColorsLength = 0;
const fewColorsLength = 0;

// checkAnswer('1.10');

/* ______________________ PART 2 ______________________
Indexes
*/

/*
2.1
Change the 10 below so that greenColor has a value of "green"
*/
const colorsE = ['pink', 'purple', 'green', 'yellow'];
const greenColor = colorsE[10];

// checkAnswer('2.1');

/*
2.2
Change the 10 below so that pinkColor has a value of "pink"
*/
const colorsF = ['pink', 'purple', 'green', 'yellow'];
const pinkColor = colorsF[10];

// checkAnswer('2.2');

/*
2.3
Utilize the colorsG array to set purpleColor equal to "purple"
*/
const colorsG = ['pink', 'purple', 'green', 'yellow'];
const purpleColor = "";

// checkAnswer('2.3');

/*
2.4
Create a variable called "yellowColor" and set it equal to the last value in the array below
*/
const colorsH = ['pink', 'purple', 'green', 'yellow'];

// checkAnswer('2.4');

/*
2.5
- Change the empty array below so that fruits has the values: 'grape', 'strawberry', and 'tangerine'
- If you used hardcoded strings in the previous step, update it so that you're pulling the values from the existing arrays.
*/
const purples = ['lilac', 'grape', 'violet'];
const pinks = ['bubble gum', 'rose', 'magenta', 'strawberry'];
const oranges = ['tangerine', 'coral'];

const fruits = [];

// checkAnswer('2.5');

/*
2.6
Let's practice accessing nested arrays!
- Access colorTemps to set orangeColorAndTemp equal to the nested array that contains "orange" (replace the empty array)
- Access orangeColorAndTemp to set orangeColor equal to "orange" (replace the empty string)
*/
const colorTemps = [
    ['red', 'warm'],
    ['orange', 'warm'],
    ['green', 'cool'],
    ['blue', 'cool'],
];

const orangeColorAndTemp = [];
const orangeColor = "";

// checkAnswer('2.6');

/*
2.7 Bonus!!!

Change the 100 below so that lastWarmColor equals "yellow"

Note: This method of accessing the last value in an array is extremely common
*/
const warmColors = ['red', 'orange', 'yellow'];
const lastWarmColor = warmColors[warmColors.length - 100];

// checkAnswer('2.7');

/* ______________________ PART 3 ______________________
Modifying Arrays
*/

/*
3.1
Change the empty quotes below so that 'red' is replaced with 'blue' in the coolColors array
*/

const coolColors = ['red', 'green', 'purple'];
coolColors[0] = '';

// checkAnswer('3.1');

/*
3.2
Overwrite all the values in the blues array so that it's filled with 'navy', 'teal', and 'aqua' instead
*/

const blues = ['mustard', 'gold', 'sunflower'];
blues[0] = '';
blues[1] = '';
blues[2] = '';

// checkAnswer('3.2');

/*
3.3
Overwrite 'lime green' in the array below to 'rose'
*/

const reds = ['maroon', 'ruby', 'lime green', 'crimson'];

// checkAnswer('3.3');

/*
3.4
- Overwrite 'red' in the greens array below to 'jade'
- If you manually counted and hardcoded a value for the index in the previous step, modify it to use the length of the
array like we did at the end of Part 2.
*/

const greens = ['granny smith', 'mint', 'sage', 'forest', 'sea foam', 'hunter green', 'emerald', 'neon green', 'viridian', 'red'];

// checkAnswer('3.4');

/*
3.5
Without repeating 'charcoal' can you find a way to replace 'scarlet' below with the 'charcoal' value from the greys array?
*/
const greys = ['smoke', 'charcoal', 'silver'];
const neutrals = ['beige', 'khaki', 'scarlet', 'oatmeal'];

// checkAnswer('3.5');

/* ______________________ PART 4 ______________________
Nested Arrays
*/

/*
4.1
Our favorite black color is 'raven', but we're not getting the right value below.
- Can you update one or both of the indexes to get favoriteBlack equal to raven?
*/

const colorShadesA = [
    ['ivory', 'milk', 'snow'],
    ['jet', 'raven', 'onyx'],
];

const blackShades = colorShadesA[0];
const favoriteBlack = blackShades[2];

// checkAnswer('4.1');

/*
4.2
- Using colorShadesB, initialize redShades to an array containing 'maroon', 'ruby', and 'crimson'
- Using colorShadesB, initialize pinkShades to an array containing 'bubble gum', 'rose', and 'magenta'
- Using redShades, initialize favoriteRed to 'ruby'
- Using pinkShades, initialize favoritePink to 'bubble gum'
*/

const colorShadesB = [
    ['maroon', 'ruby', 'crimson'],
    ['bubble gum', 'rose', 'magenta'],
];

const redShades = [];
const pinkShades = [];

const favoriteRed = '';
const favoritePink = '';

// checkAnswer('4.2');

/*
4.3
Our favorite purple color is 'grape', and our favorite orange color is 'amber', but we're not getting the right values below.
- Can you update the indexes accessed so that our favorite colors are correct?
*/

const colorShadesC = [
    ['lilac', 'grape', 'violet'],
    ['tangerine', 'coral', 'clay', 'amber'],
];

const favoritePurple = colorShadesC[0][0];
const favoriteOrange = colorShadesC[0][0];

// checkAnswer('4.3');

/*
4.4
Our favorite green is 'jade', our favorite blue is 'cobolt', and our favorite yellow is 'gold'
- Replace the empty strings below with usages of colorShadesD that yield the correct favorite color
*/

const colorShadesD = [
    ['mint green', 'jade', 'lime'],
    ['navy', 'teal', 'aqua', 'cobolt'],
    ['gold', 'sunflower', 'mustard'],
];

const favoriteGreen = '';
const favoriteBlue = '';
const favoriteYellow = '';

// checkAnswer('4.4');

/*
4.5
Our lucky number is 59, our unlucky number is 52, and our favorite number is 62
- Utilize the numbers array to set the variables below to the correct values
*/

const numbers = [
    [
        [52, 53],
        [54, 55],
    ],
    [
        [56, 57],
        [58, 59],
    ],
    [
        [60, 61],
        [62, 63],
    ],
];

const luckyNumber = 0;
const unluckyNumber = 0;
const favoriteNumber = 0;

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
            checkVariable('colorsA', ['blue', 'green', 'yellow']);
            break;
        case '1.2':
            checkVariable('colorsB', ['blue', 'green', 'red', 'pink']);
            break;
        case '1.3':
            assertEquals(colorsC.length, 2);
            break;
        case '1.4':
            checkVariable('colorsD', ['black', 'orange', 31]);
            break;
        case '1.5':
            checkVariable('colorsOfFall', ['red', 'yellow', 'orange']);
            break;
        case '1.6':
            checkVariable('daysInMonths',  [
                ['January', 31],
                ['February', 28],
                ['March', 31],
                ['April', 30],
                ['May', 31],
                ['June', 31],
                ['July', 31],
                ['August', 31],
                ['September', 30],
                ['October', 31],
                ['November', 30],
                ['December', 31],
            ]);
            break;
        case '1.7':
            checkVariable('monthsBySeason', [
                ['Spring', ['March', 'April', 'May']],
                ['Summer', ['June', 'July', 'August']],
                ['Fall', ['September', 'October', 'November']],
                ['Winter', ['December', 'January', 'February']],
            ]);
            break;
        case '1.8':
            checkVariable('colorLengths', [['pink', 'pink'.length], ['red', 'red'.length]]);
            break;
        case '1.9':
            assertEquals(favoriteColors[0].length, 2);
            assertEquals(favoriteColors[1].length, 2);
            break;
        case '1.10':
            checkVariable('manyColorsLength', manyColors.length);
            checkVariable('fewColorsLength', fewColors.length);
            break;
        case '2.1':
            checkVariable('greenColor', 'green');
            break;
        case '2.2':
            checkVariable('pinkColor', 'pink');
            break;
        case '2.3':
            checkVariable('purpleColor', 'purple');
            break;
        case '2.4':
            checkVariable('yellowColor', colorsH[colorsH.length - 1]);
            break;
        case '2.5':
            checkVariable('fruits', ['grape', 'strawberry', 'tangerine']);
            break;
        case '2.6':
            checkVariable('orangeColorAndTemp', ['orange', 'warm']);
            checkVariable('orangeColor', 'orange');
            break;
        case '2.7':
            checkVariable('lastWarmColor', 'yellow');
            break;
        case '3.1':
            checkVariable('coolColors', ['blue', 'green', 'purple']);
            break;
        case '3.2':
            checkVariable('blues', ['navy', 'teal', 'aqua']);
            break;
        case '3.3':
            checkVariable('reds', ['maroon', 'ruby', 'rose', 'crimson']);
            break;
        case '3.4':
            checkVariable('greens', ['granny smith', 'mint', 'sage', 'forest', 'sea foam', 'hunter green', 'emerald', 'neon green', 'viridian', 'jade']);
            break;
        case '3.5':
            checkVariable('neutrals', ['beige', 'khaki', 'charcoal', 'oatmeal']);
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
            checkVariable('favoriteBlack', 'raven');
            break;
        case '4.2':
            checkVariable('redShades', ['maroon', 'ruby', 'crimson']);
            checkVariable('pinkShades', ['bubble gum', 'rose', 'magenta']);
            checkVariable('favoriteRed', 'ruby');
            checkVariable('favoritePink', 'bubble gum');
            break;
        case '4.3':
            checkVariable('favoritePurple', 'grape');
            checkVariable('favoriteOrange', 'amber');
            break;
        case '4.4':
            checkVariable('favoriteGreen', 'jade');
            checkVariable('favoriteBlue', 'cobolt');
            checkVariable('favoriteYellow', 'gold');
            break;
        case '4.5':
            checkVariable('luckyNumber', 59);
            checkVariable('unluckyNumber', 52);
            checkVariable('favoriteNumber', 62);
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
