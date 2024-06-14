/* ______________________ PART 1 ______________________
Push
*/

/*
1.1
Change the value we're pushing to achieve a final array of: ["turquoise", "baby blue", "sky"]
*/

const lightBlues = ['turquoise', 'baby blue'];
lightBlues.push('sky');

checkAnswer('1.1');

/*
1.2
Perform one or more a push operations to achieve a final array of: ["royal", "denim", "navy"]
*/

const darkBlues = ['royal', 'denim'];
darkBlues.push('navy');

checkAnswer('1.2');

/*
1.3
Perform one or more a push operations to achieve a final array of: ["hot pink", "lime green", "aqua"]
*/

const brightColors = ['hot pink'];
brightColors.push('lime green');
brightColors.push('aqua');

checkAnswer('1.3');

/*
1.4
Perform one or more a push operations to achieve a final array of: ["bronze", ["gold", "silver"]]
*/

const metallics = ['bronze'];
metallics.push(['gold','silver']);

checkAnswer('1.4');

/* ______________________ PART 2 ______________________
Pop
*/

/*
2.1
We're popping from the wrong array! Change which array is being popped so that coolColor has a value of "blue"
*/

const coolColors = ['purple', 'green', 'blue'];
const warmColors = ['orange', 'red', 'yellow'];

const coolColor = coolColors.pop();

checkAnswer('2.1');

/*
2.2
Using one or more pop operations, set lightBrownColor equal to "tan"
*/

const lightBrowns = ['beige', 'khaki', 'tan'];

const lightBrownColor = lightBrowns.pop();

checkAnswer('2.2');

/*
2.3
Using one or more pop operations, set blueColor equal to "teal"
*/

const blues = ['aqua', 'teal', 'cobolt', 'navy'];
blues.pop();
blues.pop();
const blueColor = blues.pop();

checkAnswer('2.3');

/*
2.4
Use one or more pop operations to achieve a final array of: ["jade"]
*/

const greens = ['jade', 'emerald', 'hunter green', 'forest'];
greens.pop();
greens.pop();
greens.pop();

checkAnswer('2.4');

/* ______________________ PART 3 ______________________
Shift
*/

/*
3.1
We're grabbing the last yellow color from the array, but let's grab the first color instead!
- Replace the pop opereration below with a shift so that yellowColor has a value of "gold"
*/

const yellows = ['gold', 'saffron', 'sunflower'];
const yellowColor = yellows.shift();

checkAnswer('3.1');

/*
3.2
Use one or more shift operations to achieve a final array of: ['watermelon', 'magenta']
*/

const pinks = ['rose', 'bubble gum', 'watermelon', 'magenta'];
pinks.shift();
pinks.shift();
checkAnswer('3.2');
/*
3.3
Using one or more shift operations, set purpleColor equal to "violet"
*/

const purples = ['lilac', 'violet', 'indigo'];
purples.shift();
const purpleColor = purples.shift();

checkAnswer('3.3');

/* ______________________ PART 4 ______________________
Unshift
*/

/*
4.1
We're adding a new orange color to the end of the array, but let's add it to the beginning instead!
- Replace the push operation below with an unshift so that oranges has a final value of ['coral', 'tangerine', 'amber', 'clay']
*/

const oranges = ['tangerine', 'amber', 'clay'];
oranges.unshift('coral');

checkAnswer('4.1');

/*
4.2
Use one or more unshift operations to achieve a final array of: ['charcoal', 'smoke', 'slate', 'silver']
*/

const greys = ['slate', 'silver'];
greys.unshift('smoke');
greys.unshift('charcoal');

checkAnswer('4.2');

/*
4.3
Use one or more unshift operations to achieve a final array of:
        [
          ['warm', ['red', 'yellow', 'orange']],
          ['cool', ['purple', 'blue', 'green']]
        ]
*/

const colorTemps = [
    ['cool', ['purple', 'blue', 'green']]
];
colorTemps.unshift(['warm', ['red', 'yellow', 'orange']]);

