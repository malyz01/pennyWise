import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Landing from './Landing'
import Footer from './Footer'

const App = () => {
  return (
    <HashRouter>
      <Route exact path='/' component={Landing} />
      <Route path='/' component={Footer}/>
    </HashRouter>
  )
}

export default App
