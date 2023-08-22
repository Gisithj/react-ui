import React from 'react'
import guidebook from '../img/guidebook.svg'

function LanguagePathHeader() {
  return (
    <div className='flex-1'>
        <div className='flex flex-row w-full  h-24 b-radius-13 rounded-xl gap-8 items-center justify-center'style={{ backgroundColor: '#58CC02',color:'white' }}> 
            <div className='grid justify-items-start'>
              <h1>Unit 1</h1>
              <p>Form basic sentences, greet people</p>
            </div>
            <div className='flex '>              
              <div className='flex h-14 gap-3 shadow-md border-slate-700 b-radius-5 items-center justify-center'>
                <img className ='h-6'src={guidebook} alt="" />
                <h1>GUIDEBOOK</h1>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default LanguagePathHeader