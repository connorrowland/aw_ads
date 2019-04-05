// Dependencies
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import * as $ from 'jquery';

// CSS
import 'normalize.css';
import 'bootstrap';
import 'popper.js';
import './CSS/App.css';

// Components
import Footer from './Components/Footer';

// Views
import LandingPage from './Views/Landing';
import AdsPage from './Views/Ads';

import NoMatch from './Views/NoMatch';
const title = 'Alden Wolf';
const routes = [
  {
    title: 'Alden Wolf — Practical creative for fast-growing startups.',
    path: '/',
    component: LandingPage,
    exact: true
  },
  {
    title: 'Alden Wolf — Ads.',
    path: '/ads',
    component: AdsPage,
    exact: true
  },
];

class App extends Component {
  render() {
    return (
      <Router>
          <Route render={(props) => {
            return (
              <div className="page" id={`${props.location.pathname.substr(1)}`}>
                <Helmet titleTemplate={`%s - ${title}`} />
                <Switch>
                  {routes.map((route, i) => (
                    <Route key={i} {...route} />
                  ))}
                  <Route component={NoMatch} />
                </Switch>
                <Footer />
              </div>
            )
          }} />
      </Router>
    );
  }
}

export default App;
