'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
const sect1 = document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
const btns = document.getElementsByClassName('btn');

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionalitie😎';
message.innerHTML =
  'We use cookies for improved functionalities😎 <button class = "btn btn--close--cookie">Got it!</button>';
header.prepend(message);

// const str = `We use cookies for improved functionalities😎 <button class = "btn btn--close--cookie">Got it!</button>`;
// header.insertAdjacentHTML('afterbegin', str);

document.querySelector('.btn--close--cookie').addEventListener('click', () => {
  message.remove();
});
message.style.backgroundColor = '#000';
message.style.width = '120%';
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
document.documentElement.style.setProperty('--color-primary', 'orangered');
