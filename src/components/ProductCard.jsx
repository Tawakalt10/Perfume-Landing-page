import React from 'react'
import products from './data/product'

const ProductCard = () => {
  return (
    <div>
        <div className='product-section'>
         <div>
            
        <div>
          <h4>Natural Ingredients</h4>
          <p>Sustainably sourced</p>
        </div>
      </div>


      <h5>The Collection</h5>
      <h4>Signature </h4>
      <div className="product-card-wrapper">
        <div className="product-card">
            <img  src={products.image}
            alt={products.name}
            className='product-img'/>

            <h3 className='product-name'>{products.name}</h3>
            <h3 className='product-description'> {products.description}</h3>
            
        </div>
      </div>
        </div>
    </div>
  )
}

export default ProductCard