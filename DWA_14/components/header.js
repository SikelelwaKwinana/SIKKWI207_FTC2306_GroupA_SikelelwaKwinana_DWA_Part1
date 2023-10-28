import { html, css, LitElement } from '../lib/lit-html.js';


class headerComponent extends LitElement {
  static styles = css`
  
    .header {
      
      background-color: #6e42b4;
      color: #fff;
      padding: 10px;
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  `;

  render() {
    return html`
      <div class="header">
        <h1>Tally App Counter</h1>
      </div>
    `;
  }
}

customElements.define('header-component', headerComponent);
