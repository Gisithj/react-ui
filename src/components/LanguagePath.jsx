import React from 'react'
import Unit from './units/Unit'
import Unit2 from './units/Unit2'


function LanguagePath() {
  return (
        <div className='flex-1 w-full grow gap-3'> 
            <Unit 
              colour = "bg-greenUnit"
              unit= "Unit 1"
              description="Form basic sentences, greet people"
            />
            <Unit2 
              colour= "bg-indigoUnit"
              unit= "Unit 2"
              description="Get around in a city"
            />
            <Unit2 
              colour= "bg-coolBlueUnit"
              unit= "Unit 3"
              description="Order food and drink"
            />
        </div>
  )
}

export default LanguagePath