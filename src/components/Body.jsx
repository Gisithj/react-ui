import React from 'react'
import SideBar from './sidebar/SideBar'
import LanguagePath from './LanguagePath'
import RightSideBar from './RightSideBar'

function Body() {
  return (
    <div className='flex flex-row py-10 px-24 gap-12 pt-24 justify-between'>
        <SideBar/>
        <LanguagePath/>
        <RightSideBar/>
    </div>
  )
}

export default Body