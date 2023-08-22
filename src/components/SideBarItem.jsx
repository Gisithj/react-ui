import React from 'react'

function SideBarItem({img,title}) {
  return (
    <div className='flex flex-row gap-5 items-center min-w-222 min-h-52' > 
        <img src={img} alt={title} />
        <h2 className='font-inter text-gray-700 font-semibold tracking-wider'>{title}</h2>
    </div>
  )
}

export default SideBarItem