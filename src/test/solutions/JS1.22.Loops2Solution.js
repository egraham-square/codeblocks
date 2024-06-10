/* ______________________ PART 1 ______________________
Nested For Loops
*/

/*
1.1
We want to buy some cookies from the store, but nothing fancy. We want the classic version of each type of cookie.
We're trying go through each item on each shelf and put any in the cart that have "classic" in the name, but our code isn't quite right!
Can you fix it?

Hint:
- We're currently checking to see if the cookie name equals 'classic', when we actually want to find any that include the string 'classic'
- See this article for how to check if a string contains another string: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

Testing:
- cookiesInCart should equal: ['classic oreos', 'chips ahoy classic']
*/

const cookieShelves = [
    ['classic oreos', 'vanilla oreos', 'double stuffed oreos', 'confetti oreos'],
    ['chips ahoy minis', 'chips ahoy reeses', 'chips ahoy classic'],
];

const cookiesInCart = [];

for (let shelf = 0; shelf < cookieShelves.length; shelf++) {
    for (let spot = 0; spot < cookieShelves[shelf].length; spot++) {
        let cookie = cookieShelves[shelf][spot];
        if (cookie === 'classic') {
            cookiesInCart.push(cookie);
        }
    }
}

// trackProgress('1.1');

/*
1.2
We need to pick up some crackers from the store, but there are too many choices!
To help us choose, we decide to just grab every other cracker box, starting from the bottom shelf and moving up

Can you update the nested For Loop below accordingly?

Hint:
- For the inner loop, you only need to change the final expression
- For the outer loop, you'll need to change the initialization statement, the condition statement, and the final expression

Testing:
- crackersInCart should equal:
    [
      'mini saltines',
      'gluten free saltines',
      'garden herb triscuits',
      'white cheddar cheezits',
      'honey grahams',
      'original grahams',
    ]
*/

const crackerShelves = [
    ['honey grahams', 'chocolate grahams', 'original grahams'],
    ['white cheddar cheezits', 'extra toasty cheezits'],
    ['garden herb triscuits'],
    ['mini saltines', 'original saltines', 'gluten free saltines'],
];

const crackersInCart = [];

for (let shelf = 0; shelf < crackerShelves.length; shelf++) {
    for (let spot = 0; spot < crackerShelves[shelf].length; spot++) {
        let cracker = crackerShelves[shelf][spot];
        crackersInCart.push(cracker);
    }
}

// trackProgress('1.2');

/*
1.3
We want some fruit snacks, but only ones that are berry or orange flavored.
- Using a nested for loop, go through the fruitSnackShelves and add any snacks that have 'berry' or 'orange' in the name to the cart

Testing:
- fruitSnacksInCart should equal:
      [
        'strawberry gushers',
        'orange gushers',
        'orange gummy bears',
        'blue raspberry fruit rollup',
        'mixed berry fruit rollup',
      ];
*/

const fruitSnackShelves = [
    ['strawberry gushers', 'cherry gushers', 'orange gushers'],
    ['organic gummy bears', 'tropical gummy bears', 'orange gummy bears'],
    ['blue raspberry fruit rollup', 'mixed berry fruit rollup'],
];

const fruitSnacksInCart = [];

// trackProgress('1.3');

/* ______________________ PART 2 ______________________
Do While Loops
*/

/*
2.1
We want to buy two bags of chips, but keep grabbing all of them instead!
Can update the while condition below so that we stop putting chips in the cart after we have two bags?

Testing:
chipsInCart should equal: ["bbq", "salt & vinegar"]
*/

const chipShelf = ['bbq', 'salt & vinegar', 'sour cream & onion', 'corn chips'];
let spotOnShelf = 0;
const chipsInCart = [];

do {
    let currentChip = chipShelf[spotOnShelf];
    chipsInCart.push(currentChip);
    spotOnShelf++;
} while (chipsInCart.length < 4);

// trackProgress('2.1');

/*
2.2
We want to buy 3 different candy bars, but we're accidentally just grabbing three of the exact same one.
Can update the do while loop so that we're moving along on the shelf each time we go to grab a candy bar?

Testing:
- candyInCart should equal: ["snickers", "butterfinger", "crunch bar"]
*/

const candyShelf = ['snickers', 'butterfinger', 'crunch bar', 'godiva'];
let spotOnCandyShelf = 0;
const candyInCart = [];

do {
    let currentCandy = candyShelf[spotOnCandyShelf];
    candyInCart.push(currentCandy);
} while (candyInCart.length < 3);

// trackProgress('2.2');

/*
2.3
We want to buy two sandwiches for lunch, and we know the ones on the right side of the shelf are always the freshest, so we want to start there.
- Create a variable called spotOnSandwichShelf and initialize it to the last index of the sandwichShelf array (hint: use the array's length property!)
- Create a constant called sandwichesInCart and initialize it to an empty array
- Create a do while loop that pushes sandwiches into the cart, sarting at the end and moving to the left of the shelf
- Stop once there are 2 sandwiches in the cart

Testing:
- sandwichesInCart should equal: ["blt", "reuben"]
*/

const sandwichShelf = ['grilled cheese', 'pb&j', 'reuben', 'blt'];

// trackProgress('2.3');

/* ______________________ PART 3 ______________________
Recursion
*/

/*
3.1
We want a function that sums up every number up to (and including) the argument. Assume the argument will always be a positive number.
For example, if the function is passed the number 9, we'd want the function to return the result of 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1.
Our current function isn't quite right! We're skipping numbers. Can you fix it?

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: (9) => expected output: 45
- input: (3) => expected output: 6
- input: (5781) => expected output: 16712871
*/

function sumPositiveNums(num) {
    if (num === 1) {
        return 1;
    }
    return num + sumPositiveNums(num - 2);
}

// trackProgress('3.1');

/*
3.2
We want a function that returns the result of multiplying the argument by all numbers between the argument and 1.
For example, if the function is passed the number 9, we'd want it to return the result of 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.

Assume all inputs will be greater than or equal to one (so don't worry about handling zero or negatives).

Create a recursive function that accomplishes this!

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: (9) => expected output: 362880
- input: (4) => expected output: 24
- input: (1) => expected output: 1
*/

// trackProgress('3.2');

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

