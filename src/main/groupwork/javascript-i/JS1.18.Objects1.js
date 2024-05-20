/* ______________________ PART 1 ______________________
Creating Objects
*/

/*
1.1
The printer has moved!
- Change the location value from "break room" to "supply room" (just replace the literal text within the object)
*/

const printer = {
    style: 'laser',
    trays: 3,
    location: 'break room',
};

// checkAnswer('1.1');

/*
1.2
Create an object called monitor that has a width of 24, a height of 14, and a resolution of "1920 × 1200"
*/

// checkAnswer('1.2');

/*
1.3
Create an object called stapler that has a staple capacity of 200, a sheet capacity of 15, and is the color red

Note:
In FCC, they show you how to create properties that have spaces in them by wrapping them in quotes, ie "staple capacity".
While Javascript allows this and it's good to have in your toolkit, it's typically preferable just to camelCase property names, ie stapleCapacity (no quotes)
*/

// checkAnswer('1.3');
/* ______________________ PART 2 ______________________
Accessing Properties
*/

/*
2.1
We want to access the size property of the object below and assign it to stickyNoteSize, but we grabbed the wrong property!
Can you fix the mistake?
*/

const stickyNotes = {
    color: 'teal',
    notesLeftInPad: 25,
    size: 'medium',
};

const stickyNoteSize = stickyNotes.color;

// checkAnswer('2.1');

/*
2.2
- Create a constant called coffeeMakerCapacity and set it equal to the capacity of the coffee maker below (using dot notation!)
- Create a constant called coffeeMakerBrand and set it equal to the brand property (using dot notation!)
- Create a constant called needToBuyFilters and set it equal to the requiresPaperFilters property (using dot notation!)
*/

const coffeeMaker = {
    capacityInCups: 8,
    brand: 'Cuisinart',
    requiresPaperFilters: false,
};

// checkAnswer('2.2');

/*
2.3
Let's practice using bracket notation to access properties!

- Create a constant called chairColor and set it equal to the color property (using bracket notation!)
- Create a constant called chairReclines and set it equal to the canRecline property (using bracket notation!)

Bonus
- Create a constant called hasWheels and set it equal to the value returned by checking if the number of wheels is greater than zero (log the value to check your own work -- it should be true)
*/

const officeChair = {
    color: 'black',
    wheels: 5,
    canRecline: true,
};

// checkAnswer('2.3');

/*
2.4
Let's practice using bracket notation with variables to access properties!
- Replace the nulls below so that myWheels, myChairColor, and myChairReclines each equal the appropriate value
- Make sure to use the colorProperty, wheelProperty, and reclineProperty variables along with bracket notation to access the values!
*/

const myOfficeChair = {
    color: 'grey',
    wheels: 3,
    canRecline: false,
};

const colorProperty = 'color';
const wheelProperty = 'wheels';
const reclineProperty = 'canRecline';

const myChairColor = null;
const myWheels = null;
const myChairReclines = null;

// checkAnswer('2.4');

/* ______________________ PART 3 ______________________
Updating Properties
*/

/*
3.1
The desk below belongs to Jamal, but he's upgrading and is giving his desk to his friend Brenna.
Brenna plans to change the top out for a glass top.
- We've already changed the owner property, but can you also change the topMaterial property to glass? (using dot notation!)
*/

const desk = {
    standing: false,
    baseColor: 'black',
    topMaterial: 'wood',
    owner: 'Jamal',
};

desk.owner = 'Brenna';

// checkAnswer('3.1');

/*
3.2
Wash your mug!
- Change the clean value from false to true using dot notation to access the property
*/

const coffeeMug = {
    size: 'large',
    clean: false,
    noveltyGraphic: 'cute cat',
};

// checkAnswer('3.2');

/*
3.3
Refill your pencil!
- Change the graphiteRemaining value from 0 to 10 using the remainingGraphiteProperty and bracket notation
*/

const pencil = {
    style: 'mechanical',
    graphiteSizeMm: 0.7,
    graphiteRemaining: 0,
};

const remainingGraphiteProperty = 'graphiteRemaining';

// checkAnswer('3.3');

/* ______________________ PART 4 ______________________
Adding Properties
*/

/*
4.X
We have a scissors object below that has a few properties already, but we also want to track how sharp they are!
- Below the object creation, use dot notation to add a property called sharpness with a value of "dull"

Testing:
Log the object and confirm it looks as expected
*/

const scissors = {
    handedness: 'left',
    color: 'blue',
    shouldRunWith: false,
};

// trackProgress('4.1');

/*
4.2
We have a pen object below that has a few properties already, but we also want to track the ink color!
- Below the object creation, use bracket notation to add a property called inkColor with a value of your choice!

Testing:
Log the object and confirm it looks as expected
*/

const pen = {
    branch: 'bic',
    style: 'ballpoint',
};

// trackProgress('4.2');

