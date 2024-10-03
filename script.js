
const grid = document.querySelector('#grid-input');
const gridButton = document.querySelector('#grid-button');
const divContainer = document.querySelector('.container');
const colorPalette = document.querySelector('#color');
const randomColorsButton = document.querySelector('#random-color');
const eraser = document.querySelector('#eraser')
const resetButton = document.querySelector('#reset');

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g= Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createBoxes(numberPerRow) {

  const total = (numberPerRow * numberPerRow) + numberPerRow;
  const mod = numberPerRow + 1;

  for(let i = 1; i < total; i++) {

    const div = document.createElement('div');

    if(i % mod === 0) {
      div.style.cssText = "border: 0; height: 0; width: 100%"
    } 
    else {
      div.style.cssText = `border: none; width: calc(100% / ${numberPerRow}); height: calc(100% / ${numberPerRow});`
    }
    divContainer.appendChild(div);

    div.addEventListener('mouseover', () => {
      div.style.cursor = "url(icons/brush.png) 16 16, auto";
      div.style.backgroundColor = `black`;
    });

    randomColorsButton.addEventListener('click', () => {
      
      div.addEventListener('mouseover', () => {
        div.style.cursor = "url(icons/brush.png), auto";
        div.style.backgroundColor = `${randomColor()}`;
      });
    });

    eraser.addEventListener('click', () => {

      div.addEventListener('mouseover', () => {
        div.style.cursor = "url(icons/eraser.png) 16 16, auto";
        div.style.background = "transparent";
      });
    });
  
  colorPalette.addEventListener('click', () => {
    div.addEventListener('mouseover', () => {
      div.style.cursor = "url(icons/brush.png), auto";
      div.style.backgroundColor = `${colorPalette.value}`
    });
  });

  }  
}

gridButton.addEventListener('click', () => {
  const gridNumber = Number(grid.value);
  createBoxes(gridNumber);
});

resetButton.addEventListener('click', () => {
  window.location.reload();
})