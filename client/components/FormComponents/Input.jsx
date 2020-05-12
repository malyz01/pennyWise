import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const CsmInput = props => {
  const { field, label, type } = props
  console.log(props)
  return (
    <Form.Field>
      <label>Label Here</label>
      <Input {...props.field} type={type} />
    </Form.Field>
  )
}

export default CsmInput
