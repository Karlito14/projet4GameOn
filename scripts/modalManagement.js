import { modal } from './classes/modal.js';

// DOM Elements
const modalbg = document.querySelector("#modal");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalContent = document.querySelector('#content');
const closeSpan = document.querySelector('#close');
const main = document.querySelector('#main');

// close modal event
modalContent.addEventListener('click', (event) => {
  event.stopPropagation();
})

closeSpan.addEventListener('click', () => {
  modal.closeModal(modalbg, main);
});

modalbg.addEventListener('click', () => {
  modal.closeModal(modalbg, main);
})

window.addEventListener('keydown', (event) => {
  if(event.code === 'Escape' && modalbg.style.display === "block") {
    modal.closeModal(modalbg, main);
  }
})

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  modal.launchModal(modalbg, main, modalContent);
}));

// focus in modal
window.addEventListener('keydown', (event) => {
  if(event.code === 'Tab' && modalbg.style.display === 'block') {
    modal.closeFocusInModal(event);
  }
})