import React from 'react'
import './style.css'

export default function Input({labelName, htmlFor, inputType='text', placeHolder, className}) {
  return (
    <div className='form-group'>
        {
            labelName ? <label className='form-label' htmlFor={htmlFor}>{labelName}</label> : ''
        }
        <input type={inputType} placeholder={placeHolder} id={htmlFor} className={className} />
    </div>
  )
}
