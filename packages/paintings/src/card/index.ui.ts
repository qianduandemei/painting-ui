import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import './index.css';

// 定义Card组件的属性接口
export interface CardProps {
  /** 卡片的宽度，默认450px */
  width?: number;
  /** 卡片的背景颜色，默认#e0e0e0 */
  bgColor?: string;
  /** 伪元素的背景颜色，默认#ffffff */
  beforeColor?: string;
  /** 卡片内容 */
  children?: unknown;
}

/** 卡片UI组件 */
export const Card = ({ width = 450, bgColor = '#e0e0e0', beforeColor = '#ffffff', children }: CardProps) => {
  const styles = {
    '--card-width': `${width}px`,
    '--bg-color': bgColor,
    '--before-color': beforeColor,
    '--shadow-opacity': '0.5',
  };

  return html`
    <div class="card" style=${styleMap(styles)}>
      ${children}
    </div>
  `;
};