// Ignore the setup below
let ccl = [];
const realConsole = console;
initialize();

/* ______________________ PART 1 ______________________
Creating & Invoking Functions
*/

/*
1.1
Change the cat noise below from "Moooo" to "Meow"
*/

function catNoise() {
    console.log('Moooo');
}

// checkAnswer('1.1');

/*
1.2
- Uncomment the invocation of camelNoise
- Rename the function to "dogNoise" (make sure you change the invocation too!)
*/

function camelNoise() {
    console.log('Woof!');
}

// camelNoise();
// checkAnswer('1.2');

/*
1.3
Invoke lionNoise twice
*/

function lionNoise() {
    console.log('Roar!');
}

// checkAnswer('1.3');

/*
1.4
- Fill in the function below with a console log that prints "Bawk-Bawk".
- Invoke the function once.
*/

function chickenNoise() {}

// checkAnswer('1.4');

/*
1.5
- Create a function below called "beeNoise" that logs the text "Buzzz".
- Invoke the function once.
*/

// checkAnswer('1.5');

/*
1.6
- Create a function below called "turkeyNoise" that logs the text "Gobble Gobble".
- Invoke the function once.
*/

// checkAnswer('1.6');

/*
1.7
Functions can call other functions!
- Below the call to chickenNoise, add a call to turkeyNoise.
- Invoke the birdNoises function once.
*/

function birdNoises() {
    chickenNoise();
}

// checkAnswer('1.7');

/*
1.8
- Create a function called "housePetNoises". Within the function body, call catNoise and then dogNoise
- Invoke the function once.
*/

// checkAnswer('1.8');

/* ______________________ PART 2 ______________________
Function Parameters
*/

/*
2.1
- Uncomment the invocation of animalLegs
- Add a second invocation of animalLegs below the existing one. Choose an animal that doesn't have 4 legs.
*/

function animalLegs(animal, numberLegs) {
    console.log('The ' + animal + ' has ' + numberLegs + ' legs');
}

// animalLegs('zebra', 4);

// checkAnswer('2.1');

/*
2.2
- Uncomment the invocation of animalSkin and run the code (and observe the console logs)
What?! Chickens aren't covered in fur!
- Replace "fur" with the (currently unused) skinType parameter
- Add a second invocation of animalSkin below the existing one. Choose an animal that doesn't have fur or feathers.
*/

function animalSkin(animal, skinType) {
    console.log('The ' + animal + ' is covered in ' + 'fur');
}

// animalSkin('chicken', 'feathers');

// checkAnswer('2.2');

/*
2.3
The function below would be better if we could pass in a given animal and a given noise.
- Add an animal parameter and a noise parameter.
- Replace "chicken" and "Bawk-Bawk" with these new parameters
- Invoke the function once with any arguments.
*/

function animalNoise() {
    console.log('The ' + 'chicken' + ' makes a ' + 'Bawk-Bawk' + ' sound');
}

// checkAnswer('2.3');

/*
2.4
- Fill in the function below so that the function call shown produces the log "The lion is a carnivore"
- Add a second invocation below for an herbivore animal
*/

function animalDiet(animal, diet) {}

animalDiet('lion', 'carnivore');

// checkAnswer('2.4');

/*
2.5
- Create a function called animalType.
- Add two parameters -- animal & type
- Fill in the function body so that invoking it with the arguments "snake" and "reptile" produces the log "The snake is a reptile"
- Invoke the function once with any arguments.
*/

// checkAnswer('2.5');

/* ______________________ PART 3 ______________________
Function Returns
*/

/*
3.1
- Outside the function, call console.log with favoriteAnimalMessage as the argument
- Change the 'lion' to your favorite animal.
*/

function favoriteAnimal(favAnimal) {
    return 'my favorite animal is the ' + favAnimal;
}

const favoriteAnimalMessage = favoriteAnimal('lion');

