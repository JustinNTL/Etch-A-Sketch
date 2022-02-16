const gridPanels = document.querySelector('.gridPanels');

generateGrid = () => {
for (let i=0; i<256; i++) {
  const panel = document.createElement('div');
  panel.classList = 'panel';
  gridPanels.appendChild(panel);
  }
};

const panel = document.querySelector('div');
panel.addEventListener('mouseover', function(e) {
  e.target.classList.replace('panel', 'colorPanel');
});

generateGrid();