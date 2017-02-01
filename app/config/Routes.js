import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'
import Home from '../components/Home'
import Name from '../components/homeChildren/Name'
import Projects from '../components/Projects'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Home} >

        <Route path="Projects" component={Projects} />
        <Route path="AboutMe" component={AboutMe} />
        <Route path="Contact" component={ContactMe} />

        <IndexRoute component={Name} />

      </Route>
    </Router>
);
