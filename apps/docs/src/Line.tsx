
import { Card } from '@painting/ui'
import { createComponent } from '@lit/react'
import './App.css'
import React from 'react'
import { LineEffect } from './LineEffect'

export const CardComponent = createComponent({
  tagName: 'card-ui',
  elementClass: Card,
  react: React
});

function App() {
  return (
    <>
     <svg width="0" height="0">
     <filter id="sketchFilter" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="turbulence" baseFrequency="1.8" numOctaves="2" seed="1" result="noise"/>
            <feColorMatrix in="noise" type="saturate" values="0" result="grayNoise" />
            <feDisplacementMap in="SourceGraphic" in2="grayNoise" scale="4" xChannelSelector="A" yChannelSelector="A" result="displaced"/>
            
            <feTurbulence type="turbulence" baseFrequency="2" numOctaves="1" result="grain" />
            <feColorMatrix in="grain" type="saturate" values="0" result="grayNoise2" />
            <feComposite in="grayNoise2" in2="displaced" operator="arithmetic" k1="0" k2="0.6" k3="0.4" result="textured" />

            <feDiffuseLighting in="grayNoise" lighting-color="#EEEEEE" surfaceScale="80" result="lighting">
                <feDistantLight azimuth="45" elevation="60" />
            </feDiffuseLighting>
            <feComposite in="lighting" in2="textured" operator="arithmetic" k1="0" k2="0.5" k3="0.5" result="lit" />
            
            <feComponentTransfer in="lit" result="final">
                <feFuncR type="linear" slope="1.8" intercept="-0.5" />
                <feFuncG type="linear" slope="1.8" intercept="-0.5" />
                <feFuncB type="linear" slope="1.8" intercept="-0.5" />
            </feComponentTransfer>

            <feComposite in="final" in2="SourceGraphic" operator="in" result="sdsds"/>
        </filter>
          </svg>
          <CardComponent bgColor="#f5f5f5" beforeColor="#dbbea3" width={750}>
        <div style={{ 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
         
          <LineEffect />
        </div>
        </CardComponent>
    </>
  )
}

export default App