// checkAnswer('3.1');

/*
3.2
- Set leastFavAnimalMessage equal to the value of calling leastFavoriteAnimal with your least favorite animal (replace null)
- Call console.log with leastFavAnimalMessage as the argument
*/

function leastFavoriteAnimal(leastFavAnimal) {
    return 'my least favorite animal is the ' + leastFavAnimal;
}

const leastFavAnimalMessage = null;

// checkAnswer('3.2');

/*
3.3
- Create a constant called largeAnimalMessage and set it equal to the value of calling largeAnimal with some large animal as the argument
- Call console.log with largeAnimalMessage as the argument
*/

function largeAnimal(largeAnimal) {
    return 'the ' + largeAnimal + ' is enormous';
}

// checkAnswer('3.3');

/*
3.4
- Fill in the function below so that smallAnimalMessage equals the string "the mouse is tiny"
*/

function smallAnimal(smallAnimal) {}

const smallAnimalMessage = smallAnimal('mouse');

// checkAnswer('3.4');

/*
3.5
Functions without returns are called "void functions". Generally, functions that return a value are preferred over void functions.
Let's practice refactoring a void function!
- Update the function body below so that the text is returned instead of being logged
- Invoke marineAnimal with some kind of marine animal and log the result
Note: you can pass the function invocation directly into console.log, without storing the result in a variable first
*/

function marineAnimal(marineAnimal) {
    console.log('the ' + marineAnimal + ' lives in the water');
}

// checkAnswer('3.5');

/*
3.6
As you saw above, function calls can be passed directly into other functions!
- Pass the existing invocation of airAnimal into console.log (all on one line!)
- Add another invocation of airAnimal, but pass in a call to getBird() as the argument. Log the entire thing (on the same line!)
*/

function getBird() {
    return 'seagull';
}

function airAnimal(airAnimal) {
    return 'the ' + airAnimal + ' can fly!';
}

airAnimal('pterodactyl');

// checkAnswer('3.6');

/*
3.7
As we saw in Part 1, functions can also be called from within other functions!
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

// checkAnswer('3.7');

/* ______________________ PART 4 ______________________
Bonus
*/

/*
4.1
- Add another function below called tenThousand that returns 10000;
- For each of the sum constants, call the existing functions to get to the desired value (replacing null). The first has been done already.
*/

function one() {
    return 1;
}

function ten() {
    return 10;
}

function hundred() {
    return 100;
}

function thousand() {
    return 1000;
}

// Desired value: 11
const sumA = ten() + one();

// Desired value: 101
const sumB = null;

// Desired value: 10,000
const sumC = null;

// Desired value: 1,111
const sumD = null;

// checkAnswer('4.1')

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
        realConsole.error(`Unexpected output for exercise ${exercise}! Double check your function.`);
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

