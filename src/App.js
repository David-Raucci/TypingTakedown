import React, {useState}from 'react'
import Toptext from './components/Toptext.js'
import Bottomtext from './components/Bottomtext.js'
import Mainbox from './components/Mainbox.js'
import './App.css'

const App = () => {
  

  return (
    <div className='app'>
      <Toptext />
      <Mainbox />
      <Bottomtext />
    </div>
  )
}

export default App;
