import React from 'react'

function SideBarItem({img,title,className,handleClick}) {

  // function handleClick() {
  //   alert('You clicked me!');
  // }

  return (
    <div className={`flex flex-row gap-4 items-center p-2 `+ className} onClick={handleClick} > 
        <img src={img} alt={title} />
        <h2 className='font-inter text-gray text-sm font-bold tracking-wider'>{title}</h2>
    </div>
  )
}

export default SideBarItem