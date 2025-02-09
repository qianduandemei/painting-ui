import './App.css'
import { SpringBlessing, Card } from '@painting/ui'
import { createComponent } from '@lit/react'
import React from 'react'

export const SpringBlessingComponent = createComponent({
    tagName: 'spring-blessing',
    elementClass: SpringBlessing,
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
            <SpringBlessingComponent 
            style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
            containerWidth = {250}
            
            />
           <SpringBlessingComponent 
            style={{top: '80px', left: '45px'}}
            containerWidth = {50}
            dotCount={10}
            
            />
            <SpringBlessingComponent 
            style={{bottom: '80px', right: '45px'}}
            containerWidth = {50}
            dotCount={10}
            
            />
        </CardComponent>
    </div>
)
}
export default App