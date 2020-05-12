import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Formik, Form, Field } from 'formik'
import './expenseModal.css'

import Input from '../../FormComponents/Input'
import Dropdown from '../../FormComponents/Dropdown'
import { updateUserExpense } from '../../../store/actions/expense'
import { setModalOpen, setModalName } from '../../../store/actions/modal'

const category = [
  { key: 'e', text: 'Essential', value: 'Essential' },
  { key: 'n', text: 'Non-Essential', value: 'Non-Essential' }
]
const options = [
  { key: 'w', text: 'Weekly', value: 'Weekly' },
  { key: 'm', text: 'Monthly', value: 'Monthly' },
  { key: 'a', text: 'Annually', value: 'Annually' }
]

export class Login extends Component {
  handleOnSubmit = async (values) => {
    await this.props.updateUserExpense(this.props.select.id, values)
    this.props.setModalOpen(false)
    this.props.setModalName(null)
  }

  render () {
    const { categories, expenseName, expenseAmount, frequency } = this.props.select
    return (
     <Formik
        initialValues={{
          categories,
          expenseName,
          expenseAmount,
          frequency
        }}
        onSubmit={this.handleOnSubmit}
      >
        <Form>
          <div className="modalExpenseMainContainer">
            <div className="modalExpenseHeader">{this.props.form}</div>
            <div className="divider" />
            <Field
              title="Catergory"
              options={category}
              name="categories"
              component={Dropdown}
            />
            <Field
              title="Name"
              name="expenseName"
              type="text"
              component={Input}
              placeholder="expense name"
            />
            <Field
              title="Amount"
              name="expenseAmount"
              type="text"
              component={Input}
              placeholder="income amount"
            />
            <Field
              title="Frequency"
              options={options}
              name="frequency"
              component={Dropdown}
            />
            <Button className="submitBtn" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    )
  }
}

const mapStateToProps = (state) => ({
  form: state.modal.name,
  select: state.expense.selected
})

const mapDispatchToProps = {
  setModalOpen,
  setModalName,
  updateUserExpense
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
