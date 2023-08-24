import React from 'react'
import AdBockerCardClipArt from '../../img/card_clipart.svg'
function RemoveAdBlockerCard() {
  return (
    <div className='flex flex-col justify-center w-96 border-2 border-borderGray rounded-2xl bg-darkBlue '>
        <div className='flex justify-center'>
            <img src={AdBockerCardClipArt} alt="AdBockerCardClipArt" />
        </div>
        <div className='flex flex-col gap-3 px-7 pt-4 pb-7 text-white'>
            <div>
                <h1 className='font-bold text-lg'>Using an ad blocker?</h1>
                <p className='font-medium text-sm  text-white/80' >Support education with Super <br/>Duolingo and we’ll remove ads for you</p>
            </div>
            <div className='p-3 my-5 bg-white text-darkBlue rounded-2xl'>
                <h1 className='font-bold text-xs'>TRY SUPER FOR FREE</h1>
            </div>
            <div>
                <h1 className='font-semibold text-xs tracking-wider'>DISABLE AD BLOCKER</h1>
            </div>
        </div>
    </div>
  )
}

export default RemoveAdBlockerCard