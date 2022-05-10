import React from 'react'
import { Orbit } from '@uiball/loaders'
import { SuperBalls } from '@uiball/loaders'

const Spinner = () => {
  return (
    <div className='mx-auto my-20 w-20'>
        <SuperBalls 
        className="justify-self-center"
        size={60}
        speed={1.4} 
        color="black" 
        />
    </div>    
    )
}

export default Spinner