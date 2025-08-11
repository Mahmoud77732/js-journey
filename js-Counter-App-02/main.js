import Counter from './counter.js';
import { updateTextContent } from './utils.js';

const counter = new Counter();

const render = () => {
  updateTextContent('#counterValue', counter.getValue());
};

document.querySelector('#incrementBtn').addEventListener('click', () => {
  counter.increment();
  render();
});

document.querySelector('#decrementBtn').addEventListener('click', () => {
  counter.decrement();
  render();
});

document.querySelector('#resetBtn').addEventListener('click', () => {
  counter.reset();
  render();
});

render(); // Initial render