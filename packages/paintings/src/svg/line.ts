import { LitElement, html, css } from 'lit';
import { customElement, property  } from 'lit/decorators.js';
@customElement('svg-filter')
export class SvgFilterComponent extends LitElement {
  @property({ type: String }) baseFrequency = '0.02'; // 默认值为 "0.02"
  @property({ type: Number }) numOctaves = 3; // 默认值为 3
  @property({ type: Number }) scale = 8; // 默认值为 8
  render() {
    return html`
      <svg style="display:none">
        <defs>
          <filter id="fractal">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="${this.baseFrequency}"
              numOctaves="${this.numOctaves}"
              result="fontNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="fontNoise"
              scale="${this.scale}"
            />
          </filter>
        </defs>
      </svg>
    `;
  }

  // 确保该组件不会影响宿主元素样式
  createRenderRoot() {
    return this; // 渲染到全局 DOM，而不是 shadow DOM
  }
}
