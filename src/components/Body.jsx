import React from 'react'
import SideBar from './SideBar'
import LanguagePath from './LanguagePath'
import RightSideBar from './RightSideBar'

function Body() {
  return (
    <div className='flex flex-row p-24 gap-12'>
        <SideBar/>
        <LanguagePath/>
        <RightSideBar/>
    </div>
  )
}

export default Body