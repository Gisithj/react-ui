import React from 'react'
import SideBarItem from './SideBarItem'
import home from '../img/home.svg'
import practice from '../img/practice.svg'
import leaderboard from '../img/leaderboard.svg'
import shop from '../img/shop.svg'
import profile from '../img/profile.svg'
import more from '../img/more.svg'

function SideBar() {
  return (
    <div className='flex flex-col gap-8'>
        <SideBarItem
            img={home}
            title="LEARN"
        />
        <SideBarItem
            img={practice}
            title="PRACTICE"
        />
        <SideBarItem
            img={leaderboard}
            title="LEADERBOARDS"
        />
        <SideBarItem
            img={shop}
            title="SHOP"
        />
        <SideBarItem
            img={profile}
            title="PROFILE"
        />
        <SideBarItem
            img={more}
            title="MORE"
        />
    </div>
  )
}

export default SideBar