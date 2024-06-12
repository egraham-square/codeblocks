/* ______________________ PART 1 ______________________
Codewars Practice: Switch Statements, Functions, Control Flow, General Review

- Work through the katas linked in each subpart (do all your own typing, but feel free to discuss with teammates)
- After passing each kata, paste in your final solutions and uncomment trackProgress.
- You can also paste a WIP solution here for troubleshooting/collaboration.
*/

/*
1.1:
Get Planet Name By ID
https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript
*/

// trackProgress('1.1');

/*
1.2:
L1: Set Alarm
https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript
*/

// trackProgress('1.2');

/*
1.3:
The Feast of Many Beasts
https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

Hint: Check the String documentation for useful functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

// trackProgress('1.3');

/*
1.4:
Basic Mathematical Operations
https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
*/

// trackProgress('1.4');

/*
1.5:
Switch it Up!
https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript
*/

// trackProgress('1.5');

/*
1.6:
Will there be enough space?
https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
*/

// trackProgress('1.6');

/*
1.7:
Grasshopper - Personalized Message
https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript
*/

// trackProgress('1.7');

/*
1.8:
Transportation on vacation
https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
*/

// trackProgress('1.8');

/*
1.9:
Grasshopper - Grade book
https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
*/

// trackProgress('1.9');


/*
1.10:
Rock Paper Scissors!
https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
*/

// trackProgress('1.10');

/* ______________________ PART 2: BONUS ______________________
Wow! You raced through those problems!!!

Feel free to poke around codewars and work through anything else that catches your eye. With the tools you have now, you should be able to complete _most_ of the problems listed here:
https://www.codewars.com/kata/search/javascript?q=&r[]=-8&beta=false&order_by=satisfaction_percent%20desc,total_completed%20desc

Skip any that mention going through all of the elements in an array or a string -- those require loops, which we haven't covered yet.
*/

/*
2.1:
<Problem Title>
<Codewars Link>
*/

// trackProgress('2.1');

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
            checkVariable('', '');
            break;
        case '2.2':
            checkVariable('', '');
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
            checkVariable('', '');
            break;
        case '3.2':
            checkVariable('', '');
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

