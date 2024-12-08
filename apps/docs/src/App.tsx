import './App.css'
import { Flower, Card } from '@painting/ui'
import { createComponent } from '@lit/react'
import React from 'react'

export const FlowerComponent = createComponent({
  tagName: 'flower-ui',
  elementClass: Flower,
  react: React
});

export const CardComponent = createComponent({
  tagName: 'card-ui',
  elementClass: Card,
  react: React
});

function App() {
  const generateRandomFlowers = (numFlowers = 10) => {
    console.log(2313)
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

  const flowers = generateRandomFlowers(20);

  return (
      <div className="edging flex">
        <CardComponent bgColor="#f5f5f5" beforeColor="#4b9ec1">
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
        </CardComponent>
      </div>
  )
}

export default App