import React from 'react'
import './formComponents.css'

const CsmInput = (props) => {
  const { children, field, title, form, ...rest } = props
  return (
    <div className="formInputContainer">
      <div className="formInputLabel">{title}</div>
      <select className="select-css" {...field}>
        {rest.options.map((o) => (
          <option key={o.key} value={o.value}>
            {o.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CsmInput
