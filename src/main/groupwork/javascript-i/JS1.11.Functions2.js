// Ignore the setup below
let ccl = [];
const realConsole = console;
initialize();

/* ______________________ PART 1 ______________________
Scope
*/

/*
1.1
- Add invocations for both functions below. Run the code and observe the output.
- Replace 'Animalia' in whaleKingdom with the taxonomyKingdom variable. Run the code and observe the output.

Uh-oh, a ReferenceError! The taxonomyKingdom variable isn't visible outside of birdKingdom.
- Move the taxonomyKingdom declaration and initialization so that it becomes a global variable that's visible to both functions
*/

function birdKingdom() {
    const taxonomyKingdom = 'Animalia';
    console.log('birds are in the kingdom ' + taxonomyKingdom);
}

function whaleKingdom() {
    console.log('whales are in the kingdom ' + 'Animalia');
}

// checkAnswer('1.1');

/*
1.2
- Add invocations for both functions below. Run the code and observe the output.

That's not quite right -- whales are in the class "Mammalia", not "Aves"
- Move the global taxonomyClass declaration into birdClass
- Create a local taxonomyClass const within whaleClass and initialize it to "Mammalia".
*/

const taxonomyClass = 'Aves';

function birdClass() {
    console.log('birds are in the class ' + taxonomyClass);
}

function whaleClass() {
    console.log('whales are in the class ' + taxonomyClass);
}

// checkAnswer('1.2');

/*
1.3
- Invoke the function below and observe the output.

Mushrooms aren't animals! They're in the "Fungi" kingdom.
Even though there's already a global taxonomyKingdom variable, if we create a local one within our function, it'll take priority.
- Creating a local taxonomyKingdom constant inside of the mushroomKingdom() function's scope with the correct value for mushrooms.
*/

function mushroomKingdom() {
    console.log('mushrooms are in the kingdom ' + taxonomyKingdom);
}

// checkAnswer('1.3');

/* ______________________ PART 2 ______________________
Undefined values
*/

/*
2.1
Generally functions that return values are preferred over functions that return undefined (they're easier to understand and foster cleaner design patterns).
Let's practice refactoring!

We've got a handy function that prints out a house pet. But, we'd really prefer if this function *returned* that value instead.
- Add an invocation for the function. Run the code and observe the output.
- Refactor the function so that it returns housePet, instead of printing it.

But we still want to print the value! Now that our function returns something, we can use it as an argument to other functions!
- Pass the function invocation directly into a call to console.log. Run the code and observe the output (notice that it's the same as before! we've just move where the logging happens)
*/

function getHousePet() {
    const housePet = 'tabby cat';
    console.log(housePet);
}

// checkAnswer('2.1');

/*
2.2
- Log the output from the foodChain invocation shown. Run the code and observe the output.
- Replace the 'lion' argument with a call to the getCarnivore function
- Replace the 'zebra' argument with a call to the getHerbivore function
- Run the code again and observe the output.

Undefined eats undefined!
- Update the bodies of both functions so that each returns an appropriate animal. Run the code again and observe the output.
*/

function getCarnivore() {}
function getHerbivore() {}

function foodChain(carnivore, herbivore) {
    return 'the ' + carnivore + ' eats the ' + herbivore;
}

foodChain('lion', 'zebra');

// checkAnswer('2.2');

/* ______________________ PART 3 ______________________
Return
*/

/*
3.1
Functions can be called from within other functions!
- In animalFriends and animalEnemies, replace 'chihuahua', 'squirrel', and 'bearded dragon' with function calls.
- Add two log lines to print the results of invoking animalFriends() and animalEnemies()
*/
function getDog() {
    return 'chihuahua';
}

function getRodent() {
    return 'squirrel';
}

function getLizard() {
    return 'bearded dragon';
}

function animalFriends() {
    return 'the ' + 'chihuahua' + ' and the ' + 'squirrel' + ' are friends';
}

function animalEnemies() {
    return 'the ' + 'squirrel' + ' and the ' + 'bearded dragon' + ' are enemies';
}

// checkAnswer('3.1');

/* ______________________ PART 4 ______________________
Bonus
*/

/*
4.1
Backstory:
In programming, there are a million ways to do any one thing. It's great to have options, but it can get a little overwhelming!
Let's practice some of the patterns we've learned so far (we're gonna take six different routes to get to the same destination!)

Set up:
- Initialize exampleBigAnimal and exampleSmallAnimal to a big and small animal, respectively.
- Update the bodies of the getBigAnimal and getSmallAnimal function return the same big and small animals you used as constants
(you can either repeat the string or return the constant. your choice!)
- Wrap all six of the function calls at the bottom of this problem with calls to console.log (don't pay attention to the comments there yet).
- Run the code and observe the results.

Fun Part:
- Update all of the functions according to the comments above each one
- Update the invocations of compareAnimalSizes4 according to the comments above each call
- Run the code and observe the results.

Testing:
- There is no checkAnswer here! It's up to you test your work.
- You should end up with six identical log lines
*/

