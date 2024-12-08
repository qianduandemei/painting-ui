import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './SvgFilter';

@customElement('road-sign')
export class RoadSign extends LitElement {
  // 属性定义
  @property({ type: String }) topColor = '#000000'; // 顶部背景色
  @property({ type: String }) bottomColor = '#FFFFFF'; // 底部背景色
  @property({ type: String }) text = '遇见美好，遇见你'; // 顶部主要文字
  @property({ type: String }) englishText = 'Meet the Beauty, Meet You'; // 底部文字
  @property({ type: String }) width = '300px'; // 路牌宽度
  @property({ type: String }) height = '120px'; // 路牌高度
  @property({ type: String }) topTextColor = '#FFFFFF'; // 顶部文字颜色
  @property({ type: String }) bottomTextColor = '#000000'; // 底部文字颜色
  @property({ type: String }) topFontSize = '16px'; // 顶部文字字体大小
  @property({ type: String }) bottomFontSize = '14px'; // 底部文字字体大小
  @property({ type: String }) cornerFontSize = '12px'; // 南北角标字体大小
  
  // 路牌柱子的相关属性
  @property({ type: String }) poleBackground = 'linear-gradient(to right, black, white)'; // 路牌柱子的颜色
  @property({ type: String }) poleWidth = '10px'; // 路牌柱子的宽度
  @property({ type: String }) poleHeight = '150px'; // 路牌柱子的高度
  @property({ type: String }) poleGap = '10px'; // 柱子与路牌之间的间距

  // 动态解析宽度，用于南/北角位置
  private parseWidth(): number {
    if (this.width.endsWith('px')) {
      return parseFloat(this.width);
    }
    return 300; // 默认宽度
  }

  // 动态样式
  public getDynamicStyles() {
    const parsedWidth = this.parseWidth();
    const cornerPosition = `${parsedWidth * 0.05}px`; // 南北角偏移
    return { cornerPosition };
  }

  static styles = css`
    :host {
      display: block;
      text-align: center;
    }

    .sign {
      filter: url(#fractal);
      display: flex;
      flex-direction: column; /* 路牌和柱子容器 */
      align-items: center;
    }

    .sign__box {
      position: relative;
      margin-bottom: var(--pole-gap); /* 路牌和柱子的间距 */
      width: var(--box-width);
      height: var(--box-height);
      border: 2px solid #555;
      border-radius: 8px;
      overflow: hidden;
    }

    .sign__top {
      height: 65%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--top-font-size); /* 顶部字体 */
      font-weight: bold;
      background-color: var(--top-color);
      color: var(--top-text-color);
    }

    .sign__bottom {
      height: 35%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--bottom-font-size); /* 底部字体 */
      background-color: var(--bottom-color);
      color: var(--bottom-text-color);
    }

    .sign__corner {
      position: absolute;
      font-size: var(--corner-font-size); /* 南北角字体大小 */
      font-weight: bold;
    }

    .sign__corner--top-left {
      top: var(--corner-position);
      left: var(--corner-position);
    }

    .sign__corner--top-right {
      top: var(--corner-position);
      right: var(--corner-position);
    }

    .sign__corner--bottom-left {
      bottom: var(--corner-position);
      left: var(--corner-position);
    }

    .sign__corner--bottom-right {
      bottom: var(--corner-position);
      right: var(--corner-position);
    }

    .pole {
      width: var(--pole-width);
      height: var(--pole-height);
      background: var(--pole-background);
    }
  `;

  render() {
    const { cornerPosition } = this.getDynamicStyles();

    return html`
    <svg-filter scale=6></svg-filter>
      <div
        class="sign"
        style="
          --pole-gap: ${this.poleGap};
          --pole-width: ${this.poleWidth};
          --pole-height: ${this.poleHeight};
          --pole-background: ${this.poleBackground};
          --box-width: ${this.width};
          --box-height: ${this.height};
          --top-font-size: ${this.topFontSize};
          --bottom-font-size: ${this.bottomFontSize};
          --corner-font-size: ${this.cornerFontSize};
          --corner-position: ${cornerPosition};
          --top-color: ${this.topColor};
          --bottom-color: ${this.bottomColor};
          --top-text-color: ${this.topTextColor};
          --bottom-text-color: ${this.bottomTextColor};
        "
      >
        <div class="sign__box">
          <div class="sign__top">
            <span>${this.text}</span>
            <span class="sign__corner sign__corner--top-left">北</span>
            <span class="sign__corner sign__corner--top-right">南</span>
          </div>
          <div class="sign__bottom">
            <span>${this.englishText}</span>
            <span class="sign__corner sign__corner--bottom-left">N</span>
            <span class="sign__corner sign__corner--bottom-right">S</span>
          </div>
        </div>
        <div class="pole"></div>
      </div>
    `;
  }
}