import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'
import Home from '../components/Home'
import Name from '../components/Name'
import Projects from '../components/Projects'

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Home} >

        <Route path="Projects" component={Projects} />

        <IndexRoute component={Name} />
      </Route>
      </Router>
);
