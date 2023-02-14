import React from 'react'
import './OrderStatus.scss'
const OrderStatus = ({text, className}) => {
  return (
    <div className='status-container'>
        <div className={`${className}`}>
          {text}
        </div>
    </div>
  )
}

export default OrderStatus