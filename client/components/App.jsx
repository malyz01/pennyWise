import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import './app.css'

import Landing from './Landing'
import Navbar from './Navbar'
import Footer from './Footer'

const App = () => {
  return (
    <div className="appContainer">
      <HashRouter>
        <Navbar />
        <Route exact path="/" component={Landing} />
      </HashRouter>
      <Footer />
      <img
        src="images/pngfind.com-fern-png-473123.png"
        className="fern"
        alt=""
      />
    </div>
  )
}

export default App
