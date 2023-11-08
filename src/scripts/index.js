/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/app-footer';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import swRegister from './utils/sw-register';
import App from './views/app';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector('.menu-btn'),
  ctaEnter: document.querySelector('#drawer-btn'),
  hero: document.querySelector('.hero'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
