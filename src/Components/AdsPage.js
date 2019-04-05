import React, { Component } from 'react';
import Hatch from '../Images/ads_hatch.png';

const contentful = require("contentful");


class AdsPage extends Component {
  constructor () {
    super()
    this.state = {
      lpSectionOneTitle: "",
      lpSectionOneSubtitle: "",
      lpTrioOneTitle: "",
      lpTrioOneSubtitle: "",
      lpTrioTwoTitle: "",
      lpTrioTwoSubtitle: "",
      lpTrioThreeTitle: "",
      lpTrioThreeSubtitle: "",
      hiddenSectionOne: false,
      lpHiddenSectionOneImg: "",
      lpHiddenSectionOneTitle: "",
      lpHiddenSectionOneSubtitle: "",
      hiddenSectionTwo: false,
      lpHiddenSectionTwoImg: "",
      lpHiddenSectionTwoTitle: "",
      lpHiddenSectionTwoSubtitle: "",
      lpLastSectionTitle: "",
      lpLastSectionSubtitle: "",
      lpAdImages: [],
      lpSectionOneButtonLink: ""
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
          hiddenSectionOne: response.fields.hiddenSectionOne,
          lpHiddenSectionOneImg: response.fields.lpHiddenSectionOneImg.fields.file.url,
          lpHiddenSectionOneSubtitle: response.fields.lpHiddenSectionOneSubtitle,
          lpHiddenSectionOneTitle: response.fields.lpHiddenSectionOneTitle,
          hiddenSectionTwo: response.fields.hiddenSectionTwo,
          lpHiddenSectionTwoImg: response.fields.lpHiddenSectionTwoImg.fields.file.url,
          lpHiddenSectionTwoSubtitle: response.fields.lpHiddenSectionTwoSubtitle,
          lpHiddenSectionTwoTitle: response.fields.lpHiddenSectionTwoTitle,
          lpSectionOneSubtitle: response.fields.lpSectionOneSubtitle,
          lpSectionOneTitle: response.fields.lpSectionOneTitle,
          lpTrioOneSubtitle: response.fields.lpTrioOneSubtitle,
          lpTrioOneTitle: response.fields.lpTrioOneTitle,
          lpTrioThreeSubtitle: response.fields.lpTrioThreeSubtitle,
          lpTrioThreeTitle: response.fields.lpTrioThreeTitle,
          lpTrioTwoSubtitle: response.fields.lpTrioTwoSubtitle,
          lpTrioTwoTitle: response.fields.lpTrioTwoTitle,
          lpLastSectionTitle: response.fields.lpLastSectionTitle,
          lpLastSectionSubtitle: response.fields.lpLastSectionSubtitle,
          lpSectionOneButtonLink: response.fields.lpSectionOneButtonLink,
          lpAdImages: response.fields.lpAdImages
        })
      )
      .catch(err => console.log(err));
  }

  generateAds() {
    const ads = this.state.lpAdImages;
    if(ads.length !== 0) {
      return (
        <div id="ads--examples-container">
          <div className="ads-examples--col ads--stacked-col">
            <img src={ads[0].fields.file.url} alt="Alden Wolf Ad" className="ads--individual-ad" />
            <img src={ads[1].fields.file.url} alt="Alden Wolf Ad" className="ads--individual-ad" />
          </div>
          <div className="ads-examples--col" id="ads-examples--col-2">
            <img src={ads[2].fields.file.url} alt="Alden Wolf Ad" className="ads--individual-ad" />
          </div>
          <div className="ads-examples--col ads--stacked-col">
            <img src={ads[3].fields.file.url} alt="Alden Wolf Ad" className="ads--individual-ad" />
            <img src={ads[4].fields.file.url} alt="Alden Wolf Ad" className="ads--individual-ad" />
          </div>
          <div className="ads-examples--col" id="ads-examples--col-4">
            <img src={ads[5].fields.file.url} alt="Alden Wolf Ad" className="ads--individual-ad" />
          </div>
          <div className="ads-examples--col ads--stacked-col">
            <img src={ads[6].fields.file.url} alt="Alden Wolf Ad" className="ads--individual-ad" />
            <img src={ads[7].fields.file.url} alt="Alden Wolf Ad" className="ads--individual-ad" />
          </div>
        </div>
      )
    }
  }

  render() {
    const { lpSectionOneTitle,
      lpSectionOneSubtitle,
      lpTrioOneTitle,
      lpTrioOneSubtitle,
      lpTrioTwoTitle,
      lpTrioTwoSubtitle,
      lpTrioThreeTitle,
      lpTrioThreeSubtitle,
      lpLastSectionTitle,
      lpLastSectionSubtitle,
      hiddenSectionOne,
      lpHiddenSectionOneTitle,
      lpHiddenSectionOneSubtitle,
      lpHiddenSectionOneImg,
      hiddenSectionTwo,
      lpHiddenSectionTwoTitle,
      lpHiddenSectionTwoSubtitle,
      lpHiddenSectionTwoImg,
      lpSectionOneButtonLink } = this.state;

    const ads = this.generateAds();

    return (
      <div id="ads--content">
        <div className="container">
          <section id="ads--section-one">
            <h1 className="ads--heading" id="ads--section-one-title">{lpSectionOneTitle}</h1>
            <p className="ads--center-section-subtitle">{lpSectionOneSubtitle}</p>
            <a href={lpSectionOneButtonLink} target="_blank" className="button--primary button">Get a quote</a>
            <div id="ads--section-one-hatch">
              <img className="hatch-image" src={Hatch} alt="Alden Wolf Hatch"/>
              <div id="ads--vertical-line"></div>
              <img className="hatch-image" src={Hatch} alt="Alden Wolf Hatch"/>
            </div>
          </section>

          <section id="ads--trio">
            <div className="row">
              <div id="ads-trio--inner">
                <div className="ads-trio--item">
                  <h3 className="ads-trio--title">{lpTrioOneTitle}</h3>
                  <p className="ads-page--small-copy">{lpTrioOneSubtitle}</p>
                </div>
                <div className="ads-trio--item">
                  <h3 className="ads-trio--title">{lpTrioTwoTitle}</h3>
                  <p className="ads-page--small-copy">{lpTrioTwoSubtitle}</p>
                </div>
                <div className="ads-trio--item">
                  <h3 className="ads-trio--title">{lpTrioThreeTitle}</h3>
                  <p className="ads-page--small-copy">{lpTrioThreeSubtitle}</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="ads--examples">
          {ads}
        </section>

        <div className="container">
          {
            hiddenSectionOne && (
              <section className="ads--text-image" id="ads--text-image-one">
                <div className="ads-text-image--img-container">
                  <img src={lpHiddenSectionOneImg} alt="Alden Wolf" />
                </div>
                <div className="ads-text-image--text-container">
                  <h1 className="ads--heading">{lpHiddenSectionOneTitle}</h1>
                  <p className="ads-page--small-copy">{lpHiddenSectionOneSubtitle}</p>
                </div>
              </section>
            )
          }
          {
            hiddenSectionTwo && (
              <section className="ads--text-image" id="ads--text-image-two">
                <div className="ads-text-image--text-container">
                  <h1 className="ads--heading">{lpHiddenSectionTwoTitle}</h1>
                  <p className="ads-page--small-copy">{lpHiddenSectionTwoSubtitle}</p>
                </div>
                <div className="ads-text-image--img-container">
                  <img src={lpHiddenSectionTwoImg} alt="Alden Wolf" />
                </div>
              </section>
            )
          }

          <section id="ads--last-section">
            <h1 className="ads--heading" id="ads--last-section-title">{lpLastSectionTitle}</h1>
            <p className="ads-page--small-copy">{lpLastSectionSubtitle}</p>
            <a href={lpSectionOneButtonLink} target="_blank" className="button--primary button">Get a quote</a>
          </section>
        </div>
      </div>
    );
  }
}

export default AdsPage;