const exampleBigAnimal = '';
const exampleSmallAnimal = '';

function getBigAnimal() {}

function getSmallAnimal() {}

// fill in the empty quotes with the literal strings for the big and small animals you used above
function compareAnimalSizes1() {
    return 'the ' + '' + ' is bigger than the ' + '';
}

// replace the empty quotes with the appropriate constants from above
function compareAnimalSizes2() {
    return 'the ' + '' + ' is bigger than the ' + '';
}

// replace the empty quotes with the calls to the appropriate functions from above
function compareAnimalSizes3() {
    return 'the ' + '' + ' is bigger than the ' + '';
}

// add two parameters to this function: bigAnimal and smallAnimal. replace the empty quotes with these parameters.
function compareAnimalSizes4() {
    return 'the ' + '' + ' is bigger than the ' + '';
}

compareAnimalSizes1();
compareAnimalSizes2();
compareAnimalSizes3();

// pass in string literals for the big and small animals you used above
compareAnimalSizes4();

// pass in the constants from above
compareAnimalSizes4();

// pass in calls to the functions from above
compareAnimalSizes4();

// trackProgress('4.1');

/*
4.2
Backstory:
Let's build a Zoo! In our Zoo, we know we need a primate, a reptile, and a big cat.

Task:
- Fill in the empty strings with animals
- In the buildZoo function, create a constant called "zooAnimals" and initialize it to an empty array (hint: [])
- One-by-one, add the zooAnimals to the array (using either the push or unshift array functions).
- The final array should list the primate, then the reptile, and lastly the big cat
- Make sure to return the final array!
- Add a log line to print the result of calling the buildZoo function

Testing:
- There is no checkAnswer here! It's up to you test your work.
*/

const primate = '';
const reptile = '';
const bigCat = '';

function buildZoo() {}

// trackProgress('4.2');

/*
4.3
Backstory:
We want to bring in three new animals into our zoo, but the transport truck has a weight limit!
We're considering animals from different regions, but we want to make sure that the combined weight isn't too much for the truck.

Thankfully, we've been given weights for all of the animals, formatted as multidimensional arrays (see constants below for examples).
For a given set of animals, we want to calculate what the total weight is so we can make sure it's not too much for the truck.

Assumptions:
- There will always be three values in each array
- Each sub-array will always contain a single string (representing the animal's species) followed by a number (representing the animal's weight in pounds)

Task:
- Create a function called addWeights that takes in a parameter called animalsAndWeights
- The function should sum up the weight values for all three animals and return it

Hint:
- You'll need to use indexes!

Testing:
- There is no checkAnswer here! It's up to you test your work.
- We're providing two constants (mongolianAnimals & venezualanAnimals) to use as sample inputs into your function.
- Using your function, validate that the total weight for 549 lbs for mongolianAnimals and 342 for venezualanAnimals.
*/

const mongolianAnimals = [
    ['gray wolf', 80],
    ['gobi bear', 304],
    ['snow leapard', 165],
];
const venezualanAnimals = [
    ['giant anteater', 110],
    ['jaguar', 200],
    ['howler monkey', 32],
];

// trackProgress('4.3');

/* ______________________ STOP HERE ______________________
Below this is a bunch of stuff you don't need to worry about yet!
*/
function initialize() {
    const realConsole = console;
    const spyConsole = {};
    spyConsole.log = function (s) {
        realConsole.log(s);
        ccl.push(s);
    };
    spyConsole.warn = function (s) {
        realConsole.warn(s);
    };
    spyConsole.error = function (s) {
        realConsole.error(s);
    };
    console = spyConsole;
}

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
        return arrayEquals(expectedValue, actualValue);
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
    realConsole.log(variableName + ' equals: ' + variableValue);
}

function functionExistsByName(fnName) {
    // avoid capturing lines while "testing" the specified function
    const spyConsole = console;
    console = {}; // temp stubbed-out console
    console.log = function () {};
    console.warn = function () {};
    console.error = function () {};
    try {
        eval(fnName + '()');
    } catch (e) {
        realConsole.error(`Could not find a function named ${fnName}!`);
        throw new Error();
    } finally {
        console = spyConsole;
    }
}

function checkFunction(exercise, fnName, expectedFnString) {
    if (typeof fnName !== 'function') {
        realConsole.error(
            `No function found with name ${fnName} for exercise ${exercise}!`
        );
        throw new Error();
    }

    const sanitizedExpected = expectedFnString
        .replace(/\s/g, '')
        .replaceAll("'", '"');
    const sanitizedActual = fnName
        .toString()
        .replace(/\s/g, '')
        .replaceAll("'", '"');

    if (sanitizedActual !== sanitizedExpected) {
        realConsole.error(
            `Unexpected output for exercise ${exercise}! Double check your function.`
        );
        throw new Error();
    }
}

