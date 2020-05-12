import React from 'react'
import { Input } from 'semantic-ui-react'
import './formComponents.css'

const CsmInput = props => {
  const { children, field, title, form, ...rest } = props
  return (
    <div className="formInputContainer">
      <div className="formInputLabel">{title}</div>
      <Input fluid {...props.field} {...rest} />
    </div>
  )
}

export default CsmInput
