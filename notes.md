# Calculator Project — Learning Notes

## 1. HTML

HTML = HyperText Markup Language.

HTML is used to create the structure/content of a webpage.

### Basic HTML structure

<!DOCTYPE html>
<html>
<head>
    ...
</head>
<body>
    ...
</body>
</html>

### Important parts

<!DOCTYPE html>
Tells the browser that this is an HTML5 document.

<html>
The root element of the webpage.

<head>
Contains information about the webpage that isn't normally displayed
as the main page content.

<body>
Contains the content that appears on the webpage.

<title>
Sets the title shown in the browser tab.


## 2. Connecting CSS

We created a separate file:

style.css

We connect it to HTML using:

<link rel="stylesheet" href="style.css">

This tells the browser to use the CSS rules from style.css
to style the HTML page.


## 3. div

A <div> is a container used to group elements together.

Example:

<div class="calculator">
</div>

class="calculator"
gives the div a class name.

We can use that class in CSS:

.calculator {
    ...
}

The dot (.) means we are selecting a class.


## 4. Input

We created the calculator display using:

<input type="text" id="display" readonly>

<input>
Creates an input field.

type="text"
Makes it a text input.

id="display"
Gives the element a unique ID so we can refer to it later,
especially with JavaScript.

readonly
Prevents the user from typing directly into the display.

The calculator buttons will eventually control this display.


## 5. Project structure

Our calculator will contain:

index.html
→ Structure of the calculator

style.css
→ Appearance/design of the calculator

script.js
→ Functionality/logic of the calculator

notes.md
→ My personal learning notes

## 6. Another div — buttons container

We created:

<div class="buttons">
</div>

This is another container.

Its purpose is to group all the calculator buttons together.

We can later use the .buttons class in CSS to control
how the buttons are arranged on the calculator.

## 7. Button

A <button> creates a clickable button.

Example:

<button>7</button>

The text between the opening and closing button tags
is displayed on the button.

Right now our buttons are only HTML elements.
JavaScript will later give them functionality.

## 8. CSS Grid

CSS can control how HTML elements are arranged.

We used:

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

display: grid;
Turns the container into a grid layout.

grid-template-columns:
Controls the number and size of columns.

repeat(4, 1fr);
Creates 4 equal columns.

1fr means one equal fraction of the available space.

## 9. gap

gap controls the space between items in a CSS Grid or Flexbox layout.

Example:

gap: 10px;

This creates 10 pixels of space between the buttons.

## 10. Styling the calculator container

We can select the calculator container using:

.calculator {
    ...
}

width: 300px;
Sets the width of the calculator.

padding: 20px;
Creates space inside the calculator, between its content and its border.

border: 1px solid black;
Adds a 1-pixel solid black border around the calculator.

The CSS structure is:

.calculator {
    width: 300px;
    padding: 20px;
    border: 1px solid black;
}

## 11. Styling an element using an ID

We can select an HTML element by its ID using #.

HTML:

<input type="text" id="display" readonly>

CSS:

#display {
    ...
}

The # symbol means we are selecting an ID.

### Useful CSS properties

width: 100%;
Makes the element use the available width.

box-sizing: border-box;
Makes the padding and border fit within the specified width.

padding: 10px;
Adds space inside the element.

margin-bottom: 10px;
Adds space below the element.

font-size: 20px;
Changes the size of the text.

## 12. Styling buttons

We can select all HTML buttons using:

button {
    ...
}

### CSS properties

padding: 15px;
Adds space inside the button and makes it larger.

font-size: 18px;
Changes the size of the button text.

cursor: pointer;
Changes the mouse cursor to a pointer when hovering over
the button, indicating that it can be clicked. 

## 13. Centering an element with margin

We can use:

margin: 50px auto;

50px:
Adds 50px of space above and below the element.

auto:
Automatically distributes the left and right margin,
which centers the element horizontally.

When an element has a fixed width, using:

margin: 50px auto;

is a common way to center it horizontally.

## 14. Making buttons fill their grid cells

We can use:

width: 100%;

This tells the button to use 100% of the available width
inside its grid cell.

This helps the calculator buttons look evenly sized.

## 15. Text alignment

We can use:

text-align: right;

This aligns text to the right side of an element.

We used it for the calculator display so numbers
will appear on the right side, like a typical calculator.

## 16. Border radius

We can use:

border-radius: 5px;

This rounds the corners of an element.

A larger value creates more rounded corners.

## 17. Hover effect

:hover is a CSS pseudo-class.

It applies styles when the mouse pointer is placed
over an element.

Example:

button:hover {
    background-color: lightgray;
}

This changes the button's background when the mouse
hovers over it.

Hover effects are commonly used to give visual feedback
that an element is interactive.

## 18. Background color

We can use:

background-color: #f2f2f2;

background-color changes the background color of an element.

#f2f2f2 is a hexadecimal color code representing
a very light gray.

Hexadecimal colors in CSS start with # followed by
six characters/numbers.

## 19. Styling the display

We added:

border: 1px solid black;

This adds a thin border around the display.

We also added:

background-color: white;

This changes the display background to white.

We can customize these colors later when designing
the final appearance of the calculator.

## 20. Font weight

We can use:

font-weight: bold;

This makes text appear thicker and more prominent.

We used it on the calculator buttons to make
the numbers and operators easier to read.

## 21. Box shadow

We can use:

box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

This creates a shadow around an element.

The values control the shadow's position, blur,
and transparency.

box-shadow can make an element appear raised from
the page.

## 22. JavaScript file

We created:

script.js

JavaScript will contain the logic and functionality of our calculator.

