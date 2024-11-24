import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement('svg-filter')
export class SvgFilterComponent extends LitElement {
  render() {
    return html`
      <svg style="display:none">
        <defs>
          <filter id="fractal">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="3"
              result="fontNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="fontNoise"
              scale="8"
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
