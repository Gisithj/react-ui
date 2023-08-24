import React from 'react';
import logo from '../img/logo.svg';
import streaks from '../img/streaks.svg';
import lingots from '../img/lingots.svg';
import profile from '../img/profile.svg';

function NavBar() {

  return (
    <div className='flex fixed top-0 left-0 right-0 p-5 border-b-2 justify-between bg-white z-50 b-3- border-borderGray'>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className='flex flex-row justify-evenly min-w-200 gap-5 '>
        <div className='flex items-center'>
          <img src={streaks} alt="" />
          <h2 className='text-streaksOrange'>1</h2>
        </div>
        <div className='flex items-center'>
          <img src={lingots} alt="" />
          <h2 className='text-borderGray'>1</h2>
        </div>
        <div className='flex items-center'>
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
