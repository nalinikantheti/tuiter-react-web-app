// alert('Hello World!');

console.log("Hello World!");

console.log("Variables and Constants");
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1
                  + functionScoped
                  - blockScoped;
console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);


console.log("Variable Types");
let numberVariable = 123;
let floatingPointVariable = 234.345;
let stringVariable = 'Hello World';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
console.log(numberVariable);
console.log(floatingPointVariable);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);

console.log("Boolean Variables");
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointVariable !== 321.432;
let false3 = numberVariable < 100;
let sortaTrue = '1' == 1;
let notTrue = '1' === 1;
console.log(true1);
console.log(false1);
console.log(false2);
console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);

console.log('If else');
if(true1) {
    console.log(true);
}

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

console.log("Ternary conditional operator");
let loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting);

console.log("Legacy ES5 Function")
function add(a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

console.log("ES6 Arrow Function")
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

console.log("Implicit return")
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

console.log("Parenthesis and Parameters")
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

console.log("Arrays")
let numberArray1 = [1,2,3,4,5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);

console.log("Array index and length");
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);

console.log("Add and remove data to arrays");
// Adding new items
numberArray1.push(6);
stringArray1.push('string3');

// Remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1,1);
console.log(numberArray1);
console.log(stringArray1);

console.log("For loops");
for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

console.log("Map function");
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
console.log(squares);
console.log(cubes);

console.log("Find function");
const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');
console.log(four);
console.log(string3);

console.log("Find index");
const fourIndex = numberArray1.findIndex(a => a === 4);
const string3Index = stringArray1.findIndex(a => a === 'string3');
console.log(fourIndex);
console.log(string3Index);

console.log("Filter function");
const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
const evenNumbers = numberArray1.filter(a => a % 2 === 0);
const oddNumbers = numberArray1.filter(a => a % 2 === 0);
console.log(numbersGreaterThan2);
console.log(evenNumbers);
console.log(oddNumbers);

// console.log("Reduce function");
// const sum = numberArray1.reduce((a, b) => a + b);
// const product = numberArray1.reduce((a, b) => a * b);
// console.log(sum);
// console.log(product);

const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? 'Yes' : 'No'}`;
console.log(greeting2);

const init = () => {

    console.log('Hello world from jQuery');
    /* do the rest of the lab work here */

    // Getting dom elements
    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');
    console.log('Binding to DOM');
    console.log(bindById);
    console.log(bindByClass);

    // Changing the style of the dom elements
    const changeStyle = $('#change-style');
    const changeStyle2 = $('.change-style');

    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');

    // getting the id of the dom element
    const getIDAttr = $('#get-id-attr');
    const id = getIDAttr.attr('id');
    console.log(id);

    // Setting the class of the dom element
    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class', 'class-0');

    // Adding a class to the dom element
    const addClass1Example = $('#add-class-1');
    addClass1Example.addClass('class-1');

    // Removing a class from the dom element
    const removeClass1Example = $('#remove-class-1');
    removeClass1Example.removeClass('class-2');

    // Hide and show the dom element
    const hideMe = $('#hide-me');
    hideMe.hide();

    const showMe = $('#show-me');
    showMe.show();

    // Creating a new dom element
    const newLineItem = $('<li>Line Item 1</li>');
    const anotherLineItem = $('<li>Line Item 2</li>');

    // Appending the new dom element to the dom
    const ul = $('#append-new-elements');
    ul.append(newLineItem);
    ul.append(anotherLineItem);

    // Removing and emptying the dom element from the dom
    const removeLi = $('#remove-this');
    const emptyUl = $('#empty-this');
    removeLi.remove();
    emptyUl.empty();

    // Changing content
    const changeThisText = $('#change-this-text');
    const chnageThisHtml = $('#change-this-html');

    changeThisText.html('New text');
    chnageThisHtml.html(`
        <li>Line Item A</li>
        <li>Line Item B</li>
        <li>Line Item C</li>
    `);

    // Navigating up and down the dom tree
    const child2 = $('#child-2');
    const parent1 = child2.parents('#parent');
    parent1.css('background-color', 'red').css('color', 'white');

    const parent = $('#parent');
    const child = parent.find('#child-2');
    child.css('background-color', 'blue');

    // Handling click events
    const handleClick = () => console.log('Handle click');

    const clickable = $('.clickable');
    clickable.click(handleClick);

    // Event target
    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        $(target).css('background-color', 'blue').css('color', 'white');
    }

    const eventTarget = $('#event-target');
    eventTarget.click(handleEventTarget);

    let hideBtn, showBtn, hideShowHeader;
    hideBtn = $('#hide');
    showBtn = $('#show');
    hideShowHeader = $('#hide-show');

    const hideHandler = () => {
        hideShowHeader.hide();
    }

    const showHandler = () => {
        hideShowHeader.show();
    }

    hideBtn.click(hideHandler);
    showBtn.click(showHandler);

}

$(init);


