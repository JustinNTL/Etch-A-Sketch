const gridPanels = document.querySelector('.gridPanels');
const defaultColumn = 16;
const defualtRow = 16;
const resetBtn = document.querySelector('.resetBtn');
const colorBtn = document.querySelector('.colorBtn');
let active = false;

function generateGrid(defaultColumn, defualtRow) {
for (let i=0; i< (defaultColumn * defualtRow); i++) {
  const panel = document.createElement('div');
  panel.classList = 'panel';
  panel.addEventListener('mouseover', () => colorPanel(panel));
  gridPanels.appendChild(panel);
  }
}

updateGrid = () => {
  let panelNum = prompt('Please specify new grid dimensions between 2-100: ');
  while (isNaN(panelNum) || parseInt(panelNum) < 2 || parseInt(panelNum) > 100) {
    alert(`${panelNum} is not a valid entry, please try again.`);
    panelNum = prompt('Please specify new grid dimensions between 2-100: ');
  }
  gridPanels.style.setProperty(
    'grid-template-columns', `repeat(${panelNum}, 2fr)`
  );
  gridPanels.style.setProperty(
    'grid-template-rows', `repeat(${panelNum}, 2fr)`
  );
  if (panelNum !== null) {
    gridPanels.innerText = '';
    generateGrid(panelNum, panelNum);
  }
};

function colorPanel(panel) {
  let colorHue = Math.random() * 360;
  if(active) {
    panel.classList.remove('colorPanel');
    panel.style.setProperty('background-color', `hsl(${colorHue}, 100%, 50%)`);
  } else {
    panel.classList.add('colorPanel');
  }
}

rainbowPanel = () => {
  active = !active;
}

resetBtn.addEventListener('click', updateGrid);
colorBtn.addEventListener('click', rainbowPanel);

generateGrid(defaultColumn, defualtRow);