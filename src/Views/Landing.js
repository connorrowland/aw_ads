// Dependencies
import React from 'react';
import Helmet from 'react-helmet';

// Style
import '../CSS/Landing.css';

// Images
import BlackCircle from '../Images/Black_Circle.png';
import BlueCircle from '../Images/Blue_Circle.png';
import BlueSquareStamp from '../Images/Blue_Square_Stamp.png';
import DownwardArrow from '../Images/Downward_Arrow.png';
import Hatch from '../Images/Hatch.png';
import OrangeCircle from '../Images/Orange_Circle.png';
import PinkSquareStamp from '../Images/Pink_Square_Stamp.png';

//Components
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import WorkTogetherForm from "../Components/WorkTogetherForm";
import NavBar from '../Components/NavBar';

// Animations
import LandingAnimations from "../LandingAnimation.js"


export default () => (
  <div>
    <NavBar/>
    <div id="landing-page" className="page--body">
      <ScrollToTopOnMount />

      <main id="homepage-main">
        <header id="home--header">
          <div className="grid--container container" id="section-1--grid">
            <div className="mobile-hatch-container">
              <img className="hatch-image" src={Hatch} alt="Alden Wolf Hatch"/>
              <img className="hatch-image" src={Hatch} alt="Alden Wolf Hatch"/>
            </div>
            <div className="left-column"></div>
            <div className="center-column">
              <div className="center-column--text">
                <h1>Practical creative for fast-growing startups.</h1>
                <div className="hatch-container hatch-container-desktop">
                  <img className="hatch-image" src={Hatch} alt="Alden Wolf Hatch"/>
                  <img className="hatch-image" src={Hatch} alt="Alden Wolf Hatch"/>
                </div>
                <p id="first-text">We specialize in meeting the needs of lean, ever-changing organizations. Our work is designed to meaningfully impact your business today and set you up beautifully for what’s ahead.</p>
              </div>
            </div>
            <div className="right-column"></div>
          </div>
        </header>
        <section id="home--section-2">
          <div className="grid--container container">
            <div className="left-column">
              <div id="blue-square" className="fade-in-squares">
                <div id="blue-square--inner">
                  <img id="blue-square-stamp" src={BlueSquareStamp} alt="Alden Wolf Stamp"/>
                </div>
              </div>
            </div>
            <div className="mobile-hatch-container">
              <img className="hatch-image" src={Hatch} alt="Alden Wolf Hatch"/>
              <img className="hatch-image" src={Hatch} alt="Alden Wolf Hatch"/>
            </div>
            <div className="center-column">
              <div className="center-column--text">
                <h1 id="ethos-header">Scrappy ethos. Strategic approach.</h1>
                <div className="hatch-container hatch-container-desktop">
                  <img className="hatch-image" src={Hatch} alt="Alden Wolf Hatch"/>
                  <img className="hatch-image" src={Hatch} alt="Alden Wolf Hatch"/>
                </div>
                <p id="ethos-body-text">We’re undaunted by tight timelines and real-world budgets. Limitations help us focus on what’s essential and do our best work.</p>
                <img id="downward-arrow" src={DownwardArrow} alt="Downward Arrow"/>
              </div>
            </div>
            <div className="right-column">
              <div id="pink-square" className="fade-in-squares">
                <img id="pink-square-stamp" src={PinkSquareStamp} alt="Alden Wolf Stamp"/>
              </div>
            </div>
          </div>
        </section>
        <section id="home--section-3">
          <div className="grid--container container">
            <div className="left-column">
             <div className="left-column--text" id="section-3-left-column--text">
               <h1>We’re a full-service shop.</h1>
               <p>
                  In our careers, we’ve often been among the first creative hires at young companies. So, we’ve learned to run the gamut.
               </p>
             </div>
            </div>
            <div className="center-column">
              <div className="center-column--text">
                <div className="hatch-container hatch-container-desktop">
                  <img className="hatch-image" src={Hatch} alt="Alden Wolf Hatch"/>
                  <img className="hatch-image" src={Hatch} alt="Alden Wolf Hatch"/>
                </div>
              </div>
            </div>
            <div className="right-column">
              <div className="right-column--text" id="section-3-right-column--text">
                <h1 id="mobile-body-1">We move pretty fast.</h1>
                <p>
                  We get started ASAP, build momentum and keep it going. We share your sense of urgency and we’re inspired by it.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="home--section-4">
          <div className="grid--container container">
            <div className="left-column"></div>
            <div className="center-column">
              <div className="center-column--text" id="section-4-center-column--text">
                <h1>We focus on conversion.</h1>
                <p>We aim to clearly communicate your unique offering and help you connect with the people who will benefit most from it.</p>
              </div>
            </div>
            <div className="right-column"></div>
          </div>
        </section>
        <section id="home--section-5">
          <div className="grid--container container">
            <div className="left-column">
             <div className="left-column--text" id="section-5-mobile-fade">
                <h1>We keep costs down.</h1>
                <p>
                  High-quality creative should be affordable for businesses that need it. We’re efficient with our time and that’s always reflected in our rates.
                </p>
             </div>
            </div>
            <div className="center-column">
              <div className="center-column--text">
                <div className="hatch-container hatch-container-desktop">
                  <img className="hatch-image" src={Hatch} alt="Alden Wolf Hatch"/>
                  <img className="hatch-image" src={Hatch} alt="Alden Wolf Hatch"/>
                </div>
              </div>
            </div>
            <div className="right-column">
              <div className="right-column--text" id="section-6-mobile-fade">
                <h1>We help you stay competitive.</h1>
                <p>
                  We always deliver clean, contemporary work that helps you look the part while standing out from the pack.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="home--section-6">
          <div className="grid--container container">
            <div className="left-column">
             <div className="left-column--text">
                <h1 id="section-6--heading">This is our approach.</h1>
                <h2 id="section-6--subheading-1">Start with a solid foundation.</h2>
                <p className="section-6--mobile-text">
                  We establish goals and build alignment from the get-go, so we can make better decisions, faster as we go.
                </p>
                <h2 id="section-6--subheading-2">Keep the work simple and clear.</h2>
                <p className="section-6--mobile-text" id="section-6--mobile-text-left">
                  Our process is transparent and straightforward, so you’ll always know where we’re at and what’s coming next.
                </p>
                <h2 id="section-6--subheading-3">Lay the groundwork for ongoing collaboration.</h2>
                <p className="section-6--mobile-text">
                  We’re here to support you as new needs arise. We’ll build on our prior work together to deliver consistently on-brand creative every time.
                </p>
             </div>
            </div>
            <div className="center-column">
              <div className="center-column--text">
                <p id="section-6-text-1" className="section-6--desktop-text">
                  We establish goals and build alignment from the get-go, so we can make better decisions, faster as we go.
                </p>
                <p id="section-6-text-2" className="section-6--desktop-text">
                  Our process is transparent and straightforward, so you’ll always know where we’re at and what’s coming next.
                </p>
                <p id="section-6-text-3" className="section-6--desktop-text">
                  We’re here to support you as new needs arise. We’ll build on our prior work together to deliver consistently on-brand creative every time.
                </p>
              </div>
            </div>
            <div className="right-column">
              <div id="section-6--circle-progression">
                <img id="small-black-circle" src={BlackCircle} alt="Alden Wolf Stamp"/>
                <img id="blue-circle" src={BlueCircle} alt="Alden Wolf Stamp"/>
                <img id="orange-circle" src={OrangeCircle} alt="Alden Wolf Stamp"/>
              </div>
            </div>
          </div>
        </section>
        <section id="home--section-7">
          <div className="grid--container container" id="form-area">
            <div className="left-column"></div>
            <div className="center-column">
              <WorkTogetherForm />
            </div>
            <div className="right-column"></div>
          </div>
        </section>
      </main>
      <Helmet title=''/>
    </div>
  </div>
)
