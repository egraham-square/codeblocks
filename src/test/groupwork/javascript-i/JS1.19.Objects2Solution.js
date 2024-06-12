/* ______________________ PART 1 ______________________
Using Objects for Lookups
*/

/*
1.1
Set legalPadCount equal to the value of the legalPads property
*/

const paperSupplies = {
    stickyNotePacks: 25,
    printerPaperReams: 4,
    legalPads: 10,
};

const legalPadCount = null;

// checkAnswer('1.1');

/*
1.2
We want a function that tells us the supply count for any given writing tool in the closet, but it's a little off.
Can you fix the function below so that it passes the test cases?

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 'highlighters' => expected output: 50
- input: 'stickyNotes' => expected output: undefined
*/

const writingSupplies = {
    pens: 100,
    highlighters: 50,
    pencils: 120,
};

function getWritingSupplyCount(writingTool) {
    return writingSupplies[null];
}

// trackProgress('1.2');

/*
1.3
We want a function that tells us if we should reorder more computer supplies or not.
If the quantity of a given item is 2 or less, we should order more.
Can you fill out the function below so that it passes the test cases?

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: 'powerAdapters' => expected output: false
- input: 'monitorCables' => expected output: true
- input: 'keyboards' => expected output: true
*/

const computerSupplies = {
    powerAdapters: 3,
    monitorCables: 2,
    usbCords: 5,
    keyboards: 0,
};

function shouldReorderCompSupply(compItem) {}

// trackProgress('1.3');

/* ______________________ PART 2 ______________________
Testing Objects for Properties
*/

/*
2.1
We want to check our supply closet to see if we normally stock electrical tape, but we're checking for the wrong item!
- Log the value of stockElectricalTape. Explain why it is what it is to your teammates.
- Change the property being tested from 'packingTape' to 'electricalTape' and run the code to see the new value of stockElectricalTape.
*/

const tapeSupplies = {
    maskingTape: 4,
    packingTape: 0,
    ductTape: 1,
};

const stockElectricalTape = tapeSupplies.hasOwnProperty('packingTape');

// checkAnswer('2.1');

/*
2.2
Amelia just noticed that we don't currently have any tylenol or advil in the supply closet.
She wants to know if we normally stock tylenolBottles or advilBottles (aka if they're properties in our medicalSupplies object)
- Replace the nulls below so that the variables accurately reflect whether or not we carry those items normally (use the hasOwnProperty function!)
*/

const medicalSupplies = {
    firstAidKits: 2,
    handSanitizer: 3,
    menstrualPads: 15,
    tylenolBottles: 0,
};

const stockTylenol = null;
const stockAdvil = null;

// checkAnswer('2.2');

/* ______________________ PART 3 ______________________
Nested Objects
*/

/*
3.1
We want to know how many micro-usb cables we have in the supply closet.
- Replace null with the value of the microUsb property from the supplyCloset object
*/

const supplyCloset = {
    writingImplements: {
        pens: 100,
        highlighters: 50,
        pencils: 120,
    },
    computerSupplies: {
        powerAdapters: 3,
        monitorCables: 2,
        usbCords: {
            usbC: 2,
            microUsb: 3,
            miniUsb: 1,
        },
    },
    medicalSupplies: {
        firstAidKits: 2,
        handSanitizer: 3,
        menstrualPads: 15,
        tylenolBottles: 0,
    },
};

const microUsbCount = null;

// checkAnswer('3.1');

/*
3.2
Let's practice creating nested objects!
There are a ton of pens in the supply closet that we need to take inventory of.
Here are the types and subtypes (and sub-subtypes!) of pens we have and their counts:
        # Fountain pens
            # 2 wood handled
            # 3 metal handled
        # Gel pens
            # 7 neon green
            # 2 pink
        # Ballpoint pens
            # bic brand
                # 2 red
                # 10 blue
                # 15 black
            # pentel brand
                # 25 black

Create an object called penSupplies that models this inventory (check the test cases for guidance on naming properties)

Testing:
Log the following properties and confirm you get the expected values
- property: penSupplies.fountainPens.woodHandled => expected value: 2
- property: penSupplies.ballpointPens.pentelBrand.black => expected value: 25
*/

