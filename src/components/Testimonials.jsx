
import React from 'react'
import Heading from './Heading'
import { FaQuoteLeft } from 'react-icons/fa'
import testimonialdata from './data/testimonial'

const Testimonials = ({
  heading,
  paragraph
}) => {
  return (
    <div>
         <Heading
                title={heading}
                className='testimonial-heading'
              />

           <p className='testimonial-para'>
        {paragraph}
      </p>
      <h4 className='testimonial-heading'>praise</h4>
      <h4 className='testimonial-para'>Words from the wearers</h4>
    <div className='testimonial-wrapper'>
     {testimonialdata.map((testimonial) => (

<div className='testimonial-card' key={testimonial.id}>
  <FaQuoteLeft className='testimonial-icon' />
  <p className='testimonial-info'>{testimonial.info}</p>
  <h4 className='testimonial-name'>{testimonial.name}</h4>
  <h4 className='testimonial-country'>{testimonial.country}</h4>

</div>

))}
    </div>
      </div>
  )
}

export default Testimonials