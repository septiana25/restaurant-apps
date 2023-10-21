import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';

import App from './views/app';
// import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('.menu-btn'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});
window.addEventListener('load', async () => {
  app.renderPage();
});
