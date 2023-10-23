class NotFound extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        .loader {
            height: 40px;
            width: 40px;
            margin: 0 auto;
            border-radius: 50%;
            box-shadow: inset 0 0 0 #E1A90C;
            animation: load 2s linear infinite alternate;
          }
          
          @keyframes load {
            0% {
              box-shadow: inset -20px 40px 0 #E1A90C;
            }
          
            100% {
              box-shadow: inset 20px -40px 0 #E1A90C;
            }
          }
        </style>

        <div class="not-found">
            <div class="loader"></div>
            <h2>Data Tidak Ditemukan</h2>
        </div>
        `;
  }
}

customElements.define('app-not-found', NotFound);
