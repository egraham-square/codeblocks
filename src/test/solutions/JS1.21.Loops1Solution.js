21/* ______________________ PART 1 ______________________
While Loops
*/

/*
1.1
Cap'n crunch is so sweet, we can only eat seven bites of it.

Can you update the condition for the while loop below so that we stop eating after 7 bites?

Testing:
- The following should be logged to the console:
      I've eaten 0 bites of cap'n crunch
      I've eaten 1 bites of cap'n crunch
      I've eaten 2 bites of cap'n crunch
      I've eaten 3 bites of cap'n crunch
      I've eaten 4 bites of cap'n crunch
      I've eaten 5 bites of cap'n crunch
      I've eaten 6 bites of cap'n crunch
      I've eaten 7 bites of cap'n crunch
*/

let capnCrunchEaten = 0;

while (capnCrunchEaten < 0) {
    console.log("I've eaten " + capnCrunchEaten + " bites of cap'n crunch");
    capnCrunchEaten++;
}

// trackProgress('1.1');

/*
1.2
Fruity pebbles is even sweeter, so we can only eat six bites of it!
But, we found a bigger spoon and can eat two bites at a time now.
- Update the condition for the while loop below so that we stop eating after 6 bites
- Adjust the iterator so that we're advancing by two bites on each pass through the loop, instead of one.

Hints:
- x++ is equivalent to x+=1

Testing:
- The following should be logged to the console:
      I've eaten 0 bites of fruity pebbles
      I've eaten 2 bites of fruity pebbles
      I've eaten 4 bites of fruity pebbles
      I've eaten 6 bites of fruity pebbles
*/

let fruityPebblesEaten = 0;

while (fruityPebblesEaten < 0) {
    console.log("I've eaten " + fruityPebblesEaten + ' bites of fruity pebbles');
    fruityPebblesEaten++;
}

// trackProgress('1.2');

/*
1.3
Cheerios aren't as sweet, so we can eat 15 bites in one sitting.
We've already had 6 bites so far, and can eat three bites at a time (we found an even bigger spoon!).
- Create a variable called cheeriosEaten and initialize it to how many bites we've already had
- Create a while loop that stops when cheeriosEaten reaches 15
- On each pass through the loop:
    - log "I've eaten N bites of cheerios" (where N is the value of cheeriosEaten on that loop).
    - Advance cheeriosEaten by 3

Testing:
- The following should be logged to the console:
      I've eaten 6 bites of cheerios
      I've eaten 9 bites of cheerios
      I've eaten 12 bites of cheerios
      I've eaten 15 bites of cheerios
*/

// trackProgress('1.3');

/* ______________________ PART 2 ______________________
For Loops
*/

/*
2.1
Let's eat some lucky charms! Our bowl starts out with 8 bites. We want to eat until the bowl is empty.
- Update the initialization and the condition in the loop below to model this

Testing:
- The following should be logged to the console:
      I have 8 bites of lucky charms left
      I have 7 bites of lucky charms left
      I have 6 bites of lucky charms left
      I have 5 bites of lucky charms left
      I have 4 bites of lucky charms left
      I have 3 bites of lucky charms left
      I have 2 bites of lucky charms left
      I have 1 bites of lucky charms left
      I have 0 bites of lucky charms left
*/

for (let luckyCharmsLeft = 0; luckyCharmsLeft > 5; luckyCharmsLeft--) {
    console.log('I have ' + luckyCharmsLeft + ' bites of lucky charms left');
}

// trackProgress('2.1');

/*
2.2
Let's eat some cocoa puffs! Our bowl starts out with 12 bites. We want to eat until the bowl has 4 bites left, and we can eat 2 bites at a time.
- Update the initialization, the condition, and the final expression in the loop below to model this

Testing:
- The following should be logged to the console:
      I have 12 bites of cocoa puffs left
      I have 10 bites of cocoa puffs left
      I have 8 bites of cocoa puffs left
      I have 6 bites of cocoa puffs left
      I have 4 bites of cocoa puffs left
*/

for (let cocoaPuffsLeft = 0; cocoaPuffsLeft > 0; cocoaPuffsLeft--) {
    console.log('I have ' + cocoaPuffsLeft + ' bites of cocoa puffs left');
}

// trackProgress('2.2');

/*
2.3
Let's eat some trix! Our bowl starts out with 20 bites. We want to eat until the bowl has 2 bites left, and we can eat 3 bites at a time.
- Create a for loop that models this
- On each pass through the loop, log 'I have N bites of trix left' (where N is the value of trixLeft on that loop).

Testing:
- The following should be logged to the console:
      I have 20 bites of trix left
      I have 17 bites of trix left
      I have 14 bites of trix left
      I have 11 bites of trix left
      I have 8 bites of trix left
      I have 5 bites of trix left
      I have 2 bites of trix left
*/

// trackProgress('2.3');

