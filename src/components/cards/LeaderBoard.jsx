import React from 'react'
import LeaderBoard_Illustration from '../../img/leaderboard_illustration.svg'
function LeaderBoard() {
  return (
    <div className='flex flex-col w-96 p-7 border-2 border-borderGray rounded-2xl gap-2'>
        
        <div className='flex flex-row'>
            <h1 className='font-bold text-lg'>Try Super for free</h1>            
        </div>
        <div className='flex gap-5'>
                <img className="w-16"src={LeaderBoard_Illustration} alt="LeaderBoard_Illustration" />
                <p className='text-gray font-medium text-left'>No ads, personalized practice, and unlimited Legendary!</p>
            </div>
    </div>
  )
}

export default LeaderBoard