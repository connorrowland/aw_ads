import React from 'react'
import Helmet from 'react-helmet'

import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";

export default () => (
  <div id="page-doesnt-exist" className="page--body">
    <ScrollToTopOnMount />
    <div id="404-page" className="page--body">
      <h1>404</h1>
    </div>
    <Helmet title='404' />
  </div>
)