import React, { Component } from 'react';

class Footer extends Component {
  printCurrentYear = () => {
    const date = new Date().getFullYear();
    return date
  }

  render() {
    return (
      <footer id="home--footer">
        <div className="container">
          <div id="footer--inner-container">
            <div id="footer--left-items">
              <a id="footer--contact-link" href="mailto:hello@aldenwolf.com">hello@aldenwolf.com</a>
            </div>
            <div id="footer--right-items">
              <p>&#169;{`Alden Wolf LLC ${this.printCurrentYear()}`}</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer
