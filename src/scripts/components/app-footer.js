class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .footer {
            background-color: var(--main-color);
            padding: 2em;
            width: 100%;
            text-align: center;
        }
        
        .footer a{
            color: var(--font-main);
            font-size: 16px;
            font-weight: 600;
            padding: 15px 10px;
        }
      </style>
      <footer>
          <div class="footer">
          <a href="#">Copyright &copy 2023 - Ian Septaina </a>
          </div>
      </footer>
      `;
  }
}
customElements.define('app-footer', AppFooter);
