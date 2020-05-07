import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Landing from '../components/Landing/Landing'
// Hello there <3
const App = () => {
  return (
    <HashRouter>
      <Route exact path='/' component={Landing} />
    </HashRouter>
  )
}

export default App
