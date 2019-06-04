import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Main from './Main'

const NotFound = () => <div>not found</div>

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </>
)

export default (process.env.NODE_ENV === 'development' ? hot(module)(App) : App)
