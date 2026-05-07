import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsletter-wrapper'>
        <h4 className='newsletter-heading'>Join the maison</h4>
        <p className='newsletter-para'>Private previews, atelier stories, and a welcome scent sample with your first order.</p>
   
     <div className='newsletter-input-wrapper'>
      <input type="email" placeholder='Your email' 
      name="" id="email"
      className='newsletter-input'
      required/>
     <button className='newsletter-button'> Subscribe</button>
     </div>
   
    </div>
  )
}

export default Newsletter