import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'


const CartWidgetComponent = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCartArrowDown} style={{color: "white", fontSize: "1.rem"}} />
      <span style={{color: "white", fontSize: "1.3rem", marginLeft:"0.5rem"}}>3</span>
    </div>
  )
}

export default CartWidgetComponent