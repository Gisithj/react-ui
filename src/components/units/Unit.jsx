import React from 'react'
import UnitHeader from './unitFeatures/UnitHeader'
import Star from '../../img/unit1/Star illustration.svg'
import Story from '../../img/unit1/Story.svg'
import Lesson from '../../img/unit1/Lesson.svg'
import ProgressCheck from '../../img/unit1/Progress Check.svg'
import UnitReview from '../../img/unit1/Unit Review.svg'
import Duoowl from '../../img/unit1/Duo owl.svg'

function Unit({colour,unit,description}) {
  return (
    <div className='flex flex-col gap-3 mb-4'>
        <UnitHeader 
            colour ={colour}
            unit={unit}
            description={description}
        />
        <div className='text-center'>
      <div className='relative inline-block flex flex-col items-center'>
        <img src={Star} alt='Star' className='mb-4' />
        <img src={Story} alt='Story' className='mb-4' style={{ marginRight: '5em' }} />
        <img src={Lesson} alt='Lesson' className='mb-4' style={{ marginRight: '10em' }} />
        <img src={Duoowl} alt="Duoowl" className="absolute top-16 left-0 right-0" style={ {marginLeft: '20em'}}/>
        <img src={ProgressCheck} alt='ProgressCheck' className='mb-4' style={{ marginRight: '6em' }} />
        <img src={Story} alt='Story' className='mb-4' />
        <img src={UnitReview} alt='UnitReview'/>
        <div className='relative'>
        
        </div>
       
      </div>
    </div>
    </div>
  )
}

export default Unit