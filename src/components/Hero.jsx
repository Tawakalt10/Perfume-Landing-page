import React from 'react';
import Heading from './Heading';
import Button from './Button';


const Hero = ({
  brandName,
  heading,
  description,
  image,
  buttonOne,
  buttonTwo
}) => {
  return (
    <div className='hero-section'>
      <div className='hero-details'>

        <h4 className='hero-brandname'>
          {brandName}
        </h4>

         <Heading
                title={heading}
                className='hero-heading'
              />

        <p className='hero-para'>
          {description}
        </p>

        <div className='hero-buttons'>
        <Button
          text={buttonOne}
          className='hero-btn-1'
        />
          <Button
          text={buttonTwo}
          className='hero-btn-2'
        />

         
        </div>
      </div>

      <img
        src={image}
        alt={heading}
        className='hero-img'
      />
    </div>
  )
}

export default Hero