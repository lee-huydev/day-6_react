import React from 'react'
import Product from '../components/item'
const Products = ({ data }) => {
  return (
    <div className='product-container'>
        <div className='products'>
        {
            data.map((e,i)=> 
            <Product 
                key={i}
                title={e.title}
                des={e.description}
                price={e.price}
                img={e.image}
            />)
        }
        </div>
    </div>
  )
}
export default Products
