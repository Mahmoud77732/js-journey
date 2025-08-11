
import ColorManager from './colorManager.js';
import { setBackgroundColor } from './utils.js';

const colorManager = new ColorManager();

const colorPicker = document.querySelector('#colorPicker');
const randomColorBtn = document.querySelector('#randomColorBtn');

colorPicker.addEventListener('input', (e) => {
    colorManager.setColor(e.target.value);
    setBackgroundColor(colorManager.getColor());
});

randomColorBtn.addEventListener("click", () => {
  const randomColor = colorManager.generateRandomColor();
  colorPicker.value = randomColor;
  setBackgroundColor(randomColor);
});

setBackgroundColor(colorManager.getColor()); // initial background color


