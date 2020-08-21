import React from "react";
import { Container } from "react-bootstrap";
// import Banner from 'react-banner';
import Popup from 'reactjs-popup';

import Cta3Shape1 from "../assets/images/shapes/cta-three-bg-1-1.png";
import Cta3Shape2 from "../assets/images/shapes/cta-three-bg-1-2.png";

const CTAThree = () => {
  return (
    <section className="cta-three" id="appLaunch">
      <img src={Cta3Shape1} className="cta-three__bg-1" alt="" />
      <img src={Cta3Shape2} className="cta-three__bg-2" alt="" />
      <Container className="text-center">
        <h3>
          Download our App to <br /> Experience Endless Possibilities
        </h3>
        <p>and you will be notified of our Karma Pluss app release coming January, 2021 </p>
        <div className="cta-three__btn-wrap">
        <Popup
    trigger={<a href="#appLaunch" className="cta-three__btn">
    <i className="fa fa-play"></i>
    <span>Get in</span>
    <b>Google Play</b>
  </a>}
    modal
    closeOnDocumentClick
  >
    <span> Coming Soon </span>
  </Popup>
          
          
          <Popup
    trigger={<a href="#appLaunch" className="cta-three__btn">
    <i className="fab fa-apple"></i>
    <span>Get in</span>
    <b>Apple Store</b>
  </a>}
    modal
    closeOnDocumentClick
  >
    <span> Coming Soon </span>
  </Popup>
        </div>
        
        
      </Container>
    </section>
  );
};

export default CTAThree;
