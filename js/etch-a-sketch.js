const gridPanels = document.querySelector('.gridPanels');

generateGrid = () => {
for (let i=0; i<256; i++) {
  const panel = document.createElement('div');
  panel.classList = 'panel';
  gridPanels.appendChild(panel);
  }
};

gridPanels.addEventListener('mouseover', function(e) {
  e.target.classList.replace('panel', 'colorPanel');
});

updateGrid = () => {
  gridPanels.innerText = '';
  let panelNum = prompt('Please specify new grid dimensions between 2-100: ');
  while (isNaN(panelNum) || parseInt(panelNum) < 2 || parseInt(panelNum) > 100) {
    alert(`${panelNum} is not a valid entry, please try again.`);
    panelNum = prompt('Please specify new grid dimensions between 2-100: ');
  }
}

const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', updateGrid);

generateGrid();

