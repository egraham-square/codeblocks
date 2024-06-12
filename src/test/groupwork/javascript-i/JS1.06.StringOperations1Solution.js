/* ______________________ PART 1 ______________________
Single & Double Quotes
*/

/*
1.1
Change the string below to use single quotes
*/
const DOG_STORY_A= 'I have a dog';

checkAnswer('1.1');

/*
1.2
Change the string below to use double quotes
*/
const DOG_STORY_B = "I have a dog";

checkAnswer('1.2');

/*
1.3
- Add a contraction between "dog" and "is" to get "dog's"
- Uh-oh, that broke the String! Switch the outer quotes from single to double to fix it.
*/
const DOG_STORY_C = "My dog's two years old";

checkAnswer('1.3');

/*
1.4
- Add double quotes around "Karl Barx"
- Uh-oh, that broke the String! Can you fix it by changing the outer quote style?
*/
const DOG_STORY_D = 'My dog is named "Karl Barx"';

checkAnswer('1.4');

/* ______________________ PART 2 ______________________
Escape Sequences & Special Characters
*/

/*
2.1
- Remove the backslashes from the String below
- Uh-oh, that broke the String! Can you fix it by changing the outer quote style?
*/
const DOG_STORY_E = "My dog's name is 'Karl Barx'";

checkAnswer('2.1');

/*
2.2
- Change the quotes around "Karl Barx" to single quotes
- Uh-oh, that broke the String! Can you fix it by escaping the new single quotes (using backslashes)?
*/
const DOG_STORY_F = 'My dog\'s name is \'Karl Barx\'';

checkAnswer('2.2');

/*
2.3
- Change the outer quotes to double quotes
- Uh-oh, that broke the String! Can you fix it by escaping the internal double quotes?
*/
const DOG_STORY_G = "My dog is named \"Karl Barx\"";

checkAnswer('2.3');

/*
2.4
Remove the newline character (\n) so that the String prints on a single line
*/
const DOG_STORY_H = 'My dog\'s name is "Karl Barx." And he\'s two.';

checkAnswer('2.4');

/*
2.5
Replace a space with the newline character (\n) below so that each sentence prints on its own line
*/
const DOG_STORY_I = 'My dog\'s name is "Karl Barx."\nAnd he\'s two.';

checkAnswer('2.5');

/*
2.6
Add the tab character (\t) below to the beginning of each sentence so that the first word on each line is indented.
*/
const DOG_STORY_J = '\tMy dog\'s name is "Karl Barx."\n\tAnd he\'s two.';

checkAnswer('2.6');

/*
2.7
- Create a variable called DOG_STORY_K
- Set the variable equal to a String containing the following text: My dog's name is "Jenifur", and she's three
- Use whatever outer quote style you prefer and use escape characters where necessary.
*/

const DOG_STORY_K = 'My dog\'s name is "Jenifur", and she\'s three';
checkAnswer('2.7');


/*
2.8
- Create a variable called DOG_STORY_L
- Set the variable equal to a String containing the following text: My dog is a 50\50 mix of husky and pug

hint: You'll need to escape the backslash in 50\50
*/

const DOG_STORY_L = 'My dog is a 50\\50 mix of husky and pug'

checkAnswer('2.8');

/* ______________________ PART 3 ______________________
Concatenating Strings
*/

/*
3.1
Remove the plus sign below and combine the two sentences into single unified string
*/
const DOG_STORY_M = 'My dog is named Karl Barx. And he is two.';

checkAnswer('3.1');

/*
3.2
Split the string below into individual sentences that are concatenated together.
*/
const DOG_STORY_N = 'My dog is named Karl Barx.' + ' And he is two.';

checkAnswer('3.2');

/*
3.3
Split the string below into individual words that are concatenated together.
*/
const DOG_STORY_O = 'My' + ' dog' + ' is' + ' named' + ' Karl' +' Barx.';

checkAnswer('3.3');

/*
3.4
Fill in DOG_NAME_P below with the name of a dog you've had (or make something up)
*/
const DOG_NAME_P = "Domino";
const DOG_STORY_P = 'My dog\'s name is ' + DOG_NAME_P + '.';

