import React from "react";
import BlockTitle from "./BlockTitle";

import CTAImage1 from "../assets/images/resources/cta-2-moc-1.png";
import CTAImage2 from "../assets/images/resources/cta-2-moc-2.png";
import CTAImage3 from "../assets/images/resources/cta-2-moc-3.png";

const CTATwo = () => {
  return (
    <section className="cta-two" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cta-two__content">
              <BlockTitle
                textAlign="left"
                paraText="Added Features"
                titleText={`Making you build our "healthy Planet"`}
              />
              <div className="cta-two__icon-wrap">
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                    <i className="fa fa-trees"></i>
                  </div>
                  <h3>
                    Carbon <br /> Footprint
                  </h3>
                </div>
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                    <i className="fa fa-recycle"></i>
                  </div>
                  <h3>
                    Recycle <br /> Online
                  </h3>
                </div>
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                    <i className="fa fa-store-alt"></i>
                  </div>
                  <h3>
                    Organic <br /> Lifestyle
                  </h3>
                </div>
              </div>
              <div className="cta-two__text">
                <p>
                  Healthy World needs people like us. The ones' who are <strong>eager to do good to self, others and nature</strong> around. Carbon Footprint &amp; emissions help in <strong>reducing global warming from our door step.</strong> To reduce wastage and increase reusability, we have <strong>'easy recycle'</strong> option for our users to recycle waste and unwated items. To be able to purchase healthy food and keeping nature safe, it is important to buy products which release less Carbon Emissions, we help you know how much <strong>'Organic Lifestyle'</strong> you are leading. 
                </p>
                <br/>
                <ul className="list-unstyled cta-one__list">
                <li>
                  <i className="fa fa-check-circle"></i>
                  Helps you help out nature by making us aware of our CO2 emissions, how to reduce it by plantation or many others ways.
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  A sweet gift to surprise your loved ones with books, plants specially crafted for various occasions.
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Recycle your waste from your doorstep, by just a click away to connect with local vendors. 
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Give things you are not using anymore for a certain price or free to nearby people who are in need. Sharing is caring, gratitude to others makes us grow as a human being   
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Buy things from others to save the environment by not making new purchases and create more CO2 emissions into air. This will help us in building reusable-lifestyle.
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Caring for self-development, caring for others and caring for nature makes us truly happy, which leads to a successful lifestyle.
                </li>
              </ul>
              </div>
              <a href="#videoOne" className="thm-btn cta-two__btn">
                <span>Discover More</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="cta-two__images d-flex justify-content-end align-items-end flex-column">
              <img
                src={CTAImage1}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
              <img
                src={CTAImage2}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
              <img
                src={CTAImage3}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
