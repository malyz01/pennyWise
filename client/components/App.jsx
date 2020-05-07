import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Landing from './Landing'
import Navbar from './Navbar'
import Footer from './Footer'

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Route path='/' component={Footer}/>
    </HashRouter>
  )
}

export default App
