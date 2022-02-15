const gridPanels = document.querySelector('.gridPanels');
for (let i=0; i<256; i++) {
  const panel = document.createElement('div');
  panel.className = 'panel';
  gridPanels.appendChild(panel);
}