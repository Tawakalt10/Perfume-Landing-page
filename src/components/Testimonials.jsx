
import React from 'react'
import testimonials from './data/testimonial'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <div>
    <div className='testimonial-wrapper'>
     {testimonials.map((testimonial) => (

<div className='testimonial-card' key={testimonial.id}>
  <FaQuoteLeft />
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