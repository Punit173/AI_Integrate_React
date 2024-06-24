import React from 'react'
import './App.css'

const Answer = (Props) => {
    console.log(Props)
  return (
    <div className='typewriter'>
      <p>{Props.element}</p>
    </div>
  )
}

export default Answer
