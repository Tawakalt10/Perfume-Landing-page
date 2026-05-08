import React from 'react'

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="hero-details">
      <h4 className='hero-brandname'>Maison Aurelle . EST . 1924</h4>
      <h3 className='hero-heading'> The art of <span>Scent,</span> <br />
      bottled with <br /> intention.
      </h3>

      <p className='hero-para'> Hand-crafted niche fragrances from Grasse, France. Rare ingredients,
        single-origin sourcing, external silhouettes.
      </p>

      <div className="hero-buttons">
        <button className="hero-btn-1">Discover with the collection</button>
        <button className='hero-btn-2'> Our Story</button>
      </div>
      </div>
      
        <img src="/images/img-2.jpg" alt="Mauren"  className='hero-img'/>
      
    </div>

     

    


  )
}

export default Hero