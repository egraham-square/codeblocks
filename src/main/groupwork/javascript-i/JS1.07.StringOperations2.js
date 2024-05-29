
/* ______________________ PART 1 ______________________
String Length
*/

/*
1.1
Change the string literal below to "green" instead of "red"
*/
const greenLength = "red".length

// checkAnswer('1.1');

/*
1.2
Set the variable below equal to the string literal's length (using the length property)
*/
const blueLength = "blue"

// checkAnswer('1.2');

/*
1.3
Set the variable below equal to the length of the string "yellow"
*/
const yellowLength = "";

// checkAnswer('1.3');

/*
1.4
Create a variable called orangeLength and set it equal to the length of the string "orange"
*/

// checkAnswer('1.4');

/*
1.5
- Set purpleColor equal to "purple"
- Set purpleLength equal to the length of the purpleColor variable
*/
const purpleColor = "";
const purpleLength = "";

// checkAnswer('1.5');

/*
1.6
- Create a variable called brownColor and set it equal to "brown"
- Create a variable called brownLength and set it equal to the length of the brownColor variable
*/

// checkAnswer('1.6');

/* ______________________ PART 2 ______________________
String Indexing
*/

/*
2.1
Change the index below so that greenLetter equals 'r'
*/

const greenLetter = "green"[0];

// checkAnswer('2.1');

/*
2.2
Change the index below so that blueLetter equals 'u'
*/

const blueColor = "blue";
const blueLetter = blueColor[0];

// checkAnswer('2.2');

/*
2.3
Change the index below so that pinkLetter equals 'k'
*/

const pinkColor = "pink";
const pinkLetter = pinkColor[0];

// checkAnswer('2.3');

/*
2.4
- Go ahead and uncomment and run this test case without changing anything
- What is the value of tealLetter? Can you explain why it's that value?
- Change the index so that tealLetter equals the last letter in tealColor
*/

const tealColor = "teal";
const tealLetter = tealColor[4];

// checkAnswer('2.4');

/*
2.5
We're trying to find the last letter in indigoColor, but our index isn't quite right.
- Can you update the index value so that it equals the last index in indigoColor?
*/

const indigoColor = "indigo";
const indigoIndex = indigoColor.length - 3;
const indigoLetter = indigoColor[indigoIndex];

// checkAnswer('2.5');

/*
2.6
- Set burgundyLetter equal to the last character in burgundyColor (use the length property!)
*/

const burgundyColor = "burgundy";
const burgundyLetter = "";

// checkAnswer('2.6');

/*
2.7
Let's find the second-to-last letter in "turquoise"
- Create a variable called turquoiseColor and set it equal to "turquoise"
- Create a variable called turquoiseLetter and set it equal to the second-to-last letter in turquoiseColor (use the length property!)
*/

// checkAnswer('2.7');

/* ______________________ PART 3 ______________________
Bonus
*/

/*
3.1
Let's build "sqillup" using just the letters from the colors below.
- We've added the "s" so far. Can you append the remaining letters? (use compound assignment!)
*/

const aquamarineColor = "aquamarine";
const periwinkleColor = "periwinkle";
const silverColor = "silver";

let programName = "";
programName += silverColor[0];

// checkAnswer('3.1');

/*
3.2
Let's build "square" using just the letters from the same colors as above. But this time, let's use simple string concatenation (no compound assignment)
- Create a variable called companyName
- Using string concatenation, combine letters from the strings above to get companyName equal to "square"
*/

// checkAnswer('3.2');

/*
3.3
We want violetLetter to equal "o", but our index isn't quite right.
- Using either compound assignment or the increment/decrement operator, can you update the index so that violetLetter is "o"?
*/

const violetColor = "violet";
let violetIndex = 1;

const violetLetter = violetColor[violetIndex];

// checkAnswer('3.3');

/*
3.4
We want lavenderLetter to equal "n", but our index isn't quite right.
- Can you change the 1 in the index assignement so that lavenderLetter is "n"?
*/

const lavenderColor = "lavender";
const lavenderIndex = lavenderColor.length - 1;

const lavenderLetter = lavenderColor[lavenderIndex];

// checkAnswer('3.4');

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

function variableEqualsValue(variableName, expectedValue) {
    if (isDefined(variableName) && eval(variableName) == expectedValue) {
        return true;
    }
    return false;
}

function checkVariable(variableName, expectedValue) {
    var variableValue = eval(variableName);

    if (!variableEqualsValue(variableName, expectedValue)) {
        throw new Error(
            'Expected ' + variableName + ' to be: ' + expectedValue + ' but was: ' + variableValue
        );
    }
    console.log(variableName + ' equals: ' + variableValue)
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

function checkAnswer(exercise) {
    switch (exercise) {
        case '1.1':
            checkVariable('greenLength', 'green'.length);
            break;
        case '1.2':
            checkVariable('blueLength', 'blue'.length);
            break;
        case '1.3':
            checkVariable('yellowLength', 'yellow'.length);
            break;
        case '1.4':
            checkVariable('orangeLength', 'orange'.length);
            break;
        case '1.5':
            checkVariable('purpleColor', 'purple')
            checkVariable('purpleLength', purpleColor.length);
            break;
        case '1.6':
            checkVariable('brownColor', 'brown');
            checkVariable('brownLength', brownColor.length);
            break;
        case '1.7':
            checkVariable('', '');
            break;
        case '1.8':
            checkVariable('', '');
            break;
        case '2.1':
            checkVariable('greenLetter', "green"[1]);
            break;
        case '2.2':
            checkVariable('blueLetter', blueColor[2]);
            break;
        case '2.3':
            checkVariable('pinkLetter', pinkColor[3]);
            break;
        case '2.4':
            checkVariable('tealLetter', tealColor[3]);
            break;
        case '2.5':
            checkVariable('indigoIndex', indigoColor.length - 1);
            checkVariable('indigoLetter', indigoColor[indigoIndex]);
            break;
        case '2.6':
            checkVariable('burgundyLetter', burgundyColor[burgundyColor.length - 1]);
            break;
        case '2.7':
            checkVariable('turquoiseColor', 'turquoise');
            checkVariable('turquoiseLetter', turquoiseColor[turquoiseColor.length - 2]);
            break;
        case '2.8':
            checkVariable('', '');
            break;
        case '3.1':
            checkVariable('programName', 'sqillup');
            break;
        case '3.2':
            checkVariable('companyName', 'square');
            break;
        case '3.3':
            checkVariable('violetIndex', 2);
            checkVariable('violetLetter', violetColor[violetIndex]);
            break;
        case '3.4':
            checkVariable('lavenderLetter', lavenderColor[lavenderColor.length - 4]);
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
            checkVariable('', '');
            break;
        case '4.2':
            checkVariable('', '');
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
