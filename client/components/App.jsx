import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import './app.css'

import Navbar from './Navbar'
import Footer from './Footer'
import Landing from './Landing'
import Profile from './Profile'
import Expense from './Expense'
import Income from './Income'
import Budget from './Budget'

const App = () => {
  return (
    <div className="appContainer">

      <HashRouter>
        <Navbar />
        <div className='routesContainer'>
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/expense" component={Expense} />
          <Route exact path="/income" component={Income} />
          {/* <Route exact path="/budget" component={Budget} /> */}
        </div>
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
