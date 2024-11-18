// src/components/WaterDrop.ts
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';


const mainColor = css`#000`;
const lightcolor = css`#ffeb3b`;
@customElement('castle-element')
export class Castle extends LitElement {
    
    

    static styles = css`
        .castle, 
        .castle * {
                position: absolute;
                background: ${mainColor};
        }

        .castle::before, 
        .castle::after, 
        .castle *::before,
        .castle *::after {
                position: absolute;
                content: "";
                background: ${mainColor};
        }
        .castle {
                width: 100px;
                height: 60px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                filter: url(#fractal);
        }

        .castle::before {
            bottom: 95%;
            left: 0;
            width: 100%;
            height: 60px;
            clip-path: polygon(0 100%, 100% 100%, 70% 0, 30% 0);
        }

        .castle__tower {
            width: 30px;
            height: 115px;
        }

        .castle__tower::before {
            bottom: 100%;
            left: 50%;
            width: 0;
            height: 0;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 50px solid  ${mainColor};
            transform: translateX(-50%);
            background: transparent;
        }

        .castle__tower--middle {
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
        }

        .castle__tower--left {
            left: -25px;
        }

        .castle__tower--right {
            right: -25px;
        }

        .castle__tower--left,
        .castle__tower--right {
            transform: scale(0.8);
            bottom: -9px;
        }

        .castle__tower--halfleft,
        .castle__tower--halfright {
            transform: scale(0.3);
            bottom: 40px;
        }

        .castle__tower--halfleft {
            left: 3px;
        }

        .castle__tower--halfright {
            right: 3px;
        }
        .castle__gate,.castle__window{
            background:  ${lightcolor};
            border-radius: 50% 50% 0 0;
        }
        .castle__gate {
            width: 50%;
            height: 50%;
            bottom: 0;
            left: 25%;
        }

        .castle__window {
            width: 9px;
            height: 25px;
        }

        .castle__window--left,
        .castle__window--right {
            width: 6px;
            left: 35%;
            top: 10%;
            box-shadow: 0 45px 0 0  ${lightcolor};
        }

        .castle__window--both {
            left: 50%;
            transform: translateX(-50%);
            top: -40px;
            box-shadow: 
            0 -43px 0 0  ${lightcolor}, 
            -30px 40px 0 0  ${lightcolor}, 
            30px 40px 0 0  ${lightcolor};
        }

        .castle__window--tower {
            width: 10px;
            left: 50%;
            transform: translateX(-50%);
            top: -110px;
            height: 13px;
        }
  `;

    render() {
        return html`<div class="castle">
                <svg width="0" height="0">
                    <defs>
                        <filter id="fractal">
                            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="fontNoise" />
                            <feDisplacementMap in="SourceGraphic" in2="fontNoise" scale="8" />
                        </filter>
                    </defs>
                </svg>
                <div class="castle__tower castle__tower--middle"></div>
                <div class="castle__tower castle__tower--left">
                    <div class="castle__window castle__window--left"></div>
                </div>
                <div class="castle__tower castle__tower--halfleft"></div>
                <div class="castle__tower castle__tower--right">
                    <div class="castle__window castle__window--right"></div>
                </div>
                <div class="castle__tower castle__tower--halfright"></div>
                <div class="castle__gate"></div>
                <div class="castle__window castle__window--both"></div>
                <div class="castle__window castle__window--tower"></div>
            </div>`;
    }
}