// trackProgress('3.2');

/* ______________________ PART 4 ______________________
Nested Arrays
*/

/*
4.1
It's our first day and we're trying to find our desk, but we got lost!
The office manager told us it was on the third floor, row B, on the left side (desk number F3bL).

Somehow we ended up at desk F4cR instead. Can you fix the indexes used in initializing the myDesk variable so that we're at the right desk?

Testing:
- Use the following data to check your code
- variable: myDesk => expected value: 'F3bL'
*/

const deskLayout = [
    [
        ['F1aL', 'F1aR'],
        ['F1bL', 'F1bR'],
        ['F1cL', 'F1cR'],
        ['F1dL', 'F1dR'],
    ],
    [
        ['F2aL', 'F2aR'],
        ['F2bL', 'F2bR'],
        ['F2cL', 'F2cR'],
        ['F2dL', 'F2dR'],
    ],
    [
        ['F3aL', 'F3aR'],
        ['F3bL', 'F3bR'],
        ['F3cL', 'F3cR'],
        ['F3dL', 'F3dR'],
    ],
    [
        ['F4aL', 'F4aR'],
        ['F4bL', 'F4bR'],
        ['F4cL', 'F4cR'],
        ['F4dL', 'F4dR'],
    ],
];

const myDesk = deskLayout[3][2][1];

// trackProgress('4.1');

/*
4.2
We also want to visit our friend Ivan who we know sits at desk F1bL and our other friend Vishav who sits at desk F3aR
Can you navigate us to those desks using the same deskLayout object from above?
- Replace the nulls below by pulling the correct value from the multidimensional array above

Testing:
- Use the following data to check your code
- variable: ivansDesk => expected value: 'F1bL'
- variable: vishavsDesk => expected value: 'F3aR'
*/

const ivansDesk = null;
const vishavsDesk = null;

// trackProgress('4.2');

/* ______________________ PART 5 ______________________
Bonus
*/

/*
5.1
We want to create a function that tells us who sits at a given desk based on the desk floor, row, and side
- Create a function called findPerson that takes in the parameters: floorLevel, row, side
- Using both the deskLayout object from above and the deskToPerson object below, fill in the function so that the cases pass

Hint/Bonus
- It might help to create helper functions that translate each parameter to the appropriate index (ie, one function could return 0 for 'Left' and 1 for 'Right')

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: (1, 'A', 'Left') => expected output: 'Demetrius'
- input: (3, 'C', 'Right') => expected output: 'Dayana'
- input: (4, 'D', 'Right') => expected output: 'Macy'
*/

const deskToPerson = {
    F1aL: 'Demetrius',
    F1aR: 'Taylor',
    F1bL: 'Ivan',
    F1bR: 'Nyla',
    F1cL: 'Kaia',
    F1cR: 'Kasey',
    F1dL: 'Jayla',
    F1dR: 'Jasmin',
    F2aL: 'Dillan',
    F2aR: 'Kim',
    F2bL: 'Bryanna',
    F2bR: 'Evangeline',
    F2cL: 'Ronan',
    F2cR: 'Chuya',
    F2dL: 'Quynh',
    F2dR: 'Hugo',
    F3aL: 'Eden',
    F3aR: 'Vishav',
    F3bL: 'Me!',
    F3bR: 'Mara',
    F3cL: 'Miley',
    F3cR: 'Dayana',
    F3dL: 'Stella',
    F3dR: 'Guadalupe',
    F4aL: 'Jaylin',
    F4aR: 'Tamara',
    F4bL: 'Mira',
    F4bR: 'Easton',
    F4cL: 'Amaya',
    F4cR: 'Caleb',
    F4dL: 'Antonio',
    F4dR: 'Macy',
};

// trackProgress('5.1');

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
            checkVariable('legalPadCount', 10);
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
            checkVariable('stockElectricalTape', false);
            break;
        case '2.2':
            checkVariable('stockTylenol', true);
            checkVariable('stockAdvil', false);
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
            checkVariable('microUsbCount', 3);
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
