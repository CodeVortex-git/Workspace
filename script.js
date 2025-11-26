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
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', e => {
//   e.preventDefault();
//   e.target.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav__links').addEventListener('click', e => {
//   e.preventDefault();
//   e.target.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', e => {
//   e.preventDefault();
//   e.target.style.backgroundColor = randomColor();
// });

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   const id = e.target.getAttribute('href');
//   console.log(id);
//   document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   if (e.target.classList.contains('nav__link')) console.log('LINK');
// });

// const h1 = document.querySelector('h1');

// //Going Downwards in the DOM: Transversing the DOM
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'white';

// console.log(h1.parentNode);
// h1.closest('.header').style.background = 'white';

// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

// tabsContainer.addEventListener('click', function (e) {
//   const clicked = e.target.closest('.operations__tab');
//   console.log(clicked);

//   //Handling null clicks
//   if (!clicked) return;

//   //Active tab
//   tabs.forEach(t => t.classList.remove('operations__tab--active'));
//   tabsContent.forEach(c => c.classList.remove('operations__tab--active'));
//   clicked.classList.add('operations__tab--active');

//   //Activate Content Area
//   document
//     .querySelector(`.operations__content--${click.dataset.tab}`)
//     .classList.add('operations__content--active');
// });

// //Menufade Animation
// const handleHover = function (e, opacity) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) {
//         el.style.opacity = opacity;
//       }
//     });
//     logo.style.opacity = opacity;
//   }
// };

const nav = document.querySelector('.nav');

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

// //Adding Sticky Navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function (e) {
//   console.log(this.window.scrollY);

//   if (this.window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
// //   } else {
// //     nav.classList.remove('sticky');
//   }
// });

//Sticky Navigation: Intersection Observer API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (enteries) {
  const [entry] = enteries;
  console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
