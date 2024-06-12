/* ______________________ PART 1 ______________________
And Operator
*/

/*
1.1
You can use the And Operator with more than two values!
- Add a log line and check the current value of varA.
- It's false, but we want it to be true! Can you make it true by swapping out one of the booleans used in its initialization?
*/

const skyIsBlue = true;
const waterIsWet = true;
const earthIsRound = true;
const pigsCanFly = false;

const varA = skyIsBlue && waterIsWet && pigsCanFly;

// checkAnswer('1.1');

/*
1.2
Backstory:
The pool isn't open at night! We want our function to only return true if it's summer AND it's day time

Task:
- Correct the function below by adding the isDayTime parameter to the if condition

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: (true, true) => expected output: 'pool is open!'
- input: (true, false) => expected output: 'pool is closed'
- input: (false, false) => expected output: 'pool is closed'
*/

function isPoolOpen(isSummer, isDayTime) {
    if (isSummer) {
        return 'pool is open!';
    }
    return 'pool is closed';
}

// trackProgress('1.2');

/*
1.3
Backstory:
We want a function that tells us if a given date is New Years Day

Task:
- fill in the body of the function below so that if the month equals January AND the dayOfMonth equals 1, we return "it's the new year!"
- if it's not New Years Day, return "not the new year",

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: ('December', 31) => expected output: 'not the new year'
- input: ('January', 2) => expected output: 'not the new year'
- input: ('January', 1) => expected output: 'it's the new year!'

Hint:
- You can use the And operator on expressions (not just variables). Example:
    if (coolVar > 3 && coolVar < 9) {...}
*/

function isNewYears(month, dayOfMonth) {}

// trackProgress('1.3');
/* ______________________ PART 2 ______________________
Or Operator
*/

/*
2.1
You can use the Or Operator with more than two values!
- Add a log line and check the current value of varB.
- It's false, but we want it to be true! Can you make it true by swapping out one of the booleans used in its initialization?
*/

const earthIsFlat = false;
const skyIsRed = false;
const cowsCanFly = false;
const grassIsGreen = true;

const varB = earthIsFlat || skyIsRed || cowsCanFly;

// checkAnswer('2.1');

/*
2.2
Backstory:
We want our function to tell us if it's the weekend, but we're missing something!

Task:
- Update the function below so that it returns "it's the weekend!" if it's Saturday OR Sunday (using the Or Operator!)

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 'Saturday' => expected output: 'it's the weekend!'
- input: 'Sunday' => expected output: 'it's the weekend!'
- input: 'Monday' => expected output: 'not the weekend :('
*/

function isWeekend(dayOfWeek) {
    if (dayOfWeek == 'Saturday') {
        return "it's the weekend!";
    }
    return 'not the weekend :(';
}

// trackProgress('2.2');

/*
2.3
Backstory:
We want a function that tells us if a given month is in Winter

Task:
- fill in the body of the function below so that if the month equals December, January, or February, we return "winter time!!"
- if it's not winter, return "not winter time"

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 'December' => expected output: "winter time!!"
- input: 'January' => expected output: "winter time!!"
- input: 'February' => expected output: "winter time!!"
- input: 'March' => expected output: "not winter time"
*/

function isWinter(month) {}

// trackProgress('2.3');

/* ______________________ PART 3 ______________________
Else & Else If Statements
*/

/*
3.1
Backstory:
We have a function that gives us a specific message depending on the day of the week, but we want to add a message for monday.

Task:
- Add another else if statement to the function below so that Mondays generate the message "yuck, monday"

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 'Saturday' => expected output: 'it's the weekend!'
- input: 'Friday' => expected output: 'it's almost the weekend!'
- input: 'Wednesday' => expected output: 'humpday'
- input: 'Monday' => expected output: 'yuck, monday'
- input: 'Tuesday' => expected output: 'at least it's not monday'

Note:
- This function would work the exact same if we only used if statements without any else if or else statements.
- Else & Else If are only handy when each statement doesn't have a return (since return stops the execution of the rest of the code) and when a given input fits multiple conditions.
- We'll demonstrate this next!
*/

