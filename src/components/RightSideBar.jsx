import React from 'react'
import SuperCard from './cards/SuperCard'
import LeaderBoard from './cards/LeaderBoard'
import XpProgress from './cards/XpProgress'
import RemoveAdBlockerCard from './cards/RemoveAdBlockerCard'

function RightSideBar() {
  return (
    <div className='flex flex-col gap-6'>
      <SuperCard/>
      <LeaderBoard/>
      <XpProgress/>
      <RemoveAdBlockerCard/>
    </div>
  )
}

export default RightSideBar