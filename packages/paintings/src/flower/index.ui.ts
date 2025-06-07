import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../svg/line';

@customElement('flower-ui')
export class Flower extends LitElement {
  // 定义花瓣数量
  @property({ type: Number }) petals = 4; // 默认4个花瓣

  // 定义皮肤类型，默认是红色主题
  @property({ type: String }) skin: 'classic' | 'white-yellow' = 'classic';

  // 定义花的宽度和高度，默认值为 80px
  @property({ type: Number }) width = 80;
  @property({ type: Number }) height = 80;

  // 为花本身添加一个随机初始旋转角度
  private flowerRotation = 0;

  static styles = css`
    :host {
      display: block;
    }

    .flower {
      filter: url(#fractal);
      position: relative;
      width: var(--flower-width, 80px); /* 动态宽度 */
      height: var(--flower-height, 80px); /* 动态高度 */
      transform: rotate(var(--flower-rotation, 0deg)); /* 随机旋转 */
      transition: transform 0.3s ease; /* 如果需要更平滑的过渡效果 */
    }

    /* 背景花瓣（黑色） */
    .flower__petal--bg {
      position: absolute;
      top: 0;
      left: 50%;
      width: 30%;
      height: 50%;
      background-color: black;
      border-radius: 50%;
      transform-origin: bottom center;
      transform: translate(-50%, 0) rotate(0deg);
    }

    /* 前景花瓣（主题颜色） */
    .flower__petal--fg {
      position: absolute;
      top: 2%;
      left: 50%;
      width: 26%;
      height: 48%;
      background-color: var(--petal-color, #fea9a7); /* 默认红色 */
      border-radius: 50%;
      transform-origin: bottom center;
      transform: translate(-50%, 0) rotate(0deg);
      z-index: 10;
    }

    .flower__center {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 15%;
      height: 15%;
      background-color: var(--center-color, #ac0c07); /* 默认红黑色 */
      border-radius: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;
      border: 1px solid #000;
    }
  `;

  // 生成随机偏移角度
  private generateRandomOffset(range: number): number {
    return Math.random() * 2 * range - range; // 生成 -range 到 +range 范围的随机值
  }

  // 为整个花朵生成一个随机旋转角度
  private setFlowerRotation() {
    const randomRotation = Math.random() * 360; // 0 到 360 度范围的随机值
    this.flowerRotation = randomRotation; // 保存旋转值
    this.style.setProperty('--flower-rotation', `${randomRotation}deg`);
  }

  // 动态设置皮肤的样式
  private applySkinStyles() {
    switch (this.skin) {
      case 'white-yellow':
        // 设置主题为白色花瓣、黄色花蕊
        this.style.setProperty('--petal-color', '#ffffff'); // 白色花瓣
        this.style.setProperty('--center-color', '#ffcc00'); // 黄色花蕊
        break;
      case 'classic':
      default:
        // 默认主题为经典红色花瓣、红黑色花蕊
        this.style.setProperty('--petal-color', '#fea9a7'); // 红色花瓣
        this.style.setProperty('--center-color', '#ac0c07'); // 红黑色花蕊
        break;
    }
  }

  // 动态设置花的宽高样式
  private applySizeStyles() {
    this.style.setProperty('--flower-width', `${this.width}px`);
    this.style.setProperty('--flower-height', `${this.height}px`);
  }

  // 生命周期：在初始渲染前随机设置旋转角度
  connectedCallback() {
    super.connectedCallback();
    this.setFlowerRotation(); // 初始化随机旋转角度
  }

  // 生命周期：更新后重新应用样式
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    // 检查皮肤变化
    if (changedProperties.has('skin')) {
      this.applySkinStyles();
    }

    // 检查宽高变化
    if (changedProperties.has('width') || changedProperties.has('height')) {
      this.applySizeStyles();
    }

    // 如果需要重新设置花的随机旋转角度（可选）
    if (changedProperties.has('petals')) {
      this.setFlowerRotation();
    }
  }

  // 根据花瓣数量动态生成所有花瓣
  private renderPetals() {
    const petals = [];
    const baseAngle = 360 / this.petals; // 每个花瓣的基础角度间隔
    const randomRange = 10; // 随机偏移范围（-10° 到 10°）

    for (let i = 0; i < this.petals; i++) {
      const randomOffset = this.generateRandomOffset(randomRange); // 生成随机偏移角度
      const rotateAngle = i * baseAngle + randomOffset; // 最终角度 = 基础角度 + 偏移角度

      petals.push(html`
        <!-- 背景黑色花瓣 -->
        <div
          class="flower__petal--bg"
          style="transform: translate(-50%, 0) rotate(${rotateAngle}deg);"
        ></div>
        <!-- 前景花瓣 -->
        <div
          class="flower__petal--fg"
          style="transform: translate(-50%, 0) rotate(${rotateAngle}deg);"
        ></div>
      `);
    }

    return petals;
  }

  render() {
    return html`
      <svg-filter></svg-filter>
      <div class="flower">
        ${this.renderPetals()} <!-- 动态渲染花瓣 -->
        <div class="flower__center"></div><!-- 花中心 -->
      </div>
    `;
  }
}