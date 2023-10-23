import router from '../routers/router';
import UrlParser from '../routers/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button, ctaEnter, hero, drawer, content,
  }) {
    this._button = button;
    this._ctaEnter = ctaEnter;
    this._hero = hero;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      ctaEnter: this._ctaEnter,
      hero: this._hero,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = router[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
