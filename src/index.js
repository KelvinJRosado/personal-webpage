import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Home from './Components/home'
import Links from './Components/links'
import Resume from './Components/resume'
import Summary from './Components/summary'
import NotFound from './Components/notfound'
import SideBar from './Components/sidebar'

// Establish routing
const result = (
    <div>
        <div>
            <SideBar />
        </div>
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/links" component={Links} />
                        <Route path="/summary" component={Summary} />
                        <Route path="/resume" component={Resume} />
                        <Route path="/404" component={NotFound} />
                        <Redirect from="/home" to ="/" />
                        <Redirect from="*" to ="/404" />
                    </Switch>
                </div>
            </Router>
        </div>
    </div>
)

ReactDOM.render(result, document.getElementById('root'));
