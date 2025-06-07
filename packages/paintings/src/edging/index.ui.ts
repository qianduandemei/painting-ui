import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('edging-ui')
export class Edging extends LitElement {
  

  static styles = css`
    :host {
      display: block;
      /* 基础变量 */
      --edging-width: 750px;
      --edging-height: 1000px;
      --bg-color: linear-gradient(135deg, #fff5e6 0%, #ffc979 100%);
      --border-color: #666666;
      --shadow-color: #aaaaaa;
    }

    .edging {
      width: var(--edging-width);
      height: var(--edging-height);
      background: var(--bg-color);
      border: 40px solid var(--border-color);
      box-shadow: 18px 18px 18px var(--shadow-color);
      position: relative;
    }

    /* 插槽传入的内容样式 */
    ::slotted(*) {
      position: absolute; /* 让子组件自由设置定位 */
    }
  `;



  render() {
    return html`<div class="edging"><slot></slot></div>`;
  }
}