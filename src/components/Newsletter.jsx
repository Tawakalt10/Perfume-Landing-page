import React from 'react'
import Button from './Button'
import Heading from './Heading'

const Newsletter = ({
  heading,
  paragraph,
  buttonText
}) => {
  return (
    <div className='newsletter-wrapper'>
       <Heading
        title={heading}
        className='newsletter-heading'
      />
       <p className='newsletter-para'>
        {paragraph}
      </p>
     <div className='newsletter-input-wrapper'>
      <input type="email" placeholder='Your email' 
      name="" id="email"
      className='newsletter-input'
      required/>
      <Button
          text={buttonText}
          className='newsletter-button'
        />
     </div>
   
    </div>
  )
}

export default Newsletter