function checkAnswer(exercise) {
    switch (exercise) {
        case '1.1':
            functionExistsByName('catNoise');
            checkFunction(exercise, catNoise,'function catNoise() { console.log("Meow"); }');
            break;
        case '1.2':
            functionExistsByName('dogNoise');
            checkFunction(exercise, dogNoise,'function dogNoise() { console.log("Woof!"); }');
            break;
        case '1.3':
            functionExistsByName('lionNoise');
            checkLogging(exercise, lionNoise, 'Roar!', 'Roar!');
            break;
        case '1.4':
            checkFunction(exercise, chickenNoise, 'function chickenNoise(){console.log("Bawk-Bawk");}');
            checkLogging(exercise, chickenNoise, 'Bawk-Bawk');
            break;
        case '1.5':
            checkFunction(exercise, beeNoise, 'function beeNoise(){console.log("Buzzz");}');
            checkLogging(exercise, beeNoise, 'Buzzz');
            break;
        case '1.6':
            checkFunction(exercise, turkeyNoise, 'function turkeyNoise(){console.log("Gobble Gobble");}');
            checkLogging(exercise, turkeyNoise, 'Gobble Gobble');
            break;
        case '1.7':
            checkFunction(exercise, birdNoises, 'function birdNoises(){chickenNoise();turkeyNoise();}');
            checkLogging(exercise, birdNoises, 'Bawk-Bawk', 'Gobble Gobble');
            break;
        case '1.8':
            checkFunction(exercise, housePetNoises, 'function housePetNoises(){catNoise();dogNoise();}');
            checkLogging(exercise, housePetNoises, 'Meow', 'Woof!');
            break;
        case '2.1':
            checkLoggingRegex(exercise, animalLegs, new RegExp('The zebra has 4 legs'), new RegExp('The [a-zA-z ]* has [0-9]* legs'));
            break;
        case '2.2':
            checkLoggingRegex(exercise, animalSkin, new RegExp('The chicken is covered in feathers'), new RegExp('The [a-zA-z ]* is covered in [a-zA-z ]*'));
            break;
        case '2.3':
            checkFunction(exercise, animalNoise, "function animalNoise(animal, noise) {console.log('The ' + animal + ' makes a ' + noise + ' sound');}");
            checkLoggingRegex(exercise, animalNoise,  new RegExp('The [a-zA-z ]* makes a [a-zA-z ]* sound'));
            break;
        case '2.4':
            checkFunction(exercise, animalDiet, "function animalDiet(animal, diet) {console.log('The ' + animal + ' is a ' + diet);}");
            checkLoggingRegex(exercise, animalDiet,  new RegExp('The lion is a carnivore'), new RegExp('The [a-zA-z ]* is a herbivore'));
            break;
        case '2.5':
            checkFunction(exercise, animalType, "function animalType(animal, type) {console.log('The ' + animal + ' is a ' + type);}");
            checkLoggingRegex(exercise, animalType,  new RegExp('The [a-zA-z ]* is a [a-zA-z ]*'));
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
            checkLoggingRegex(exercise, favoriteAnimal,  new RegExp('my favorite animal is the [a-zA-z ]*'));
            break;
        case '3.2':
            isInitializedVariable('leastFavAnimalMessage');
            checkLoggingRegex(exercise, leastFavoriteAnimal, new RegExp('my least favorite animal is the [a-zA-z ]*'));
            break;
        case '3.3':
            isInitializedVariable('largeAnimalMessage');
            checkLoggingRegex(exercise, largeAnimal, new RegExp('the [a-zA-z ]* is enormous'));
            break;
        case '3.4':
            checkFunction(exercise, smallAnimal, "function smallAnimal(smallAnimal) {  return 'the ' + smallAnimal + ' is tiny';}");
            checkLoggingRegex(exercise, smallAnimal, new RegExp('the [a-zA-z ]* is tiny'));
            break;
        case '3.5':
            checkFunction(exercise, marineAnimal, "function marineAnimal(marineAnimal) {return 'the ' + marineAnimal + ' lives in the water';}");
            checkLoggingRegex(exercise, marineAnimal, new RegExp('the [a-zA-z ]* lives in the water'));
            break;
        case '3.6':
            checkLogging(exercise, airAnimal, 'the pterodactyl can fly!', 'the seagull can fly!');
            break;
        case '3.7':
            checkLogging(exercise, animalFriends, 'the chihuahua and the squirrel are friends', 'the squirrel and the bearded dragon are enemies');
            break;
        case '3.8':
            checkVariable('', '');
            break;
        case '4.1':
            checkVariable('sumA', 11);
            checkVariable('sumB', 101);
            checkVariable('sumC', 10000);
            checkVariable('sumD', 1111);
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
        case '5.1':
            checkVariable('', '');
            break;
        default:
            throw new Error(exercise + ' does not have an answer key.');
    }
    ccl = [];
    realConsole.log('✅ Passed exercise ' + exercise + '! ✅\n\n');
}
