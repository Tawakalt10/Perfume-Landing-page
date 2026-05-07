
import React from 'react'
import testimonials from './data/testimonial'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <div>

      <h4 className='testimonial-heading'>Praise</h4>
      <h4 className='testimonial-para'>Words from the wearers</h4>
    <div className='testimonial-wrapper'>
     {testimonials.map((testimonial) => (

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