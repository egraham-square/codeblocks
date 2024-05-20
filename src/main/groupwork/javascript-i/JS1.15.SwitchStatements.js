/* ______________________ PART 1 ______________________
Switch Statements
*/

/*
1.1
Replace null below with a call to the getShoes function (with the correct argument) so that shoes is equal to "snow shoes"
*/

function getShoes(weather) {
    switch (weather) {
        case 'Raining':
            return 'rain boots';
        case 'Snowing':
            return 'snow shoes';
        case 'Sunny':
            return 'sandals';
    }
}

const shoes = null;
// checkAnswer('1.1');

/*
1.2
We want a function that tells us the temp for a given season, but we're missing Fall! Fall is 'cool'.

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 'Fall' => expected output: 'cool'
*/

function getSeasonTemp(season) {
    switch (season) {
        case 'Winter':
            return 'cold';
        case 'Spring':
            return 'warm';
        case 'Summer':
            return 'hot';
    }
}

// trackProgress('1.2');

/*
1.3
Let's write a function that tells us what type of shoe we should wear for a given sport
- Create a function called getSportShoes that has a parameter called sport
- Using a switch statement, fill in the body of the function so that all of the test cases below pass

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 'Soccer' => expected output: 'cleats'
- input: 'Hockey' => expected output: 'ice skates'
- input: 'Basketball' => expected output: 'sneakers'
- input: 'Tennis' => expected output: 'tennis shoes'
*/

// trackProgress('1.3');

/* ______________________ PART 2 ______________________
Combining Options
*/

/*
2.1
We want a function that tells us the temp for a given month, but we're missing a few months!
- Without adding any new return lines, can you update the function below so that it correctly handles 'March', 'June', 'September', and 'December'?
- Reference the test cases for the desired behavior

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 'March' => expected output: 'cold'
- input: 'June' => expected output: 'warm'
- input: 'September' => expected output: 'hot'
- input: 'December' => expected output: 'cool'
*/

function getMonthlyTemp(month) {
    switch (month) {
        case 'January':
        case 'February':
            return 'cold';
        case 'April':
        case 'May':
            return 'warm';
        case 'July':
        case 'August':
            return 'hot';
        case 'October':
        case 'November':
            return 'cool';
    }
}

// trackProgress('2.1');

/*
2.2
We have a function that tells us what hat to wear for a given location, but it could be a little more concise.
- Combine cases that have the same return value (the final function should only have 4 return statements)

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 'Construction site' => expected output: 'hard hat'
- input: 'Factory' => expected output: 'hard hat'
- input: 'Ballroom' => expected output: 'top hat'
- input: 'Theatre' => expected output: 'top hat'
*/

function getHatForLocation(location) {
    switch (location) {
        case 'Construction site':
            return 'hard hat';
        case 'Ballroom':
            return 'top hat';
        case 'Beach':
            return 'sun hat';
        case 'Factory':
            return 'hard hat';
        case 'France':
            return 'beret';
        case 'Theatre':
            return 'top hat';
    }
}

// trackProgress('2.2');

/*
2.3
We want a function that tells us what kind of shirt we should wear based on the temperature
- Create a function called getShirt that takes in a parameter for the temperature
- Using a switch statement (that has two returns only!) fill in the body of the function to pass the test cases below

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 'warm' => expected output: 'short sleeves'
- input: 'hot' => expected output: 'short sleeves'
- input: 'cool' => expected output: 'long sleeves'
- input: 'cold' => expected output: 'long sleeves'
*/

// trackProgress('2.3');

/* ______________________ PART 3 ______________________
Default
*/

/*
3.1
Replace null below with a call to the getPants function (with an appropriate argument) so that pants is equal to "jeans"
*/

function getPants(location) {
    switch (location) {
        case 'home':
            return 'sweat pants';
        case 'office':
            return 'real pants';
        case 'gym':
            return 'gym shorts';
        default:
            return 'jeans';
    }
}

const pants = null;

// checkAnswer('3.1');

/*
3.2
We have a function that goes from a given month's number to corresponding name, but we'd like to add a default option
- Add a default option that returns 'Not a real month!' if hit.

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 13 => expected output: 'Not a real month!'
- input: -1 => expected output: 'Not a real month!'
- input: 12 => expected output: 'December'
*/

function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
    }
}

// trackProgress('3.2');

/* ______________________ PART 4 ______________________
If vs Switch
*/

