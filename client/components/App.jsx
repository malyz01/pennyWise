import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import './app.css'

import Landing from './Landing'
import Profile from './Profile'

const App = () => {
  return (
    <HashRouter>
      {/* <Route exact path='/' component={Landing} /> */}
      <Route exact path='/profile' component={Profile}/>
    </HashRouter>
  )
}

export default App
