import { Flower,Edging } from '@painting/ui'
import { createComponent } from '@lit/react'
import './App.css'
import React from 'react'

export const FlowerComponent = createComponent({
  tagName: 'flower-ui',
  elementClass: Flower,
  react: React
});
export const EdgingComponent = createComponent({
  tagName: 'edging-ui',
  elementClass: Edging,
  react: React
});
function App() {
  const generateRandomFlowers = (numFlowers = 10) => {
    const getPosition = (value: number, axisName: string): { [key: string]: string } =>
      value > 50
        ? { [axisName === 'y' ? "bottom" : "right"]: `${100 - value}%` }
        : { [axisName === 'y' ? "top" : "left"]: `${value}%` };

    return Array.from({ length: numFlowers }).map(() => {
      const yPosition = Math.random() * 100;
      const xPosition = Math.random() * 100;

      return {
        style: {
          ...getPosition(yPosition, "y"),
          ...getPosition(xPosition, "x"),
        },
        petals: Math.random() > 0.5 ? 4 : 5,
        width: Math.random() * 5 + 35,
      };
    });
  };

  const flowers = generateRandomFlowers(30);

  return (
      <>
        <EdgingComponent >
          {flowers.map((flower, index) => (
            <FlowerComponent
              key={index}
              style={flower.style}
              petals={flower.petals}
              width={flower.width}
              height={flower.width}
              skin={Math.random() > 0.5 ? "white-yellow" : "classic"}
            />
          ))}
        </EdgingComponent>
      </>
  )
}

export default App