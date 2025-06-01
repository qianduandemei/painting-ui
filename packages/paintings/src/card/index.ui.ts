import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('card-ui')
export class Card extends LitElement {
  /**
   * 卡片的宽度属性，默认宽度为 450px
   */
  @property({ type: Number }) width = 450;

  /**
   * 卡片的背景颜色，默认值为 `#e0e0e0`
   */
  @property({ type: String, attribute: 'bg-color' }) bgColor = '#e0e0e0';

  @property({ type: String, attribute: 'before-color' }) beforeColor = '#ffffff';

  static styles = css`
    :host {
      display: block;
      /* 基础变量 */
      --card-width: 450px;
      --bg-color: #e0e0e0;
      --before-color: #ffffff;
      --shadow-opacity: 0.5;
      
      /* 计算变量 */
      --card-shadow-offset: calc(var(--card-width) * 0.01);
      --card-shadow-blur: calc(var(--card-width) * 0.02);
      --before-size: calc(var(--card-width) * 0.055);
      --before-shadow-offset: calc(var(--card-width) * 0.005);
      --before-shadow-blur: calc(var(--card-width) * 0.01);
    }

    .card {
      width: var(--card-width);
      height: var(--card-width); /* 使用相同的变量，避免重复计算 */
      background: var(--bg-color);
      border-radius: 5%;
      position: relative;
      overflow: hidden;
      /* 使用预计算的阴影变量 */
      box-shadow: 
        var(--card-shadow-offset) 
        var(--card-shadow-offset) 
        var(--card-shadow-blur) 
        rgba(0, 0, 0, var(--shadow-opacity));
      /* 添加硬件加速 */
      transform: translateZ(0);
      will-change: transform;
    }

    .card::before {
      width: var(--before-size);
      height: var(--before-size);
      border-radius: 50%;
      background: var(--before-color);
      content: '';
      position: absolute;
      top: 5%;
      left: 5%;
      /* 使用预计算的阴影变量 */
      box-shadow: 
        inset var(--before-shadow-offset) 
        var(--before-shadow-offset) 
        var(--before-shadow-blur) 
        rgba(0, 0, 0, var(--shadow-opacity));
    }

    /* 插槽传入的内容样式 */
    ::slotted(*) {
      position: absolute; /* 让子组件自由设置定位 */
    }
  `;

  /**
   * 在属性更新前设置 CSS 变量
   */
  willUpdate(changedProps: Map<string | number | symbol, unknown>) {
    if (changedProps.has('width')) {
      this.style.setProperty('--card-width', `${this.width}px`);
    }
    if (changedProps.has('bgColor')) {
      this.style.setProperty('--bg-color', this.bgColor);
    }
    if (changedProps.has('beforeColor')) {
      this.style.setProperty('--before-color', this.beforeColor);
    }
  }

  render() {
    return html`<div class="card"><slot></slot></div>`;
  }
}