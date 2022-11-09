import React from 'react'
import PropTypes from "prop-types";
import './style.scss'

Textarea.propTypes = {
    labelName: PropTypes.string,
    htmlFor: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired
  };

export default function Textarea({labelName, htmlFor, rows}) {
  return (
    <div className='form-group'>
        {
            labelName ? <label className='form-label' htmlFor={htmlFor}>{labelName}</label> : ''
        }
        <textarea  id={htmlFor} className="text-area" rows={rows} />
    </div>
  )
}
