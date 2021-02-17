import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Aluminium from './Aluminium';
import Home from './Home';


const App = () => (
  <Router>
    <div className='content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Aluminium' component={Aluminium} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))

