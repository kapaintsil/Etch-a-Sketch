
const grid = document.querySelector('#grid-input');                  // Select the grid input element
const gridButton = document.querySelector('#grid-button');           // Select the grid button element
const divContainer = document.querySelector('.container');           // Select the container div element
const colorPalette = document.querySelector('#color');               // Select the color palette input element
const randomColorsButton = document.querySelector('#random-color');  // Select the random colors button element
const eraser = document.querySelector('#eraser');                    // Select the eraser button element
const resetButton = document.querySelector('#reset');                // Select the reset button element
 
// Function to generate a random RGB color
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to create grid boxes
function createBoxes(numberPerRow) {
  // Calculate the total number of boxes and the modulus value
  const total = (numberPerRow * numberPerRow) + numberPerRow;
  const mod = numberPerRow + 1;

  // Loop to create each box
  for (let i = 1; i < total; i++) {
    // Create a new div element
    const div = document.createElement('div');

    // If the current index is a multiple of mod, create a row break
    if (i % mod === 0) {
      div.style.cssText = "border: 0; height: 0; width: 100%";
    } else {
      // Otherwise, style the box
      div.style.cssText = `border: none; width: calc(100% / ${numberPerRow}); height: calc(100% / ${numberPerRow});`;
    }

    // Append the box to the container
    divContainer.appendChild(div);

    // Add event listener for mouseover to change the box color to black
    div.addEventListener('mouseover', () => {
      div.style.cursor = "url(icons/brush.png) 16 16, auto";
      div.style.backgroundColor = `black`;
    });

    // Add event listener for random colors button
    randomColorsButton.addEventListener('click', () => {
      div.addEventListener('mouseover', () => {
        div.style.cursor = "url(icons/brush.png), auto";
        div.style.backgroundColor = `${randomColor()}`;
      });
    });

    // Add event listener for eraser button
    eraser.addEventListener('click', () => {
      div.addEventListener('mouseover', () => {
        div.style.cursor = "url(icons/eraser.png) 16 16, auto";
        div.style.background = "transparent";
      });
    });

    // Add event listener for color palette input
    colorPalette.addEventListener('click', () => {
      div.addEventListener('mouseover', () => {
        div.style.cursor = "url(icons/brush.png), auto";
        div.style.backgroundColor = `${colorPalette.value}`;
      });
    });
  }
}

// Add event listener for grid button to create boxes based on input value
gridButton.addEventListener('click', () => {
  const gridNumber = Number(grid.value);
  createBoxes(gridNumber);
});

// Add event listener for reset button to reload the page
resetButton.addEventListener('click', () => {
  window.location.reload();
});