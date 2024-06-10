/* ______________________ PART 1 ______________________
Leveraging Boolean Properties
*/

/*
1.1
We have a function that tells us what to do for dinner, but it's overly complex right now. Can you simplify it?
- Refactor out any redundant code

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: (true, true) => expected output: 'home cooked meal!'
- input: (true, false) => expected output: 'takeout'
- input: (false, true) => expected output: 'takeout'
*/

function getDinner(haveTimeToCook, haveEnergyToCook) {
    if (haveTimeToCook == true && haveEnergyToCook == true) {
        return 'home cooked meal!';
    }
    return 'takeout';
}

// trackProgress('1.1');

/*
1.2
We have a function that tells us what table to sit at, but it's overly complex right now. Can you simplify it?
- Refactor out any redundant code

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 10 => expected output: "kid's table"
- input: 20 => expected output: "adult's table"
*/

function getTable(age) {
    if (age < 15 === true) {
        return "kid's table";
    }
    return "adult's table";
}

// trackProgress('1.2');

/*
1.3
We have a function that tells us what table to sit at, but it's overly complex right now. Can you simplify it?
- Refactor out any redundant code

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 10 => expected output: false
- input: 20 => expected output: true
*/

function canSitAtAdultTable(age) {
    if (age >= 15) {
        return true;
    }
    return false;
}

// trackProgress('1.3');

/*
1.4
We have a function that tells us if we should cook dinner or not, but it's overly complex right now. Can you simplify it?
- Refactor out any redundant code (the final code shouldn't have any literal true or false values in it!)

Hint:
Remember that the ! symbol reverses a boolean value

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: (true, true) => expected output: false
- input: (true, false) => expected output: false
- input: (false, true) => expected output: false
- input: (false, false) => expected output: true

Bonus:
There are a lot of different ways to do this!
- If you have an OR in your final code, see if you can accomplish the same behavior with an AND (and vice versa!)
*/

function shouldCookDinner(tired, busy) {
    if (tired === true || busy === true) {
        return false;
    }
    return true;
}

// trackProgress('1.4');

/*
1.5
You should eat pie whenever you want to and whenever the pie hasn't all been eaten!
- Write a function called shouldEatPie that has two parameters: wantPie and pieIsGone
- Fill in the function body so that the test cases pass

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: (true, true) => expected output: false
- input: (true, false) => expected output: true
- input: (false, true) => expected output: false
- input: (false, false) => expected output: false
*/

// trackProgress('1.5');

/* ______________________ PART 2 ______________________
Return Early Pattern
*/

/*
2.1
Let's practice returning early!
- Instead of creating a drink variable and assigning it in each case, just directly return the value

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 10 => expected output: 'coffee'
- input: 14 => expected output: 'sweat tea'
- input: 20 => expected output: 'chomomile tea'
- input: 16 => expected output: 'water'

Bonus:
When a given value could satisfy multiple conditions, we have to use if/else if/else to prevent more than one case from being executed -- that is unless you return early!
Since we're returning early now, we don't need else if and else!
- Can you replace the else if statements with if statements and replace the else statement with a simple return?
*/

function getDrink(hourOfDay) {
    let drink;
    if (hourOfDay < 12) {
        drink = 'coffee';
    } else if (hourOfDay <= 14) {
        drink = 'sweat tea';
    } else if (hourOfDay >= 18 && hourOfDay <= 20) {
        drink = 'chomomile tea';
    } else {
        drink = 'water';
    }
    return drink;
}

// trackProgress('2.1');

/*
2.2
Backstory:
Okay but what about scenarios where we want to do some final action before returning?
In the function below, you can see that we return a complete message about the meal at the end.
How could we accomplish that while still returning early?

Option 1) Repeat the code
We could return <"I'm going to eat " + meal + " for " + mealTime> in each case, but we'd be repeating ourselves a lot, which we don't like doing!

Option 2) Multiple functions!
In these situation it's usually best to use multiple functions! We could have one function that tells us the meal, and another that constructs the message.
(a good function is a focused one!)

Task:
- Create another function called getMeal that takes in a mealTime parameter
- Move the switch logic from getMealMessage into getMeal, but instead of using the meal variable and break statements, just return the value in each case
- In getMealMessage, replace the switch logic with a call to getMeal, assigning the return value to a const named "meal"

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- getMealMessage('Breakfast') => expected output: 'I'm going to eat pancakes for Breakfast'
- getMealMessage('Lunch') => expected output: 'I'm going to eat a sandwich for Lunch'
- getMealMessage('Dinner') => expected output: 'I'm going to eat korma for Dinner'
- getMealMessage('Snacktime') => expected output: 'I'm going to eat hummus for Snacktime'
*/

function getMealMessage(mealTime) {
    let meal;
    switch (mealTime) {
        case 'Breakfast':
            meal = 'pancakes';
            break;
        case 'Lunch':
            meal = 'a sandwich';
            break;
        case 'Dinner':
            meal = 'korma';
            break;
        default:
            meal = 'hummus';
    }
    return "I'm going to eat " + meal + ' for ' + mealTime;
}

// trackProgress('2.2');

/* ______________________ PART 3 ______________________
Bonus - Array practice
*/

/*
3.1
Backstory:
We have a new recipe book that has 5-ingrediant meals.
We want to know how much each meal would cost based on those ingredients.
Thankfully, we know the price of each ingredient so this should be easy!

Task:
- Write a function that takes in a multidimensional array, with each subarray containing an ingredient and a price (see test data for example)
- The function should add up the price compononent of each element in the array and return the sum prefixed with a dollar sign.

Assumptions:
- The input will always have exactly 5 elements

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)

const blackBeanBurgerIngredients = [['buns', 4], ['black bean patties', 5], ['lettuce', 2], ['cheese', 6], ['bbq sauce', 2]];
const ramenIngredients = [['ramen noodles', 1], ['broth', 2], ['eggs', 3], ['green onion', 1], ['mushrooms', 3]];

- input: blackBeanBurgerIngredients => expected output: $19
- input: ramenIngredients => expected output: $10
*/

// trackProgress('3.1');

/* ______________________ PART 4 ______________________
Bonus - String practice
WARNING: THIS IS HARD! (but you've got it!)
*/

/*
4.1
Backstory:
We're not made of money, so we can only make recipes that cost less than our budget for that shopping trip.
Let's write a function that tells us whether or not we can afford a given recipe

Task:
- Write a function that takes in an ingredient list (in the same format as above) and a budget
- If the sum of the ingredients cost more than the budget, return false, otherise return true
- Use the function from above to calculate the cost

Hint:
The function above returns a string, but we need it to be a number in order to compare it to our budget
You'll need to strip the $ off and then convert the string to an int.

- See the second example in the JavaScript Demo section of this article for how to remove leading characters from a string:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

- See the first entry in the Function Syntax section of this article for an easy way to convert a string to a number:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#function_syntax

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)

const lasangaIngredients = [['lasagna noodles', 2], ['marinara', 4], ['red bell pepper', 2], ['mozzarella', 5], ['ricotta', 4]];
const tacoIngredients = [['tortillas', 2], ['black beans', 1], ['cotija', 3], ['pickled onion', 4], ['lime', 1]];

- input: (lasangaIngredients, 15) => expected output: false
- input: (tacoIngredients, 13) => expected output: true
*/

// trackProgress('4.1');

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

