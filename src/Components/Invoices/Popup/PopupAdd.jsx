import React from 'react'
import './PopupAdd.css'
import { AiOutlineClose } from 'react-icons/ai'


const PopupAdd = (props) => {
  return props.trigger ? (
    <div className='popupInvoice'>
      <div className='popup-inner'>
       
        <AiOutlineClose
          className='close-invoice-btn'
          onClick={() => props.setTrigger(false)}
        />
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopupAdd
