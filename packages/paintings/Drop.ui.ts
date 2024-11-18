// src/components/WaterDrop.ts
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('water-drop')
export class WaterDrop extends LitElement {
  static styles = css`
    .water {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      box-shadow: -2px 8px 3px -4px #fff, -3px 16px 8px 0 #444,
        -2px 14px 14px #666 inset;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .water::before,
    .water::after {
      content: '';
      background-color: #fff;
      position: absolute;
      border-radius: 2px;
    }
    .water::before {
      width: 4px;
      height: 8px;
      top: 9px;
      right: 22px;
      transform: rotate(106deg);
    }
    .water::after {
      width: 4px;
      height: 5px;
      top: 15px;
      right: 14px;
      transform: rotate(129deg);
    }
  `;

  render() {
    return html`<div class="water"></div>`;
  }
}