/*
2.4
Let's make ourselves a bowl of bran flakes! Our bowl starts out empty, and we can shake 5 bites of cereal into it at a time.
We can stop pouring cereal once the bowl has 30 bites in it.
- Create a for loop that models this
- On each pass through the loop, log 'My bowl has N bites of bran flakes' (where N is the value of branFlakesInBowl on that loop).

Testing:
- The following should be logged to the console:
      My bowl has 0 bites of bran flakes
      My bowl has 5 bites of bran flakes
      My bowl has 10 bites of bran flakes
      My bowl has 15 bites of bran flakes
      My bowl has 20 bites of bran flakes
      My bowl has 25 bites of bran flakes
      My bowl has 30 bites of bran flakes
*/

// trackProgress('2.4');

/* ______________________ PART 3 ______________________
Iterating Through Arrays
*/

/*
3.1
We're trying to iterate through our list of healthy cereals and print out a message about each one, but our code has a few bugs.
Can you fix them?

Hints:
- We want to continue looping until we've reached the end of the array (i.e. the index is no longer _less than_ the length of the array)
- We need to access the entry at the given index, not the index itself

Testing:
- The following should be logged to the console:
      whole wheat cheerios is a healthy cereal
      wheaties is a healthy cereal
      shredded wheat is a healthy cereal
      granola is a healthy cereal
*/

const healthyCereals = [
    'whole wheat cheerios',
    'wheaties',
    'shredded wheat',
    'granola'
];

for (let i = 0; i > healthyCereals.length; i++) {
    console.log(i + ' is a healthy cereal');
}

// trackProgress('3.1');

/*
3.2
We want to print out a message about all of the chocolate cereals in the aisle, starting at the end of the aisle and working our way backwards.
Unfortunately our code has a few bugs. Can you fix them?

Hints:
- We need to start at the last index in the array (which will always be one less than the length of the array)
- We should count down instead of up since we're working our way backwards through the array

Testing:
The following should be logged to the console:
      chocolate toast crunch has chocolate in it
      cocoa pebbles has chocolate in it
      cocoa puffs has chocolate in it
      count chocula has chocolate in it
*/

const chocolateCereals = [
    'count chocula',
    'cocoa puffs',
    'cocoa pebbles',
    'chocolate toast crunch',
];

for (let i = 0; i < 0; i++) {
    console.log(null + ' has chocolate in it');
}

// trackProgress('3.2');

/*
3.3
We want to pick up a few boxes of honey-based cereals, but there are too many to choose from!
We just want to grab every other box, starting with the second one we see.
- Create a for loop that models this

Testing:
The following should be logged to the console:
      Let's buy a box of honey grahams
      Let's buy a box of honey nut cheerios
      Let's buy a box of golden crisp
*/

const honeyCereals = [
    'honey bunches of oats',
    'honey grahams',
    'golden puffs',
    'honey nut cheerios',
    'honey comb',
    'golden crisp',
];

// trackProgress('3.3');

/* ______________________ PART 4 ______________________
Bonus
*/

/*
4.1
We want a loop that goes through all of our rice cereals and logs a message about each, but we're not starting at the beginning!
And we also want to use a for loop instead of a while loop!

- Change the riceCerealIndex so that we start at the beginning of the array
- Change the while loop below to a for loop

Testing:
The following should be logged to the console:
      rice chex is a rice cereal
      rice puffs is a rice cereal
      crip rice is a rice cereal
      crispy cocoa rice is a rice cereal
      puffed rice is a rice cereal
*/

const riceCereals = [
    'rice chex',
    'rice puffs',
    'crip rice',
    'crispy cocoa rice',
    'puffed rice',
];

let riceCerealIndex = 10;

while (riceCerealIndex < riceCereals.length) {
    console.log(riceCereals[riceCerealIndex] + ' is a rice cereal');
    riceCerealIndex++;
}

// trackProgress('4.1');

/*
4.2
We have a kid that likes to throw a bunch of random cereal in the cart, but we're on a fixed budget!
Let's write a function that tells us if we can afford a given list of cereal based on a given budget
- Create a function called canAfford that takes in two parameters: an array of cereal that's been thrown in our cart and a number for our budget.
- In the function body, iterate through the cereal array and find how much it costs using the provided cerealPrices object.
- As you loop through the list, keep a running sum for the cereal cost
- Once you're done looping, if the total cost of the cereal in the cart is more than the budget, return false. Otherwise return true.

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: (['Chex', 'Cocoa Puffs'], 20) => expected output: true
- input: (['Granola', 'Cheerios', 'Fruity Pebbles', 'Wheeties'], 15) => expected output: false
- input: (['Wheeties', 'Lucky Charms', 'Rice Puffs'], 11) => expected output: true
*/

const cerealPrices = {
    "Cap'n Crunch": 3.5,
    'Cheerios': 4,
    'Fruity Pebbles': 3,
    'Lucky Charms': 3.75,
    'Cocoa Puffs': 2.75,
    'Trix': 3.5,
    'Bran Flakes': 4.25,
    'Granola': 5,
    'Wheeties': 4.25,
    'Rice Puffs': 3,
    'Chex': 2.75,
};

// trackProgress('4.2');

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