function getDailyMessage(dayOfWeek) {
    if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
        return "it's the weekend!";
    } else if (dayOfWeek === 'Friday') {
        return "it's almost the weekend!";
    } else if (dayOfWeek === 'Wednesday') {
        return 'humpday!';
    } else return "at least it's not monday";
}

// trackProgress('3.1');

/*
3.2
Backstory:
We have a function that outputs a message based on a given age. We only want a single message for a given age.
We'll tweak this function to demonstrate when else if & else are useful.

Task:
- Call the function with age 5. Log the result.
- Remove the returns and instead directly log each message (using console.log within each if statement)
- Run your code again (now that's we're logging within the function, you no longer need to log the result of your function call -- since we're not returning anything, you'll see "undefined" if you don't remove the outer logging)
- Notice how all of the logs printed! Explain to your teammates why this happened.
- Convert the middle three if statements to else if statements and convert the final return to an else statement.
- Re-run the code and observe the output now (still from the same function call for age 5). Explain to your teammates why the results are what they are.

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: '5' => expected output (should be logged from the function): 'you're not a teenager yet!'
- input: '34' => expected output (should be logged from the function): 'you can't be president yet!'
- input: '65' => expected output (should be logged from the function): 'congrats! you're an elder!'
*/

function checkAge(age) {
    if (age <= 12) {
        return "you're not a teenager yet!";
    }
    if (age < 18) {
        return "you can't vote yet!";
    }
    if (age < 35) {
        return "you can't be president yet!";
    }
    if (age < 65) {
        return "you're not an elder yet!";
    }
    return "congrats! you're an elder!";
}

// trackProgress('3.2');

/* ______________________ PART 4 ______________________
Bonus
*/

/*
4.1
Backstory:
We want a function that checks if it's a holiday, a weekend, or a PTO day and tells us if we need to go to work or not.

Task:
- Fill in the condition for the if statement below so that we return "Gotta go to work!" if it's NOT a holiday, and NOT a weekend, and NOT a PTO day.

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: (false, false, false) => expected output: 'gotta go to work!'
- input: (true, false, false) => expected output: 'sleep in!'
- input: (false, true, false) => expected output: 'sleep in!'
- input: (false, false, true) => expected output: 'sleep in!'
*/

function goToWork(isCompanyHoliday, isWeekend, isPtoDay) {
    if (null) {
        return 'gotta go to work!';
    }
    return 'sleep in!';
}

// trackProgress('4.1');

/*
4.2
Backstory:
We want a function that tells us if a given month is in the Summer

Task:
- Create a function called isSummer that takes in a month parameter
- If the month is June, July, or August, return true, otherwise return false

Testing:
- Use the following data to check your code
- input: 'June' => expected output: true
- input: 'July' => expected output: true
- input: 'August' => expected output: true
- input: 'September' => expected output: false
*/

// trackProgress('4.2');

/*
4.3
Backstory:
We want to know how many days we could go to the pool in a given month.
The pool is open every day during the summer, but closed other than that.

We already know how many days are in a given month (see test cases for sample input)

Task:
- Create a function called countPoolDays that takes in an argument called monthAndDays (this will be an array containing the name of the month and the number of days in that month)
- If the month is in summer, return a message that has the number of days concatenated with " pool days" (see test cases for output format)
- Otherwise, return the message "No pool days!"

Hints:
- Use the isSummer function you already created!
- If you don't remember how to access the values in array, see the section 'Access an Array item using the index position' of this article:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#common_operations

Testing:
- Use the following data to check your code
- input: ['January', 31]  => expected output: "No pool days!"
- input: ['June', 30]  => expected output: "30 pool days"
- input: ['July', 31]  => expected output: "31 pool days"
- input: ['August', 31]  => expected output: "31 pool days"
- input: ['September', 30]  => expected output: "No pool days!"
*/

// trackProgress('4.3');

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
            checkVariable('varA', true);
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
            checkVariable('varB', true);
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
