import React, { useEffect, useState } from 'react'

function TotalRes({slots}) {
    
  return (
    <div>
        <h2>Your total resistance are:</h2>
        <div className='grid gap-4 grid-cols-1 justify-items-end w-32'>
        <div>
          <p>Fire {slots.reduce((a, b) => a + b.fire, 0)}%</p>
        </div>
        <div>
          <p>Cold {slots.reduce((a, b) => a + b.cold, 0)}%</p>
        </div>
        <div>
          <p>Lightning {slots.reduce((a, b) => a + b.lightning, 0)}%</p>
        </div>
        <div>
          <p>Chaos {slots.reduce((a, b) => a + b.chaos, 0)}%</p>
        </div>
      </div>
    </div>
  )
}

export default TotalRes