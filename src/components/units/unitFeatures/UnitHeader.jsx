import React from 'react'
import guidebook from '../../../img/guidebook.svg'

function UnitHeader({colour,unit,description}) {
  return (
    <div className={`flex justify-between w-full h-24 b-radius-13 rounded-xl p-4 items-center justify-center text-white `+ colour }>
      <div className='grid justify-items-start'>
              <h1 className='font-bold text-lg'>{unit}</h1>
              <p>{description}</p>
      </div>
      <div className='flex '>              
              <div className='flex w-40 h-14 gap-3 drop-shadow-4xl border-2 border-black/20 rounded-2xl items-center justify-center'>
                <img className ='h-6'src={guidebook} alt="" />
                <h2 className='font-bold tracking-wider text-sm'>GUIDEBOOK</h2>
              </div>
      </div>        
    </div>
  )
}

export default UnitHeader