/* ______________________ PART 5 ______________________
Deleting Properties
*/

/*
5.1
We have a water cooler object below that has some good properties and a not-so-good one.
We don't want flavored syrups in our water cooler!
- Delete the flavoredSyrups property using either dot or bracket notation and the delete keyword

Testing:
Log the object and confirm it looks as expected
*/

const waterCooler = {
    capacityGallons: 5,
    tempsAvailable: ['hot', 'cold'],
    flavoredSyrups: ['vanilla', 'hazelnut', 'caramel'],
};

// trackProgress('5.1');

/*
5.2
All the old office keyboards are being collected and donated.
They no longer belong to anyone or have a fixed location.
- Remove the owner and location properties using either dot or bracket notation and the delete keyword

Testing:
Log the object and confirm it looks as expected
*/

const keyboard = {
    owner: 'Niko',
    location: "Niko's Desk",
    style: 'wireless',
    layout: 'qwerty',
};

// trackProgress('5.2');

/* ______________________ PART 6 ______________________
Bonus
*/

/*
6.1
Using the tools you've learned so far, update the object below so that it has the following properties (and only these properties!):
  size: 'large',
  noveltyGraphic: 'rainbow',
  dishwasherSafe: false

Testing:
Log the object and confirm it looks as expected
*/

const myCoffeeMug = {
    size: 'medium',
    clean: true,
    noveltyGraphic: 'polka dots',
};

// trackProgress('6.1');

/*
6.2
Ikay is considering upgrading his desk, but wants to make sure the new one really is better
He'll only upgrade if the new desk is a standing desk AND if the top is made of wood.
- Set shouldChangeDesks equal to the correct answer (accessing the properties of newDesk to evaluate the criteria)

Testing:
Log the object and confirm it looks as expected (should be true)
*/

const currentDesk = {
    standing: false,
    baseColor: 'black',
    topMaterial: 'metal',
    owner: 'Ikay',
};

const newDesk = {
    standing: true,
    baseColor: 'black',
    topMaterial: 'wood',
    owner: undefined,
};

const shouldChangeDesks = null;

// trackProgress('6.2');

/*
6.3
We're shopping for filing cabinets and want to get the largest possible one!
Create a function that takes in two filing cabinets and returns the model name of the one with the greatest volume (W X D X H) (or either one if they're equal)

Hint/Bonus:
- This is a great chance to create and use a helper function!
- You could have a separate function that just calculates the volume of a single cabinet and then another function that just compares the two volumes

Testing:
- Use the following cases to check your code (calling the function with the input and confirming you get the expected output)
- input: (filingCabinetA, filingCabinetB) => expected output: 'A'
- input: (filingCabinetB, filingCabinetC) => expected output: 'C'
- input: (filingCabinetC, filingCabinetD) => expected output: 'C'
*/



// Test data
const filingCabinetA = {
    model: 'A',
    drawers: 2,
    widthInches: 36,
    depthInches: 24,
    heightInches: 30,
};

const filingCabinetB = {
    model: 'B',
    drawers: 3,
    widthInches: 36,
    depthInches: 18,
    heightInches: 36,
};

const filingCabinetC = {
    model: 'C',
    drawers: 2,
    widthInches: 24,
    depthInches: 24,
    heightInches: 48,
};

const filingCabinetD = {
    model: 'D',
    drawers: 4,
    widthInches: 24,
    depthInches: 24,
    heightInches: 36,
};

// trackProgress('6.3');

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
            assertEquals(printer.style, 'laser');
            assertEquals(printer.trays, 3);
            assertEquals(printer.location, 'supply room');
            break;
        case '1.2':
            assertEquals(monitor.width, 24);
            assertEquals(monitor.height, 14);
            assertEquals(monitor.resolution, '1920 × 1200');
            break;
        case '1.3':
            assertEquals(stapler.stapleCapacity, 200);
            assertEquals(stapler.sheetCapacity, 15);
            assertEquals(stapler.color, 'red');
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
            checkVariable('stickyNoteSize', stickyNotes.size);
            break;
        case '2.2':
            checkVariable('coffeeMakerCapacity', coffeeMaker.capacityInCups);
            checkVariable('coffeeMakerBrand', coffeeMaker.brand);
            checkVariable('needToBuyFilters', coffeeMaker.requiresPaperFilters);
            break;
        case '2.3':
            checkVariable('chairColor', officeChair.color);
            checkVariable('chairReclines', officeChair.canRecline);
            break;
        case '2.4':
            checkVariable('myChairColor', myOfficeChair.color);
            checkVariable('myWheels', myOfficeChair.wheels);
            checkVariable('myChairReclines', myOfficeChair.canRecline);
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
            assertEquals(desk.topMaterial, 'glass');
            break;
        case '3.2':
            assertEquals(coffeeMug.clean, true);
            break;
        case '3.3':
            assertEquals(pencil.graphiteRemaining, 10);
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

