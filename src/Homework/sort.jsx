import React from 'react'
import Button from '../components/button'
const Sorts = ({onClick}) => {
  return (
    <div className='sort'>
        <h2>Sort</h2>
        <ul>
            <Button 
                onClick={onClick}
                text={'All'} 
            />
            <Button 
                text={'Price'} 
                onClick={onClick}
            />
            <Button 
                text={'Rate'} 
                onClick={onClick}
            />
            <Button 
                text={'Jewelery'} 
                onClick={onClick}
            />
        </ul>
    </div>
  )
}
export default Sorts
