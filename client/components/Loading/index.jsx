import React from 'react'
import LoadingIndicator from './LoadingIndicator'
import './loading.css'

class Loading extends React.Component {
  render () {
    return (
      <div className="loadingMainContainer">
        <LoadingIndicator/>
      </div>
    )
  }
}

export default Loading
