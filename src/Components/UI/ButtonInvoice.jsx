import React from 'react'
import './Buttonform.css'

const ButtonInvoice = (props) => {
  return (
    <button className='btn'>
    {props.title}
    </button>
  )
}

export default ButtonInvoice;
