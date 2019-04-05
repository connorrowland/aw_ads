// Dependencies
import React from 'react';
import Helmet from 'react-helmet';

// Style
import '../CSS/Ads.css';

// Images
//import PublishersMockupOne from '../Images/Publishers_Mockup_1.png';

// Components
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import AdsPageContent from "../Components/AdsPage";
import AdsNav from "../Components/AdsNav";

export default () => (
  <div id="ads-page" className="page--body">
    <ScrollToTopOnMount />
    <AdsNav />
    <AdsPageContent />
    <Helmet title='Ads'/>
  </div>
)