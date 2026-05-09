// import React from 'react'
import products from './data/product'
import {FaLeaf, FaTruck, FaStar} from "react-icons/fa"

const ProductCard = () => {
  return (
    <div>
        <div className='product-section'>
      <div className="product-info-wrapper">
         <div className='product-info'>
            <FaLeaf  className="product-spec-icon" />
        <div className='product-spec'>
          <h4 className='product-spec-heading'>Natural Ingredients</h4>
          <p className='product-spec-para'>Sustainably sourced</p>
        </div>
      </div>

      <div className='product-info'>
            <FaStar className="product-spec-icon" />
        <div className='product-spec'>
          <h4 className='product-spec-heading' >Crafted in Grasse</h4>
          <p className='product-spec-para'>By master Perfumers</p>
        </div>
      </div>

      <div className='product-info'>
            <FaTruck  className="product-spec-icon" />
        <div className='product-spec'>
          <h4 className='product-spec-heading'>Complimentary Shipping</h4>
          <p className='product-spec-para'>On Orders over $120</p>
        </div>
      </div>
     </div>
  
      <h5 className='product-heading'>The Collection</h5>
      <h4 className='product-para'>Signature fragnances </h4>
      <div className="product-card-wrapper">
        {products.map((product)=> (
        <div className="product-card" key={product.id}>
            <img  src={product.image}
            alt={product.name}
            className='product-img'/>
            
            <div className='product-details'>
             <h3 className='product-name'>{product.name}</h3>
            <h3 className='product-price'> {product.price}</h3>
            </div>
            
            <h3 className='product-description'> {product.description}</h3>
            
        </div>
        ))}
      </div>
        </div>
    </div>
  )
}

export default ProductCard