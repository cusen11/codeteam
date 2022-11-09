import React from 'react'
import PropTypes from "prop-types";
import './style.scss'

Input.propTypes = {
  labelName: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  inputType: PropTypes.string,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
};

function Input({labelName, htmlFor, inputType='text', placeHolder, className='form-input'}) {
  return (
    <div className='form-group'>
        {
            labelName ? <label className='form-label' htmlFor={htmlFor}>{labelName}</label> : ''
        }
        <input type={inputType} placeholder={placeHolder} id={htmlFor} className={className} />
    </div>
  )
}

export default Input