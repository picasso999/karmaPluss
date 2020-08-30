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
                titleText={`Making you build our "Healthy Planet"`}
              />
              <div className="cta-two__icon-wrap">
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                    <i className="fa fa-trees"></i>
                  </div>
                  <h1>
                    Carbon <br /> Footprint
                  </h1>
                </div>
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                    <i className="fa fa-recycle"></i>
                  </div>
                  <h1>
                    Recycle <br /> Online
                  </h1>
                </div>
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                    <i className="fa fa-store-alt"></i>
                  </div>
                  <h1>
                    Organic <br /> Lifestyle
                  </h1>
                </div>
              </div>
              <div className="cta-two__text">
                <p>
                  <strong>Healthy World</strong> needs people like us. The ones' who are <strong>eager to do good to self, others and nature</strong> around. Carbon Footprint &amp; emissions help in <strong>reducing global warming from our door step.</strong> To reduce wastage and increase reusability, we have <strong>'easy recycle'</strong> option for our users to recycle waste and unwanted items. To be able to purchase healthy food and keeping nature safe, it is important to buy products which release less Carbon Emissions, we help you to know how much <strong>'Organic Lifestyle'</strong> you are leading. 
                </p>
                <br/>
                <ul className="list-unstyled cta-one__list">
                <li>
                  <i className="fa fa-check-circle"></i>
                  <strong>Helps you help out nature</strong> by making us aware of our CO<sub>2</sub> emissions, how to reduce it by plantation or many others ways.
                </li>
                <hr/>
                <li>
                  <i className="fa fa-check-circle"></i>
                  <strong>A sweet gift to surprise</strong> your loved ones with books, plants specially crafted for various occasions.
                </li>
                <hr/>
                <li>
                  <i className="fa fa-check-circle"></i>
                  <strong>Recycle your waste</strong> from your doorstep, by just a click away to connect with local vendors. 
                </li>
                <hr/>
                <li>
                  <i className="fa fa-check-circle"></i>
                  <strong>Give things you are not using</strong> anymore for a certain price or free to nearby people who are in need. Sharing is caring, gratitude to others makes us grow as a human being.
                     
                </li>
                <hr/>
                <li>
                  <i className="fa fa-check-circle"></i>
                  <strong>Buy things from others</strong> to save the environment by not making new purchases and create more CO<sub>2</sub> emissions into air. This will help us in building reusable-lifestyle.
                </li>
                <hr/>
                <li>
                  <i className="fa fa-check-circle"></i>
                  <strong>Caring for self-development, caring for others and caring for nature</strong> makes us truly happy, which leads to a successful lifestyle.
                </li>
                <hr/>
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
                className="wow fadeInUp CardDsn"
                data-wow-duration="1500ms"
                alt="Karma Pluss Productivity Benefits and Healthy Lifestyle"
              />
              <img
                src={CTAImage2}
                className="wow fadeInUp CardDsn"
                data-wow-duration="1500ms"
                alt="Karma Pluss Productivity Benefits and Healthy Lifestyle"
              />
              <img
                src={CTAImage3}
                className="wow fadeInUp CardDsn"
                data-wow-duration="1500ms"
                alt="Karma Pluss Productivity Benefits and Healthy Lifestyle"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
