/* ______________________ PART 1 ______________________
Codewars

- Work through the katas linked in each subpart (do all your own typing, but feel free to discuss with teammates)
- After passing each kata, paste in your final solutions and uncomment trackProgress.
- You can also paste a WIP solution here for troubleshooting/collaboration.
*/

/*
1.1:
Thinkful - Logic Drills: Traffic light
https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
*/

// trackProgress('1.1');

/*
1.2:
JavaScript class-like objects
https://www.codewars.com/kata/513e1e47c600c93cef000001/train/javascript
*/

// trackProgress('1.2');

/*
1.3:
Training JS #5: Basic data types--Object
https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript
*/

// trackProgress('1.3');

/*
1.4:
Object Oriented Piracy
https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript
*/

// trackProgress('1.4');

/*
1.5:
Grasshopper - Object syntax debug
https://www.codewars.com/kata/56d8ae9237123036d3001b54/train/javascript
*/

// trackProgress('1.5');

/*
1.6:
Abbreviate a Two Word Name
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
*/

// trackProgress('1.6');


/* ______________________ PART 2: BONUS ______________________
Wow! You raced through those problems!!!

Feel free to poke around codewars and work through anything else that catches your eye. With the tools you have now, you should be able to complete _most_ of the problems listed here (and even some level 7 problems!):
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

