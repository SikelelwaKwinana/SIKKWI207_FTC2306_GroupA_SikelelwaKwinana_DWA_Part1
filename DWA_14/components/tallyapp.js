import { html, css, LitElement } from '../lib/lit-html.js';



const MAX_NUMBER = 10;
const MIN_NUMBER = 0;
const STEP_AMOUNT = 1;

class TallyApp extends LitElement {

    static properties = {
        count: { type: Number },
        resetMessage: { type: String },
        isResetMessageVisible: { type: Boolean },

      };
    

  static styles = css`
    .shape-input {
      width: 20rem;
      height: 3.5rem;
      font-size: 2rem;
    }

    .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button-container button {
    font-size: 2rem;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin: 6px;
    transition: background-color 0.3s;
  }

  .button-container button[disabled] {
    background-color: gray;
    cursor: not-allowed;
  }

  .message {
    color: darkred;
    font-size: 2rem; /* Adjust the font size as needed */
    margin-top: 20px; /* Move the message down */
  }
`;

updated(changedProperties) {
    if (changedProperties.has('count')) {
        this.isMinimumReached = this.count === MIN_NUMBER;
        this.isMaximumReached = this.count === MAX_NUMBER;
        this.requestUpdate();
      }      
  }

  subtract() {
    if (this.count !== undefined && this.count > MIN_NUMBER) {
        this.count -= STEP_AMOUNT;
      } else {
        this.count = MIN_NUMBER;
      }
      this.requestUpdate();
    }

  add() {
    if (this.count !== undefined && this.count < MAX_NUMBER) {
        this.count += STEP_AMOUNT;
      } else {
        this.count = MIN_NUMBER;
      }
      this.requestUpdate();
    }

  reset() {
    this.count = MIN_NUMBER;
    this.resetMessage = 'Counter has been reset.';
    this.isResetMessageVisible = true;

    //Display time
    setTimeout(() => {
        this.isResetMessageVisible = false;
        this.requestUpdate();
      }, 2000);
  }
  
  render() {
    return html`
      <input
        class="shape-input"
        readonly
        .value=${this.count !== undefined ? String(this.count) : '0'}
        data-number-input
      >
      <div class="button-container">
        <button @click=${this.subtract} ?disabled=${this.isMinimumReached}>-</button>
        <button @click=${this.add} ?disabled=${this.isMaximumReached}>+</button>
        <button @click=${this.reset} ?disabled=${this.isMinimumReached}>reset</button>
      </div>
      <div class="message" ?hidden=${!this.isResetMessageVisible}>${this.resetMessage}</div>
    `;
  }
}

customElements.define('tally-app', TallyApp);