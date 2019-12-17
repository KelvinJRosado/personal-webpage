import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Home from './Components/home'
import Links from './Components/links'
import Resume from './Components/resume'
import Summary from './Components/summary'
import NotFound from './Components/notfound'

// Establish routing
const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/summary">Summary</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
                <li>
                    <Link to="/links">Links</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/links" component={Links} />
                <Route path="/summary" component={Summary} />
                <Route path="/resume" component={Resume} />
                <Route path="/404" component={NotFound} />
                <Redirect from="*" to ="/404" />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