checkAnswer('4.3');

/* ______________________ PART 5 ______________________
Bonus
*/

/*
5.1
Using any (or all) of the operations we've learned (one or more times), move all of the values from darkReds to the end of the reds array darkReds should end up empty)

Note: you can use the return value from one array operation as the argument to another!
*/

const reds = ['scarlet', 'ruby', 'cherry']
const darkReds = ['burgundy', 'maroon']
reds.push(darkReds.shift());
reds.push(darkReds.shift());

checkAnswer('5.1');

/*
5.2
Using any (or all) of the operations we've learned (one or more times), fill in the rainbow array from the other two arrays, achieving a final value of: ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

Note: the other two arrays should end up empty.
Bonus: can you get your solution down to 6 lines if it's not already?
*/

const rainbow = []
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple']

rainbow.push(primaries.shift());
rainbow.push(secondaries.shift());
rainbow.push(primaries.shift());
rainbow.push(secondaries.shift());
rainbow.push(primaries.shift());
rainbow.push(secondaries.shift());

checkAnswer('5.2');

/*
5.3
Using any (or all) of the operations we've learned (one or more times), transform the array below to: ['red', 'white', 'blue']
Note: this can be done on a single line!
*/

const flag = ['blue', 'red', 'white'];
flag.push(flag.shift());

checkAnswer('5.3');

/*
5.4
Using any (or all) of the operations we've learned (one or more times), transform the array below to: ['red', 'green', 'yellow']
Note: this can be done on a single line!
*/

const stoplight = ['green', 'yellow', 'red'];
stoplight.unshift(stoplight.pop());

checkAnswer('5.4');

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
            checkVariable('lightBlues', ["turquoise", "baby blue", "sky"]);
            break;
        case '1.2':
            checkVariable('darkBlues', ["royal", "denim", "navy"]);
            break;
        case '1.3':
            checkVariable('brightColors', ["hot pink", "lime green", "aqua"]);
            break;
        case '1.4':
            checkVariable('metallics', ["bronze", ["gold", "silver"]]);
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
            checkVariable('coolColors', ['purple', 'green']);
            checkVariable('coolColor', 'blue');
            break;
        case '2.2':
            checkVariable('lightBrowns', ['beige', 'khaki']);
            checkVariable('lightBrownColor', 'tan');
            break;
        case '2.3':
            checkVariable('blues', ['aqua']);
            checkVariable('blueColor', 'teal');
            break;
        case '2.4':
            checkVariable('greens', ["jade"]);
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
            checkVariable('yellowColor', 'gold');
            break;
        case '3.2':
            checkVariable('pinks', ['watermelon', 'magenta']);
            break;
        case '3.3':
            checkVariable('purples', ['indigo']);
            checkVariable('purpleColor', 'violet');
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
            checkVariable('oranges', ['coral', 'tangerine', 'amber', 'clay']);
            break;
        case '4.2':
            checkVariable('greys', ['charcoal', 'smoke', 'slate', 'silver']);
            break;
        case '4.3':
            checkVariable('colorTemps', [
                ['warm', ['red', 'yellow', 'orange']],
                ['cool', ['purple', 'blue', 'green']]
            ]);
            break;
        case '4.4':
            checkVariable('', '');
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
        case '5.1':
            checkVariable('reds', ['scarlet', 'ruby', 'cherry', 'burgundy', 'maroon']);
            checkVariable('darkReds', []);
            break;
        case '5.2':
            checkVariable('rainbow', ['red', 'orange', 'yellow', 'green', 'blue', 'purple']);
            checkVariable('primaries', []);
            checkVariable('secondaries', []);
            break;
        case '5.3':
            checkVariable('flag', ['red', 'white', 'blue']);
            break;
        case '5.4':
            checkVariable('stoplight', ['red', 'green', 'yellow']);
            break;
        default:
            throw new Error(exercise + ' does not have an answer key.');
    }
    console.log('✅ Passed exercise ' + exercise + '! ✅\n\n');
}
