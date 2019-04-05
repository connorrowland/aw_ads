import React from 'react';
import $ from 'jquery';

const contentful = require("contentful");

class AdsNav extends React.Component {
    constructor () {
      super()
      this.state = {
        logoImage: ""
      }
    }

    componentDidMount() {
      const client = contentful.createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: "1ujsawf6071m",
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: "d4aa555b6615534b0f9941aafa04c0f96e06cc98615f05d8e1b5260c51919c40"
      });
      // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
      client
        .getEntry("3hfNpTxulFgiyuj06cVg7o")
        .then(
          response => this.setState({
            logoImage: response.fields.logoImage.fields.file.url
          })
        )
        .catch(err => console.log(err));
    }

    render() {
      return (
        <div id="ads-navbar">
          <div id="ads-navbar-logo--container">
            <img id="ads-navbar-logo--image" src={this.state.logoImage} alt="Alden Wolf Logo"/>
          </div>
        </div>
      );
    }
};

export default AdsNav;