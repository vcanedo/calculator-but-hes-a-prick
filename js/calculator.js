// JS to execute calculator functions

// evilResponse function to generate a random response
function evilResponse(result) {
  const evilResponses = [
      "Congratulations, you've unlocked the secret to your misery: " + result,
      "You must be truly proud of your mathematical prowess: " + result,
      "Oh, another one? Here's your pitiful answer: " + result,
      "Pathetic attempt, behold the outcome: " + result,
      "Mathematically challenged, here's your reward: " + result,
      "Your answer is as dull as your math skills: " + result,
      "Did you really think you'd get anything different? " + result,
      "Witness the fruit of your labor: " + result,
      "I hope your self-esteem can handle this: " + result
  ];

  return evilResponses[Math.floor(Math.random() * evilResponses.length)];
}

let currentResult = '';  // New variable to store the current result
let previousResult = ''; // New variable to store the previous result

// function to append the value to the result
function appendToResult(value) {
    document.getElementById('result').value += value;
}

// function to clear the result
function clearResult() {
    document.getElementById('result').value = '';
}

// function to calculate the result
function calculate() {
    previousResult = currentResult; // Store the current result before calculation
    const expression = document.getElementById('result').value;
    try {
        currentResult = eval(expression); // Calculate the current result
        document.getElementById('result').value = currentResult;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

// New function to show the previous result
function showPreviousResult() {
    document.getElementById('result').value = previousResult;
}

// KEYBOARD SUPPORT
// Listen for keydown events on the document
document.addEventListener('keydown', function(event) {
  const key = event.key;

  // If the key is a number, an operator, or Enter (=), append it to the result
  if (/^\d$|[\+\-\*/]|Enter/.test(key)) {
      event.preventDefault(); // Prevent the default action of the key press
      if (key === 'Enter') {
          calculate();
      } else {
          appendToResult(key);
      }
  }

  // Clear the result when the Escape key is pressed
  if (key === 'Escape') {
      clearResult();
  }

  // Toggle theme when the T key is pressed
  if (key === 't' || key === 'T') {
      const themeButton = document.getElementById('toggle-theme');
      themeButton.click();
  }

  // Show previous result when the P key is pressed
  if (key === 'p' || key === 'P') {
      showPreviousResult();
  }
});