/* ______________________ PART 1 ______________________
<topic>
*/

/*
1.X
<problem statement>
*/

// checkAnswer('1.X');

/*
1.X
<problem statement>

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: (X, Y) => expected output: Z
*/

// trackProgress('1.X');

/* ______________________ PART 2 ______________________
<topic>
*/

/*
2.X
<problem statement>
*/

// checkAnswer('2.X');

/*
2.X
<problem statement>

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: (X, Y) => expected output: Z
*/

// trackProgress('2.X');

/* ______________________ PART 3 ______________________
<topic>
*/

/*
3.X
<problem statement>
*/

// checkAnswer('3.X');

/*
3.X
<problem statement>

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: (X, Y) => expected output: Z
*/

// trackProgress('3.X');

/* ______________________ PART 4 ______________________
<topic>
*/

/*
4.X
<problem statement>
*/

// checkAnswer('4.X');

/*
4.X
<problem statement>

Testing:
- Use the following data to check your code (calling the function with the input and confirming you get the expected output)
- input: (X, Y) => expected output: Z
*/

// trackProgress('4.X');

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