function formatLogStringSequence(stringArray) {
    return stringArray.length == 1
        ? "'" + stringArray + "'"
        : 'strings ' + stringArray.map(s => "'" + s + "'").join(' and ');
}

function arrayEquals(a, b) {
    return (
        Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index])
    );
}

function arrayEqualsRegexes(expectedRegexes, actualStrings) {
    return (
        Array.isArray(expectedRegexes) &&
        Array.isArray(actualStrings) &&
        expectedRegexes.length === actualStrings.length &&
        expectedRegexes.every((val, index) => val.test(actualStrings[index]))
    );
}

function checkLogging(exercise, loggingMethod, ...expectedLoggedStrings) {
    const fnName = loggingMethod
        .toString()
        .split('function ')[1]
        .split('(')[0]
        .trim();
    if (typeof loggingMethod !== 'function') {
        realConsole.error(
            `No function found with name ${loggingMethod} for exercise ${exercise}!`
        );
        throw new Error();
    }

    const actualLoggedStrings = ccl;
    if (!arrayEquals(expectedLoggedStrings, actualLoggedStrings)) {
        const formattedExpectedLogOutput = formatLogStringSequence(
            expectedLoggedStrings
        );
        let errorMsg = `❌ ${fnName}() should have printed ${formattedExpectedLogOutput}. `;

        if (actualLoggedStrings?.length > 0) {
            const formattedActualLogOutput = formatLogStringSequence(
                actualLoggedStrings
            );
            errorMsg += `Instead, it printed: ${formattedActualLogOutput}. ❌`;
        } else {
            errorMsg += `But, nothing was printed at all. Ensure you're using console.log() and actually calling your function! ❌`;
        }
        realConsole.error(errorMsg);
        throw new Error();
    }
}

function checkLoggingRegex(exercise, loggingMethod, ...expectedLoggedRegexes) {
    const fnName = loggingMethod
        .toString()
        .split('function ')[1]
        .split('(')[0]
        .trim();
    if (typeof loggingMethod !== 'function') {
        realConsole.error(
            `No function found with name ${loggingMethod} for exercise ${exercise}!`
        );
        throw new Error();
    }

    const actualLoggedStrings = ccl;
    if (!arrayEqualsRegexes(expectedLoggedRegexes, actualLoggedStrings)) {
        const formattedExpectedLogOutput = formatLogStringSequence(
            expectedLoggedRegexes
        );
        let errorMsg = `❌ ${fnName}() should have printed ${formattedExpectedLogOutput}. `;

        if (actualLoggedStrings?.length > 0) {
            const formattedActualLogOutput = formatLogStringSequence(
                actualLoggedStrings
            );
            errorMsg += `Instead, it printed: ${formattedActualLogOutput}. ❌`;
        } else {
            errorMsg += `But, nothing was printed at all. Ensure you're using console.log() and actually calling your function! ❌`;
        }
        realConsole.error(errorMsg);
        throw new Error();
    }
}

function isInitializedVariable(variableName) {
    var variableValue = eval(variableName);

    if (!isDefined(variableName) || variableValue == null) {
        throw new Error('Expected ' + variableName + ' to be initialized.');
    }
}

function isUninitializedVariable(variableName) {
    if (!variableEqualsValue(variableName, null)) {
        throw new Error(
            'Expected ' + variableName + ' to be declared but uninitialized.'
        );
    }
    realConsole.log(variableName + ' equals: ' + eval(variableName));
}

function trackProgress(exercise) {
    console.log(
        '❓ Done with exercise ' + exercise + '! Check your own work!❓\n\n'
    );
}

function checkAnswer(exercise) {
    switch (exercise) {
        case '1.1':
            checkFunction(exercise, birdKingdom, "function birdKingdom() {console.log('birds are in the kingdom ' + taxonomyKingdom);}");
            checkFunction(exercise, whaleKingdom, "function whaleKingdom() {console.log('whales are in the kingdom ' + taxonomyKingdom);}");
            break;
        case '1.2':
            checkFunction(exercise, birdClass, "function birdClass() {const taxonomyClass = 'Aves';console.log('birds are in the class ' + taxonomyClass);}");
            checkFunction(exercise, whaleClass, "function whaleClass() {const taxonomyClass = 'Mammalia';console.log('whales are in the class ' + taxonomyClass);}");
            break;
        case '1.3':
            checkFunction(exercise, mushroomKingdom, "function mushroomKingdom() {const taxonomyKingdom = 'Fungi';console.log('mushrooms are in the kingdom ' + taxonomyKingdom);}");
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
            checkLogging(exercise, getHousePet, 'tabby cat');
            break;
        case '2.2':
            checkLoggingRegex(exercise, foodChain, new RegExp('the [a-zA-z ]* eats the [a-zA-z ]*'));
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
            checkLogging(exercise, animalFriends, 'the chihuahua and the squirrel are friends', 'the squirrel and the bearded dragon are enemies');
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
    ccl = [];
    realConsole.log('✅ Passed exercise ' + exercise + '! ✅\n\n');
}

