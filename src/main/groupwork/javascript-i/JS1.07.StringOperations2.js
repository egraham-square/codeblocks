/* ______________________ PART 1 ______________________
String Length
*/

/*
1.1
Change the string literal below to "green" instead of "red"
*/
const GREEN_LENGTH = "red".length

// checkAnswer('1.1');

/*
1.2
Set the variable below equal to the string literal's length (using the length property)
*/
const BLUE_LENGTH = "blue"

// checkAnswer('1.2');

/*
1.3
Set the variable below equal to the length of the string "yellow"
*/
const YELLOW_LENGTH = "";

// checkAnswer('1.3');

/*
1.4
Create a variable called ORANGE_LENGTH and set it equal to the length of the string "orange"
*/

// checkAnswer('1.4');

/*
1.5
- Set PURPLE_COLOR equal to "purple"
- Set PURPLE_LENGTH equal to the length of the PURPLE_COLOR variable
*/
const PURPLE_COLOR = "";
const PURPLE_LENGTH = "";

// checkAnswer('1.5');

/*
1.6
- Create a variable called BROWN_COLOR and set it equal to "brown"
- Create a variable called BROWN_LENGTH and set it equal to the length of the BROWN_COLOR variable
*/

// checkAnswer('1.6');

/* ______________________ PART 2 ______________________
String Indexing
*/

/*
2.1
Change the index below so that GREEN_LETTER equals 'r'
*/

const GREEN_LETTER = "green"[0];

// checkAnswer('2.1');

/*
2.2
Change the index below so that BLUE_LETTER equals 'u'
*/

const BLUE_COLOR = "blue";
const BLUE_LETTER = BLUE_COLOR[0];

// checkAnswer('2.2');

/*
2.3
Change the index below so that PINK_LETTER equals 'k'
*/

const PINK_COLOR = "pink";
const PINK_LETTER = PINK_COLOR[0];

// checkAnswer('2.3');

/*
2.4
- Go ahead and uncomment and run this test case without changing anything
- What is the value of TEAL_LETTER? Can you explain why it's that value?
- Change the index so that TEAL_LETTER equals the last letter in TEAL_COLOR
*/

const TEAL_COLOR = "teal";
const TEAL_LETTER = TEAL_COLOR[4];

// checkAnswer('2.4');

/*
2.5
We're trying to find the last letter in INDIGO_COLOR, but our index isn't quite right.
- Can you change the 3 in the index assignment so that INDIGO_LETTER is "o"?
*/

const INDIGO_COLOR = "indigo";
const INDIGO_INDEX = INDIGO_COLOR.length - 3;
const INDIGO_LETTER = INDIGO_COLOR[INDIGO_INDEX];

// checkAnswer('2.5');

/*
2.6
- Set BERGUNDY_LETTER equal to the last character in BERGUNDY_COLOR (use the length property!)
*/

const BERGUNDY_COLOR = "burgundy";
const BERGUNDY_LETTER = "";

// checkAnswer('2.6');

/*
2.7
Let's find the second-to-last letter in "turquoise"
- Create a variable called TURQUOISE_COLOR and set it equal to "turquoise"
- Create a variable called TURQUOISE_LETTER and set it equal to the second-to-last letter in TURQUOISE_COLOR (use the length property!)
*/

// checkAnswer('2.7');

/* ______________________ PART 3 ______________________
Bonus
*/

/*
3.1
Let's build "codeblocks" using just the letters from the colors below.
- We've added the "co" so far. Can you append the remaining letters? (use compound assignment, not concatenation!)
- Feel free to experiment with using the length property in the indexes!
*/

const SKY_BLUE_COLOR = "sky blue"
const PEACH_COLOR = "peach";
const GOLD_COLOR = "gold"

let programName = "";
programName += PEACH_COLOR[3];
programName += GOLD_COLOR[1];

// checkAnswer('3.1');

/*
3.2
Let's build "square" using just the letters from the colors below. But this time, let's use simple string concatenation (no compound assignment)
- Create a variable called orgName
- Using string concatenation, combine letters from the strings above to get orgName equal to "square"
*/

const AQUAMARINE_COLOR = "aquamarine";
const SILVER_COLOR = "silver";

// checkAnswer('3.2');

/*
3.3
We want violetLetter to equal "o", but our index isn't quite right.
- Using either compound assignment or the increment/decrement operator, can you update the index so that violetLetter is "o"?
*/

const VIOLET_COLOR = "violet";
let violetIndex = 1;

const violetLetter = VIOLET_COLOR[violetIndex];

// checkAnswer('3.3');

/*
3.4
We want lavenderLetter to equal "n", but our index isn't quite right.
- Can you change the 1 in the index assignment so that lavenderLetter is "n"?
*/

const LAVENDER_COLOR = "lavender";
const LAVENDER_INDEX = LAVENDER_COLOR.length - 1;

const lavenderLetter = LAVENDER_COLOR[LAVENDER_INDEX];

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
            checkVariable('GREEN_LENGTH', 'green'.length);
            break;
        case '1.2':
            checkVariable('BLUE_LENGTH', 'blue'.length);
            break;
        case '1.3':
            checkVariable('YELLOW_LENGTH', 'yellow'.length);
            break;
        case '1.4':
            checkVariable('ORANGE_LENGTH', 'orange'.length);
            break;
        case '1.5':
            checkVariable('PURPLE_COLOR', 'purple')
            checkVariable('PURPLE_LENGTH', PURPLE_COLOR.length);
            break;
        case '1.6':
            checkVariable('BROWN_COLOR', 'brown');
            checkVariable('BROWN_LENGTH', BROWN_COLOR.length);
            break;
        case '1.7':
            checkVariable('', '');
            break;
        case '1.8':
            checkVariable('', '');
            break;
        case '2.1':
            checkVariable('GREEN_LETTER', "green"[1]);
            break;
        case '2.2':
            checkVariable('BLUE_LETTER', BLUE_COLOR[2]);
            break;
        case '2.3':
            checkVariable('PINK_LETTER', PINK_COLOR[3]);
            break;
        case '2.4':
            checkVariable('TEAL_LETTER', TEAL_COLOR[3]);
            break;
        case '2.5':
            checkVariable('INDIGO_INDEX', INDIGO_COLOR.length - 1);
            checkVariable('INDIGO_LETTER', INDIGO_COLOR[INDIGO_INDEX]);
            break;
        case '2.6':
            checkVariable('BERGUNDY_LETTER', BERGUNDY_COLOR[BERGUNDY_COLOR.length - 1]);
            break;
        case '2.7':
            checkVariable('TURQUOISE_COLOR', 'turquoise');
            checkVariable('TURQUOISE_LETTER', TURQUOISE_COLOR[TURQUOISE_COLOR.length - 2]);
            break;
        case '2.8':
            checkVariable('', '');
            break;
        case '3.1':
            checkVariable('programName', 'codeblocks');
            break;
        case '3.2':
            checkVariable('orgName', 'square');
            break;
        case '3.3':
            checkVariable('violetIndex', 2);
            checkVariable('violetLetter', VIOLET_COLOR[violetIndex]);
            break;
        case '3.4':
            checkVariable('lavenderLetter', LAVENDER_COLOR[LAVENDER_COLOR.length - 4]);
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
