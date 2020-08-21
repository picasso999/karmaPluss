import React from "react";
import BlockTitle from "./BlockTitle";

import CtaShape1 from "../assets/images/shapes/cta-1-shape-1.png";
import CtaShape2 from "../assets/images/shapes/cta-1-shape-2.png";
import CtaMoc1 from "../assets/images/resources/cta-1-moc-1.png";

const CTAOne = () => {
  return (
    <section className="cta-one" id="AmazingApp">
      <img src={CtaShape1} className="cta-one__bg-shape-1" alt="" />
      <img src={CtaShape2} className="cta-one__bg-shape-2" alt="" />
      <div className="container">
        <div className="cta-one__moc wow fadeInLeft" data-wow-duration="1500ms">
          <img src={CtaMoc1} className="cta-one__moc-img" alt="" />
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="cta-one__content">
              <BlockTitle
                textAlign="left"
                paraText="Best Application"
                titleText={`How are we helping out our Users?`}
              />
              <div className="cta-one__text">
                
                <p>when we show our <strong>gratitude by thought, words and actions,</strong> we become our "Best Version"</p>
              </div>
              <ul className="list-unstyled cta-one__list">
                <li>
                  <i className="fa fa-check-circle"></i>
                  We provide tasks / challenges to improve your habits,   
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  we keep track of your good and bad deeds,
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  we help you protect our nature by giving you estimations of your carbon emissions, how much recycle is being done,
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                We help you keep track of your health by suggesting healthy, carbon less products for your daily lifestyle use. 
                </li>
              </ul>
              <a href="#videoOne" scroll-behavior= 'smooth' className="thm-btn cta-one__btn">
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
