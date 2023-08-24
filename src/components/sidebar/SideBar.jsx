import React, { useState } from 'react';
import SideBarItem from './SideBarItem';
import home from '../../img/home.svg';
import practice from '../../img/practice.svg';
import leaderboard from '../../img/leaderboard.svg';
import shop from '../../img/shop.svg';
import profile from '../../img/profile.svg';
import more from '../../img/more.svg';

function SideBar() {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const sideBarItems = [
    { img: home, title: 'LEARN' },
    { img: practice, title: 'PRACTICE' },
    { img: leaderboard, title: 'LEADERBOARDS' },
    { img: shop, title: 'SHOP' },
    { img: profile, title: 'PROFILE' },
    { img: more, title: 'MORE' },
  ];

  return (
    <div className='flex flex-col gap-5 w-2/12'>
      {sideBarItems.map((item, index) => (
        <SideBarItem
          key={index}
          img={item.img}
          title={item.title}
          className={
            activeItem === index
              ? 'border-2 border-sideBarBorderBlue rounded-xl bg-sideBarBlue text-XpBlue'
              : ''
          }
          handleClick={()=>handleItemClick(index)}
        />
      ))}
    </div>
  );
}

export default SideBar;