checkAnswer('3.4');

/*
3.5
- Create a variable called DOG_AGE_Q. Set it to your dog's current age (or make up a number)
- Replace the zero in DOG_STORY_Q with DOG_AGE_Q
*/
const DOG_AGE_Q = 4
const DOG_STORY_Q = 'My dog is ' + DOG_AGE_Q + ' years old';

checkAnswer('3.5');

/*
3.6
- Create a variable called DOG_COLOR. Set it equal to "black and white".
- Replace COLOR with the value of DOG_COLOR (hint: you'll need to use String concatenation)
*/
const DOG_COLOR = "black and white";
const DOG_STORY_R = 'My dog\'s fur is ' + DOG_COLOR;

checkAnswer('3.6');

/*
3.7
- Create a variable called DOG_NAME_S and set it equal to "Jabba the Mutt"
- Create a variable called DOG_AGE_S and set it equal to 5
- Replace NAME and AGE below with the variables you created (using string concatenation)
*/
const DOG_NAME_S = "Jabba the Mutt"
const DOG_AGE_S = 5
const DOG_STORY_S = "My dog is named " + DOG_NAME_S + ", and he's " + DOG_AGE_S + " years old";

checkAnswer('3.7');

/*
3.8
- Create a variable called DOG_BREED_T and set it equal to "pit mix"
- Create a variable called DOG_WEIGHT_T and set it equal to 50
- Create a variable called DOG_STORY_T and set it equal a String containing the following text: "My dog is a pit mix that weighs 50 pounds"
- If you hardcoded the breed and weight, replace those with the variables that contain those values.
*/

const DOG_BREED_T = "pit mix";
const DOG_WEIGHT_T = 50;
const DOG_STORY_T = "My dog is a " + DOG_BREED_T + " that weighs " + DOG_WEIGHT_T + " pounds";

checkAnswer('3.8');

/* ______________________ PART 4 ______________________
String Concatenation with Compound Assignment
*/

/*
4.1
- Change NAME below to "Jennifur"
*/

let dogStoryU = "My dog is named "
dogStoryU += "Jennifur";
dogStoryU += ".";

checkAnswer('4.1');


/*
4.2
- Create a variable called DOG_WEIGHT_V and set it equal to 10
- Replace the 0 with the DOG_WEIGHT_V variable
*/
const DOG_WEIGHT_V = 10
let dogStoryV = "My dog weighs "

dogStoryV += DOG_WEIGHT_V;
dogStoryV += " pounds.";

checkAnswer('4.2');

/*
4.3
- Use compound assignment to append the remaining dog names to dogStoryW. The first has been done for you. Make sure to append the comma separator in between each.
*/

let dogStoryW = "My dogs are: "
const DOG_NAME_1 = "Jabba the Mutt";
const DOG_NAME_2 = "Karlbarx";
const DOG_NAME_3 = "Jennifur"
const COMMA_SEPARATOR = ", "

dogStoryW += DOG_NAME_1;
dogStoryW += COMMA_SEPARATOR + DOG_NAME_2;
dogStoryW += COMMA_SEPARATOR + DOG_NAME_3;

checkAnswer('4.3');

/*
4.4
- Create a variable called dogStoryX and set it equal to "I have a dog."
- Create a variable called DOG_NAME_X and set it equal to "Jabba the Mutt"
- Append a new line character to dogStoryX
- Append "His name is " to dogStoryX
- Append DOG_NAME_X to dogStoryX
*/
const DOG_NAME_X = "Jabba the Mutt"
const dogStoryX = "I have a dog.\nHis name is " + DOG_NAME_X;

checkAnswer('4.4');

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

function variableEqualsValue(variableName, expectedValue) {
    if (isDefined(variableName) && eval(variableName) == expectedValue) {
        return true;
    }
    return false;
}

function checkVariable(variableName, expectedValue) {
    const variableValue = eval(variableName);

    if (!variableEqualsValue(variableName, expectedValue)) {
        throw new Error(
            'Expected ' + variableName + ' to be: ' + expectedValue + ' but was: ' + variableValue
        );
    }
    console.log(variableName + ' equals: ' + variableValue)
}

