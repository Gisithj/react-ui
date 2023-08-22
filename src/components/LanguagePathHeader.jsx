import React from 'react'
import guidebook from '../img/guidebook.svg'

function LanguagePathHeader() {
  return (
    <div className='flex-1'>
        <div className='flex flex-row w-full  h-24 b-radius-13 rounded-xl'style={{ backgroundColor: '#58CC02',color:'white' }}> 
            <div className='flex flex-col justify-items-start'>
              <h1>Unit 1</h1>
              <p>Form basic sentences, greet people</p>
            </div>
            <div className='flex h-14 gap-3 shadow-md b-radius-5'>              
              <img className ='h-6'src={guidebook} alt="" />
              <h1>GUIDEBOOK</h1>
            </div>
        </div>
        
    </div>
  )
}

export default LanguagePathHeader