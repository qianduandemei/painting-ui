import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('water-ui')
export class Water extends LitElement {
  /**
   * 宽度（默认值：50）
   */
  @property({ type: Number }) width = 50;

  /**
   * 高度（默认值：50）
   */
  @property({ type: Number }) height = 50;

  static styles = css`
    :host {
      display: inline-block;
      /* 宽高动态变量 */
      --width: 50px;
      --height: 50px;

      /* 动态阴影参数 */
      --shadow-light-x: -2px;
      --shadow-light-y: 8px;
      --shadow-light-blur: 3px;
      --shadow-dark-x: -3px;
      --shadow-dark-y: 16px;
      --shadow-dark-blur: 8px;
      --shadow-inset-x: -2px;
      --shadow-inset-y: 14px;
      --shadow-inset-blur: 14px;
    }

    .water {
      width: var(--width);
      height: var(--height);
      border-radius: 50%;
      /* 动态 box-shadow */
      box-shadow: 
        var(--shadow-light-x) var(--shadow-light-y) var(--shadow-light-blur) -4px #fff, /* 高亮外阴影 */
        var(--shadow-dark-x) var(--shadow-dark-y) var(--shadow-dark-blur) 0px #444,   /* 深色外阴影 */
        var(--shadow-inset-x) var(--shadow-inset-y) var(--shadow-inset-blur) #666 inset; /* 内阴影 */
      position: relative;
    }

    /* 高光切片 */
    .water::before,
    .water::after {
      content: '';
      background-color: #fff;
      position: absolute;
      border-radius: 2px;
    }

    .water::before {
      width: 8%;
      height: 16%;
      top: 18%;
      right: 44%;
      transform: rotate(106deg);
    }

    .water::after {
      width: 8%;
      height: 10%;
      top: 30%;
      right: 28%;
      transform: rotate(129deg);
    }
  `;

  // 动态调整阴影值
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('width') || changedProperties.has('height')) {
      this.style.setProperty('--width', `${this.width}px`);
      this.style.setProperty('--height', `${this.height}px`);

      // 比例因子（放大或缩小的系数）
      const shadowFactor = this.width / 50; // 以默认宽度 50 为基础
      this.style.setProperty('--shadow-light-x', `${-2 * shadowFactor}px`);
      this.style.setProperty('--shadow-light-y', `${8 * shadowFactor}px`);
      this.style.setProperty('--shadow-light-blur', `${3 * shadowFactor}px`);

      this.style.setProperty('--shadow-dark-x', `${-3 * shadowFactor}px`);
      this.style.setProperty('--shadow-dark-y', `${16 * shadowFactor}px`);
      this.style.setProperty('--shadow-dark-blur', `${8 * shadowFactor}px`);

      this.style.setProperty('--shadow-inset-x', `${-2 * shadowFactor}px`);
      this.style.setProperty('--shadow-inset-y', `${14 * shadowFactor}px`);
      this.style.setProperty('--shadow-inset-blur', `${14 * shadowFactor}px`);
    }
  }

  render() {
    return html`<div class="water"></div>`;
  }
}