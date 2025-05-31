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
      /* 自定义 CSS 变量，用于动态定义内置样式 */
      --card-width: 450px;
      --bg-color: #e0e0e0; /* 默认背景颜色 */
      --before-color: #ffffff;
      --shadow-opacity: 0.5; /* 默认阴影透明度 */
    }

    .card {
      width: var(--card-width);
      height: calc(var(--card-width)); /* 保持卡片为正方形（宽高相同） */
      background: var(--bg-color); /* 设置为单色背景 */
      border-radius: 5%;
      position: relative;
      overflow: hidden;
      box-shadow: calc(var(--card-width) * 0.01) calc(var(--card-width) * 0.01)
                  calc(var(--card-width) * 0.02) rgba(0, 0, 0, var(--shadow-opacity));
    }

    .card::before {
      width: calc(var(--card-width) * 0.055); /* 动态宽度 5.5% */
      height: calc(var(--card-width) * 0.055); /* 动态高度 5.5% */
      border-radius: 50%;
      background: var(--before-color); /* 使用动态颜色 */
      content: '';
      position: absolute;
      top: 5%;
      left: 5%;
      box-shadow: inset calc(var(--card-width) * 0.005) calc(var(--card-width) * 0.005)
                  calc(var(--card-width) * 0.01) rgba(0, 0, 0, var(--shadow-opacity));
    }

    /* 插槽传入的内容样式 */
    ::slotted(*) {
      position: absolute; /* 让子组件自由设置定位 */
    }
  `;

  /**
   * 生命周期：属性更新时动态修改样式
   */
  updated(changedProps: Map<string | number | symbol, unknown>) {
    super.updated(changedProps);

    // 动态设置卡片宽度
    if (changedProps.has('width')) {
      this.style.setProperty('--card-width', `${this.width}px`);
    }

    // 动态设置背景颜色
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