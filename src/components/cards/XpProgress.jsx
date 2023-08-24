import React from 'react'
import XP from '../../img/xp_progress.svg'

function XpProgress() {
  return (
    <div className='flex flex-col w-96 p-7 border-2 border-borderGray rounded-2xl gap-4'>
        <div className='flex justify-between items-baseline '>
            <h1 className='font-bold text-lg'>XP Progress</h1>
            <h1 className='font-bold text-sm text-XpBlue '>EDIT GOAL</h1>
        </div>
        <div className='flex flex-row gap-3'>            
            <div className='flex'>
                <img className="h-16"src={XP} alt="SuperOwl" />
            </div>
            <div className='flex flex-col justify-items-start items-center text-left	gap-3 '>
                <p>Daily Goal</p>
                <p className='text-gray font-medium'>13/20 XP</p>
            </div>
        </div>
        {/* <div className='flex place-content-center bg-superBlue text-size-sm text-center font-semibold text-white rounded-2xl h-12 content-center items-center'>
            <h1>TRY 2 WEEKS FREE</h1>
        </div> */}
    </div>
  )
}

export default XpProgress