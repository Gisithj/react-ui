import React from 'react'
import SuperLogo from '../../img/Super Logo.svg'
import SuperOwl from '../../img/Super Duo the Owl.svg'

function SuperCard({heading}) {
  return (
    <div className='flex flex-col w-96 p-7 border-2 border-borderGray rounded-2xl gap-4'>
        <div className='flex flex-row'>
            <div className='flex flex-col justify-items-start text-left	gap-3 '>
                <img className='w-20' src={SuperLogo} alt="super_logo" />
                <h1 className='font-bold text-lg'>Try Super for free</h1>
                <p className='text-gray font-medium'>No ads, personalized practice, and unlimited Legendary!</p>
            </div>
            <div className='flex'>
                <img className="h-28"src={SuperOwl} alt="SuperOwl" />
            </div>
        </div>
        <div className='flex place-content-center bg-superBlue text-size-sm text-center font-semibold text-white rounded-2xl h-12 content-center items-center'>
            <h1>TRY 2 WEEKS FREE</h1>
        </div>
    </div>
  )
}

export default SuperCard