class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header>
        <a class="logo" href="#">
          <img src="./assets/restaurant-id.png" alt="logo restaurantID">
        </a>
        <div tabindex="0" id="drawer-btn">
          <a class="menu-btn" aria-label="menu navigation">☰</a>
        </div>
        <nav class="navbar" id="drawer">
          <ul class="nav-list">
            <li class="nav-item"><a href="#">Home</a></li>
            <li class="nav-item"><a href="#/favorite">Favorite</a></li>
            <li class="nav-item"><a href="https://www.linkedin.com/in/ian-septiana-3329228a/" target="_blank" rel="noreferrer">About Us</a></li>
          </ul>
        </nav>
      </header>
        `;
  }
}
customElements.define('app-bar', AppBar);
