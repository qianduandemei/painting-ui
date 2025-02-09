import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './SvgFilter';

@customElement('spring-blessing')
export class SpringBlessing extends LitElement {
  @property({ type: Number }) dotCount = 30; // 金色点点的数量
  @property({ type: Number }) containerWidth = 150; // 容器宽度，默认150px

  static styles = css`
    :host {
      display: block;
      --gold-color: gold;
    }

    .container {
      filter: url(#fractal);
      display: flex;
      justify-content: center;
      align-items: center;
      width: var(--container-width, 150px);
      height: var(--container-height, 150px);
      background-color: red;
      border: 5px solid var(--gold-color);
      transform: rotate(45deg); /* 旋转背景矩形 */
      position: relative;
      overflow: hidden;
     
    }

    .content {
      position: absolute;
      color: var(--gold-color);
      font-size: calc(var(--container-width) / 2); /* 根据容器宽度调整字体大小 */
      z-index: 1;
      font-weight: bold;
      transform: rotate(-45deg);
    }

    /* 装饰性元素：金色直角边框 */
    .container::before,
    .container::after {
      content: '';
      position: absolute;
      background-color: var(--gold-color);
      width: calc(var(--container-width) / 7);
      height: calc(var(--container-width) / 7);
    }

    .container::before {
      top: 0;
      left: 0;
    }

    .container::after {
      bottom: 0;
      right: 0;
    }

    /* 金色点点样式 */
    .dot {
      position: absolute;
      background-color: var(--gold-color);
      border-radius: 50%;
    }
  `;

  // 随机生成点点的样式
  private createDot() {
   // 根据容器宽度动态计算点的尺寸和位置
   const maxDotSize = this.containerWidth / 30; // 点的最大尺寸，10% 容器宽度
   const size = Math.random() * (maxDotSize - 2) + 2; // 随机大小，范围从 2px 到 maxDotSize
   const x = Math.random() * (this.containerWidth - size); // 随机横坐标，避免点落到容器外
   const y = Math.random() * (this.containerWidth - size); // 随机纵坐标，避免点落到容器外
   const borderRadius = Math.random() > 0.5 ? '50%' : '30%'; // 随机形状：圆形或椭圆形

    return html`
      <div
        class="dot"
        style="width: ${size}px; height: ${size}px; left: ${x}px; top: ${y}px; border-radius: ${borderRadius};"
      ></div>
    `;
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    // 更新容器宽度
    if (changedProperties.has('containerWidth')) {
      this.style.setProperty('--container-width', `${this.containerWidth}px`);
      this.style.setProperty('--container-height', `${this.containerWidth}px`);
    }
  }

  render() {
    return html`
     <svg-filter></svg-filter>
        <div class="container">
          <!-- 动态生成金色点点 -->
          ${Array.from({ length: this.dotCount }, () => this.createDot())}
           <div class="content">福</div>
        </div>
    `;
  }
}