/*
4.1
Refactor the body of the function below to use a switch statement instead of if statements

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 'Morning' => expected output: 'Breakfast'
- input: 'Afternoon' => expected output: 'Lunch'
- input: 'Evening' => expected output: 'Dinner'
- input: 'Twilight' => expected output: 'Snacktime!'
*/

function getMeal(partOfDay) {
    if (partOfDay === 'Morning') {
        return 'Breakfast';
    }
    if (partOfDay === 'Afternoon') {
        return 'Lunch';
    }
    if (partOfDay === 'Evening') {
        return 'Dinner';
    }
    return 'Snacktime!';
}

// trackProgress('4.1');

/*
4.2
Refactor the body of the function below to use a switch statement instead of if statements

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 'February' => expected output: 28
- input: 'April' => expected output: 30
- input: 'January' => expected output: 31
- input: 'Wednesday' => expected output: 0
*/

function getNumberDays(month) {
    if (month === 'February') {
        return 28;
    }
    if (
        month === 'April' ||
        month === 'June' ||
        month === 'September' ||
        month === 'November'
    ) {
        return 30;
    }
    if (
        month === 'January' ||
        month === 'March' ||
        month === 'May' ||
        month === 'July' ||
        month === 'August' ||
        month === 'October' ||
        month === 'December'
    ) {
        return 31;
    }
    return 0;
}

// trackProgress('4.2');

/* ______________________ PART 5 ______________________
Bonus
*/

/*
5.1
In real code, it's extremely common to call functions from within other functions and to use the return value from one function as the argument to another.
So let's practice that!
- Create a function called getShirtForMonth that takes in a month parameter and returns the type of shirt you should wear for that month, based on the monthly temp.
- We know we want to wear long sleeves in the cool and cold months and short sleeves in the warm and hot months.
- Use two of the functions from above to make it happen!

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 'March' => expected output: 'long sleeves'
- input: 'June' => expected output: 'short sleeves'
- input: 'September' => expected output: 'short sleeves'
- input: 'December' => expected output: 'long sleeves'

Hint:
You don't need to write any new switch statements
*/

// trackProgress('5.1');

/*
5.2
That was so fun, let's do it again!
- Create a function called daysFromMonthNumber that has a monthNumber parameter and returns how many days are in that month
- Use two of the functions above to make it happen!

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 2 => expected output: 28
- input: 4 => expected output: 30
- input: 1 => expected output: 31
- input: 15 => expected output: 0

Bonus Bonus: Can you refactor your code so that the function body is just a single line?
*/

// trackProgress('5.2');

/*
5.3
Let's practice switch statements one more time!

We've been tasked by IMDB to convert their star rating system to a thumbs up system. The conversion is shown below:

☆☆☆☆☆ => 👎👎
⭐☆☆☆☆ => 👎
⭐⭐☆☆☆ => 👎
⭐⭐⭐☆☆ => 👍
⭐⭐⭐⭐☆ => 👍
⭐⭐⭐⭐⭐ => 👍👍

- Write a function that takes in the number of stars and returns the appropriate emoji(s).
- If an invalid number of stars is passed in, return the warning sign ⚠️.

Hint:
- You'll need to treat emojis just like any other string text and wrap them in quotes

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 0 => expected output: '👎👎'
- input: 1 => expected output: '👎'
- input: 2 => expected output: '👎'
- input: 3 => expected output: '👍'
- input: 4 => expected output: '👍'
- input: 5 => expected output: '👍👍'
- input: 10 => expected output: '⚠️'
*/

// trackProgress('5.3');

/*
5.4
The return keyword exits the function, whereas the break keyword just exits the switch statement.

We want a function that tells us what mealtime it is based on the part of day. But we don't just want the meal, we want a full message!
- Replace the return lines below with break statements to ensure we return the message instead of just the meal!

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 'Morning' => expected output: "It's Breakfast time!"
- input: 'Twilight' => expected output: "It's Snack time!"
*/

function getMealMessage(partOfDay) {
    let meal;
    switch (partOfDay) {
        case 'Morning':
            meal = 'Breakfast';
            return meal;
        case 'Afternoon':
            meal = 'Lunch';
            return meal;
        case 'Evening':
            meal = 'Dinner';
            return meal;
        default:
            meal = 'Snack';
            return meal;
    }
    const message = "It's " + meal + " time!";
    return message;
}

// trackProgress('5.4');

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
            checkVariable('shoes', 'snow shoes');
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
            checkVariable('pants', 'jeans');
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
