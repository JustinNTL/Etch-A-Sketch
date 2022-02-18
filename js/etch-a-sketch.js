const gridPanels = document.querySelector('.gridPanels');
const defaultColumn = 16;
const defualtRow = 16;

function generateGrid(defaultColumn, defualtRow) {
for (let i=0; i< (defaultColumn * defualtRow); i++) {
  const panel = document.createElement('div');
  panel.classList = 'panel';
  gridPanels.appendChild(panel);
  }
}

gridPanels.addEventListener('mouseover', function(e) {
  e.target.classList.replace('panel', 'colorPanel');
});

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

const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', updateGrid);

rainbowPanel = () => {
  
}

const colorBtn = document.querySelector('colorBtn');
colorBtn.addEventListener('click', rainbowPanel);

generateGrid(defaultColumn, defualtRow);