Our three main web files have different jobs:

index.html
→ Structure

style.css
→ Appearance

script.js
→ Functionality

## 23. Connecting JavaScript

We connect JavaScript to HTML using:

<script src="script.js"></script>

src means "source".

It tells the browser where the JavaScript file is located.

Our three files are now connected:

index.html
→ Structure

style.css
→ Appearance

script.js
→ Functionality

## 24. JavaScript — Finding an HTML element

We wrote:

let display = document.getElementById("display");

document
→ Represents the webpage.

getElementById("display")
→ Finds the HTML element whose ID is "display".

let display
→ Stores the element in a variable called display.

The HTML element we are finding is:

<input type="text" id="display" readonly>

JavaScript can use this reference to interact with
the calculator display.

## 25. Changing an input's value with JavaScript

We wrote:

display.value = "Hello";

value represents the current content of an input element.

This line tells JavaScript to put "Hello" into
the calculator display.

This demonstrates that JavaScript can find an HTML
element and change its content.

## 26. Testing JavaScript

We temporarily used:

display.value = "Hello";

This was a test to confirm that JavaScript was correctly
connected to the HTML and could control the display.

After confirming that it worked, we removed the test code.

## 27. onclick

onclick is an HTML attribute that tells the browser
to run JavaScript when an element is clicked.

Example:

<button onclick="addToDisplay('7')">7</button>

When the button is clicked, it calls the JavaScript
function addToDisplay() and passes "7" to it.

We are using this to connect calculator buttons
to JavaScript functionality.

## 28. JavaScript functions

We created:

function addToDisplay(value) {
    display.value += value;
}

function
→ Creates a reusable block of JavaScript code.

addToDisplay
→ The name of our function.

value
→ A parameter that receives information from the button.

When we click:

<button onclick="addToDisplay('7')">7</button>

the value "7" is passed into the function.

display.value += value;
→ Adds the new value to whatever is already displayed.

For example:

Click 7 → 7
Click 7 → 77
Click 7 → 777

## 29. Connecting multiple buttons

Each calculator number button can call the same function.

Example:

<button onclick="addToDisplay('8')">8</button>

<button onclick="addToDisplay('9')">9</button>

The function is the same:

addToDisplay()

Only the value passed to it changes.

This allows one function to handle many buttons.

## 30. Different buttons can call different functions

Number and operator buttons use:

addToDisplay()

because their values need to be added to the display.

The C button will use:

clearDisplay()

because its job is to clear the display instead of
adding "C" to it.

Example:

<button onclick="clearDisplay()">C</button>

## 31. Clearing the display

We created:

function clearDisplay() {
    display.value = "";
}

This function clears everything from the calculator display.

"" is an empty string, meaning there is no text/value.

The C button calls this function using:

onclick="clearDisplay()"

## 32. The equals button

The equals button uses a different function:

<button onclick="calculate()">=</button>

The = button should not be added to the display.

Its job is to tell JavaScript to calculate
the expression currently shown.

Example:

5 + 3
↓
press =
↓
8

We will create the calculate() function next.

## 33. Creating the calculate() function

We created:

function calculate() {
    display.value = eval(display.value);
}

display.value
→ Contains the expression currently shown in the calculator.

eval()
→ Evaluates a JavaScript expression.

For example:

eval("5+3")
→ 8

The result is then placed back into the display.

So:

5 + 3
↓
press =
↓
8

## 34. Testing calculator operations

We tested the calculator using:

9 - 4 = 5
6 * 3 = 18
8 / 2 = 4

Testing different inputs helps us verify that the
calculator logic is working correctly.

We can also test more complex expressions to understand
how JavaScript evaluates mathematical operations.

## 35. Testing decimal calculations

We can also test decimal numbers.

Examples:

2.5 + 1.5 = 4
5.5 - 2.2 = 3.3
2.5 * 2 = 5

Testing decimals helps verify that the calculator
can work with numbers containing a decimal point.

## 36. Edge case — division by zero

We tested:

5 / 0

JavaScript returned:

Infinity

This is an example of an edge case.

An edge case is an unusual input or situation that
we should consider when building a program.

We will later improve the calculator so division by zero
shows a user-friendly message instead of Infinity.

## 37. Handling division by zero

We used an if...else statement to handle division by zero.

```javascript
if (result === Infinity || result === -Infinity) {
    display.value = "Cannot divide by 0";
} else {
    display.value = result;
}

## 38. Checking for an empty calculation

We used an if...else statement to check whether
the calculator display is empty.

```javascript
if (display.value === "") {
    display.value = "Enter a calculation";
}

## 39. try...catch

JavaScript provides try...catch for handling errors.

```javascript
try {
    // code that might cause an error
} catch {
    // code to run if an error happens
}

## 40. Using try...catch in the calculator

We used try...catch around eval().

''javascript
try {
    let result = eval(display.value);
    
    // calculation checks
} catch {
    display.value = "Error";
}

## 41. Improving the calculator design

We customized the calculator using CSS.

Changes included:

- Changed the page background color.
- Added a custom font.
- Centered the calculator using Flexbox.
- Changed the calculator width and spacing.
- Added a dark purple calculator background.
- Added rounded corners.
- Added shadows for a 3D effect.
- Styled the calculator display.
- Increased the display height and font size.
- Added rounded buttons.
- Added custom button colors.
- Added hover effects.
- Added a click/active effect.
- Added different styling for calculator elements where needed.

These changes make the calculator more visually appealing
and give it a customized design instead of using the default
browser styling.


## 42. Backspace button

We added a Backspace button:

```html
<button onclick="backspace()">←</button>