import { useState } from 'react'
import { Card } from '@painting/ui'
import { createComponent } from '@lit/react'
import './App.css'
import React from 'react'

export const CardComponent = createComponent({
  tagName: 'card-ui',
  elementClass: Card,
  react: React
});

function App() {
  return (
    <>
     <CardComponent bgColor="#f5f5f5" beforeColor="#4b9ec1"></CardComponent>
    </>
  )
}

export default App
