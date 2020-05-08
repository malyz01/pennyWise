import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'

import { authUser } from '../../../store/actions/auth'
import {
  setModalAuthOpen,
  setModalAuthForm
} from '../../../store/actions/modal'

export class Login extends Component {
         state = {
           categories: '',
           expenseName: '',
           expenseAmount: '',
           frequency: ''
         }

         handleOnChange = (e, { name, value }) => {
           this.setState({ [name]: value })
         }

         handleOnSubmit = () => {
           this.props.authUser(this.state)
           this.props.setModalAuthOpen(false)
           this.props.setModalAuthForm('')
         }

         render () {
           const { categories, expenseName, expenseAmount, frequency } = this.state
           return (
             <div className="expenseModalFormContainer">
               <Form onSubmit={this.handleOnSubmit}>
                 <Form.Field>
                   <Form.Input
                     value={categories}
                     onChange={this.handleOnChange}
                     name="categories"
                     type="text"
                     placeholder="categories"
                   />
                 </Form.Field>
                 <Form.Field>
                   <Form.Input
                     value={expenseName}
                     onChange={this.handleOnChange}
                     name="expenseName"
                     type="text"
                     placeholder="expenseName"
                   />
                 </Form.Field>
                 <Form.Field>
                   <Form.Input
                     value={expenseAmount}
                     onChange={this.handleOnChange}
                     name="expenseAmount"
                     type="text"
                     placeholder="expenseAmount"
                   />
                 </Form.Field>
                 <Form.Field>
                   <Form.Input
                     value={frequency}
                     onChange={this.handleOnChange}
                     name="frequency"
                     type="text"
                     placeholder="frequency"
                   />
                 </Form.Field>
                 <Button className="submitBtn" type="submit">
                   Submit
                 </Button>
               </Form>
             </div>
           )
         }
}

const mapDispatchToProps = {
  setModalAuthOpen,
  setModalAuthForm,
  authUser
}

export default connect(null, mapDispatchToProps)(Login)
