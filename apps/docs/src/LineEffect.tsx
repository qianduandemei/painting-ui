import { useLayoutEffect, useRef } from 'react';

export const LineEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // 生成线条样式的 div
    function generateLineStrips(lineCount: number, containerWidth: number, containerHeight: number) {
      const strips = [];
      let currentPosition = 0;

      for (let i = 0; i < lineCount; i++) {
        const lineHeightPercent = Math.random() < 0.5 ? 1.1 : 1;
        const lineHeight = (lineHeightPercent / 100) * containerHeight;

        const lineWidthPercent = 80 + Math.random() * 20;
        const lineWidth = (lineWidthPercent / 100) * containerWidth;

        const randomAngle = (Math.random() - 0.5) * 4;
        const offsetX = (containerWidth - lineWidth) / 2;
        const top = currentPosition;

        const startFade = 5 + Math.random() * 5;
        const endFade = 90 + Math.random() * 5;
        
        const gradientStyle = `linear-gradient(to right, 
          rgba(47, 47, 47, 1) 0%,
          rgba(47, 47, 47, 1) ${startFade}%,
          rgba(47, 47, 47, 1) ${endFade}%,
          rgba(47, 47, 47, 1) 100%
        )`;

        const strip = {
          width: `${lineWidth}px`,
          height: `${lineHeight}px`,
          top: `${top}px`,
          left: `${offsetX}px`,
          transform: `rotate(${randomAngle}deg)`,
          background: gradientStyle,
        
        };

        strips.push(strip);

        if (i < lineCount - 1) {
          const randomGapPercent = Math.random() < 0.5 ? 0.3 : 0.5;
          const randomGap = (randomGapPercent / 100) * containerHeight;
          currentPosition = top + lineHeight + randomGap + 1;
        }
      }

      return strips;
    }

    // 创建线条
    const strips = generateLineStrips(55, 400, 400);
    strips.forEach(stripStyles => {
      const stripDiv = document.createElement('div');
      stripDiv.className = 'line-strip';
      Object.assign(stripDiv.style, stripStyles);
      containerRef.current?.appendChild(stripDiv);
    });

    // 清理函数
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ 
      width: '400px', 
      height: '400px', 
      filter: 'url(#sketchFilter)',
      position: 'relative',
      overflow: 'hidden',
      transform:'rotate(-24deg)'
    }} />
  );
}; 