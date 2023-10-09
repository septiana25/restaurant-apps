import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const menuBtn = document.querySelector('.menu-btn');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menuBtn.addEventListener('click', function (event) {
  drawer.classList.toggle('active');
  event.stopPropagation();
});


hero.addEventListener('click', function () {
  drawer.classList.remove('active');
});

main.addEventListener('click', function () {
  drawer.classList.remove('active');
});