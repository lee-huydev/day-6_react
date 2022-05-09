import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <li>
        <button onClick={onClick}>{text}</button>
     </li>
  )
}

export default Button