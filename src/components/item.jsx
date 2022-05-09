import React from 'react'

const Product = ({ id, title, des, price, img }) => {
  return (
   <div className='item'>
       <h3>Product: {title}</h3>
       <p className='des'>Description: {des}</p>
       <span className='img'><img src={img} alt="" /></span>
       <span className='price'>Price: {price}$</span>
   </div>
  )
}
export default Product