import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'
import Landing from './Landing'
import Profile from './Profile'
import Expense from './Expense'
import Income from './Income'
import Budget from './Budget'
import withAuth from './HOC/withAuth'

const App = () => {
  return (
    <div className="appContainer">
      <HashRouter>
        <Navbar />
        <div className="routesContainer">
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={withAuth(Profile)} />
          <Route exact path="/expense" component={withAuth(Expense)} />
          <Route exact path="/income" component={withAuth(Income)} />
          <Route exact path="/budget" component={withAuth(Budget)} />

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