function isInitializedVariable(variableName) {
    if (!isDefined(variableName) || eval(variableName) == null) {
        throw new Error('Expected ' + variableName + ' to be initialized.');
    }
}

function isUninitializedVariable(variableName) {
    if (!variableEqualsValue(variableName, null)) {
        throw new Error(
            'Expected ' + variableName + ' to be declared but uninitialized.'
        );
    }
}

function checkAnswer(exercise) {
    switch (exercise) {
        case '1.1':
            checkVariable('DOG_STORY_A', 'I have a dog');
            break;
        case '1.2':
            checkVariable('DOG_STORY_B', 'I have a dog');
            break;
        case '1.3':
            checkVariable('DOG_STORY_C', 'My dog\'s two years old');
            break;
        case '1.4':
            checkVariable('DOG_STORY_D', 'My dog is named "Karl Barx"');
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
            checkVariable('DOG_STORY_E', "My dog's name is 'Karl Barx'");
            break;
        case '2.2':
            checkVariable('DOG_STORY_F', 'My dog\'s name is \'Karl Barx\'');
            break;
        case '2.3':
            checkVariable('DOG_STORY_G', "My dog is named \"Karl Barx\"");
            break;
        case '2.4':
            checkVariable('DOG_STORY_H', 'My dog\'s name is "Karl Barx." And he\'s two.');
            break;
        case '2.5':
            checkVariable('DOG_STORY_I', 'My dog\'s name is "Karl Barx."\nAnd he\'s two.');
            break;
        case '2.6':
            checkVariable('DOG_STORY_J', '\tMy dog\'s name is "Karl Barx."\n\tAnd he\'s two.');
            break;
        case '2.7':
            checkVariable('DOG_STORY_K', 'My dog\'s name is "Jenifur", and she\'s three');
            break;
        case '2.8':
            checkVariable('DOG_STORY_L', 'My dog is a 50\\50 mix of husky and pug');
            break;
        case '3.1':
            checkVariable('DOG_STORY_M', 'My dog is named Karl Barx. And he is two.');
            break;
        case '3.2':
            checkVariable('DOG_STORY_N', 'My dog is named Karl Barx.' + ' And he is two.');
            break;
        case '3.3':
            checkVariable('DOG_STORY_O', 'My ' + 'dog ' + 'is ' + 'named ' + 'Karl ' + 'Barx.');
            break;
        case '3.4':
            checkVariable('DOG_STORY_P', 'My dog\'s name is ' + DOG_NAME_P + '.');
            break;
        case '3.5':
            checkVariable('DOG_STORY_Q', 'My dog is ' + DOG_AGE_Q + ' years old');
            break;
        case '3.6':
            checkVariable('DOG_STORY_R', 'My dog\'s fur is ' + DOG_COLOR);
            break;
        case '3.7':
            checkVariable('DOG_STORY_S', "My dog is named " + DOG_NAME_S + ", and he's " + DOG_AGE_S + " years old");
            break;
        case '3.8':
            checkVariable('DOG_STORY_T', "My dog is a " + DOG_BREED_T + " that weighs " + DOG_WEIGHT_T + " pounds");
            break;
        case '4.1':
            checkVariable('dogStoryU', 'My dog is named Jennifur.');
            break;
        case '4.2':
            checkVariable('dogStoryV', 'My dog weighs ' + DOG_WEIGHT_V + ' pounds.');
            break;
        case '4.3':
            checkVariable('dogStoryW', 'My dogs are: Jabba the Mutt, Karlbarx, Jennifur' );
            break;
        case '4.4':
            checkVariable('dogStoryX', 'I have a dog.' + '\n' + 'His name is ' + DOG_NAME_X);
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
        case '4.':
            checkVariable('', '');
            break;
        default:
            throw new Error(exercise + ' does not have an answer key.');
    }
    console.log('✅ Passed exercise ' + exercise + '! ✅\n\n');
}