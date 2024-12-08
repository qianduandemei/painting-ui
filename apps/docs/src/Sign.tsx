import './App.css'
import { RoadSign, Card } from '@painting/ui'
import { createComponent } from '@lit/react'
import React from 'react'

export const RoadSignComponent = createComponent({
  tagName: 'road-sign',
  elementClass: RoadSign,
  react: React
});

export const CardComponent = createComponent({
  tagName: 'card-ui',
  elementClass: Card,
  react: React
});

function App() {
  return (
      <div className='edging flex'>
        <CardComponent bgColor='#f5f5f5' beforeColor='#4b9ec1'>
            <RoadSignComponent
                style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
                width = '250px'
                height = '90px'
                topColor = '#000000'
                bottomColor = '#FFFFFF'
                topTextColor = '#FFFFFF'
                bottomTextColor = '#000000'
                text = '想你的风吹到了这里'
                englishText = 'The wind that misses you has blown here'
                topFontSize = '20px'
                bottomFontSize ='10px'
                cornerFontSize ='11px'
                poleBackground = 'linear-gradient(to right, #000 0%, #000 70%, transparent 70%, transparent 80%, #000 80%, #000 100%)'
                poleWidth = '16px'
                poleHeight = '280px'
                poleGap = '0'
            />
            <div className='bottomLine'></div>
        </CardComponent>
      </div>
  )
}
export default App