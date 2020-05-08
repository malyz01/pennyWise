import React from 'react'
import { connect } from 'react-redux'

export default function withAuth (ComponentToBeRendered) {
  class Authenticate extends React.Component {
    componentDidMount () {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/')
      }
    }
    componentDidUpdate () {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/')
      }
    }
    render () {
      return <ComponentToBeRendered {...this.props} />
    }
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  })

  return connect(mapStateToProps)(Authenticate)
}
