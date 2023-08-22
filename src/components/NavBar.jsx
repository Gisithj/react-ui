import React from 'react'
import logo from '../img/logo.svg'
import streaks from '../img/streaks.svg'
import lingots from '../img/lingots.svg'
import profile from '../img/profile.svg'

function NavBar() {
    const customBorderStyle = {
        borderColor: "#E5E5E5",
        borderWidth: "3px", // You can adjust the border thickness here
      };
  return (
    <div className='flex p-5 border-b-2 justify-between' style={customBorderStyle}>
        <div>
            <img src={logo} alt="" />
        </div>
        <div className='flex-'>
            <div className='flex flex-row justify-evenly min-w-200 gap-5 '>
                <div className='flex items-center'>
                    <img src={streaks} alt="" />
                    <h2 color='#FF9600'>1</h2>
                </div>
                <div className='flex items-center'>                    
                    <img src={lingots} alt="" />
                    <h2 color='#FF9600'>1</h2>
                </div>
                <div className='flex items-center'>
                    <img src={profile} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar