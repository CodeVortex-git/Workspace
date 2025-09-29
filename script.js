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

/*
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

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

//Non-standard

console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.alt = "This is some beautiful pic, won't you agree?";
logo.setAttribute('institution', 'Lautech');
console.log(logo.getAttribute('institution'));
*/

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');

btnScrollTo.addEventListener('click', e => {
  const s1coods = section1.getBoundingClientRect();
  // const s2coods = section2.getBoundingClientRect();
  console.log(s1coods);
  console.log(e.target.getBoundingClientRect());

  //Scrolling
  // Alt 1
  // window.scrollTo(
  //   s1coods.left + window.pageXOffset,
  //   s1coods.top + window.pageYOffset
  // );
  //Alt 2
  // window.scrollTo({
  //   left: s1coods.left + window.pageXOffset,
  //   top: s1coods.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //Modern way to
  section1.scrollIntoView({ behavior: 'smooth' });
});

//Hover Alert
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', e => {
//   alert('You just hovered over the header element :D');
// });

// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', e => {
  e.preventDefault();
  e.target.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();
  e.target.style.backgroundColor = randomColor();
});

document.querySelectorAll('.nav').addEventListener('click', e => {
  e.preventDefault();
  e.target.style.backgroundColor = randomColor();
});
