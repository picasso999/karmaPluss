import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./BlockTitle";

const Pricing = (props) => {
  const [plan, setPlan] = useState(false);
  return (
    <section className="pricing-one" id="pricing">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Market Potential"
          titleText={`Karma Pluss has a Potential of \n $1290+ billion in International Market`}
          
        />
        <ul
          className="list-inline text-center switch-toggler-list"
          role="tablist"
          id="switch-toggle-tab"
        >
          <li className={`month ${plan === false ? "active" : ""}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPlan(false);
              }}
            >
              Global Market
            </a>
          </li>
          <li>
            <label
              onClick={(e) => {
                e.preventDefault();
                setPlan(!plan);
              }}
              className={`switch ${plan === true ? "off" : "on"}`}
            >
              <span className="slider round"></span>
            </label>
          </li>
          <li className={`year ${plan === true ? "active" : ""}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPlan(true);
              }}
            >
              CAGR (Compound Annual Growth Rate) in %
            </a>
          </li>
        </ul>
        <p>More than ever, we need this right now. With current <strong>Social Connectivity, Technology and Informative World,</strong> we can save <strong>our planet from detoriating and save living beings</strong> from losing HOPE. <strong>Karma Pluss</strong> focuses on achieving this sustainable goal.</p>
        {plan === true ? (
          <div id="yearly" >
            <Row> 
             
              <Col lg={3}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>RECYCLING</p>
                    <h1>20%</h1>
                    <ul className="list-unstyled pricing-one__list">
                      <li>$377 Billion by 2024</li>
                      <li>20%+ CAGR rate yearly wise</li>
                      <li>Asian Market has Huge Potential</li>
                      <li>More than 90% untapped market</li>
                      <li>Karma Pluss is one of the most unique platform for users to recycle their unwanted plastic, metal, waste from their door-step by just a click to connect with vendors locally. Also, a platform for exchanging products which they are not using anymore to those in need around.</li>
                    </ul>
                    <a href="https://www.statista.com/statistics/239662/size-of-the-global-recycling-market/" target="_blanck" className="thm-btn pricing-one__btn">
                      <span>Source Link</span>
                    </a>

                    <span >Huge Potential for Better Tomorrow</span>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>HEALTH &amp; WELLNESS</p>
                    <h1>9.8%</h1>
                    <ul className="list-unstyled pricing-one__list">
                      <li>$4.2 Trillion Market Potential</li>
                      <li>Healthy eating, nutrition and weight loss: $702.1 billion
</li>
<li>Wellness tourism: $639.4 billion</li>
<li>Fitness / mind-body: $595.4 billion</li>
<li>Preventive and personalized medicine and public health: $574.8 billion
</li>
                      <li>Application users are increasing annually</li>
                      <li>Karma Pluss helps users in developing their mental, physical, emotional and networking skills through continuous ground level support to advance analytics and guidance.</li>
                    </ul>
                    <a href="https://www.fastcompany.com/90247896/these-10-market-trends-turned-wellness-into-a-4-2-trillion-global-industry" target="_blanck" className="thm-btn pricing-one__btn">
                      <span>Source Link</span>
                    </a>

                    <span>Huge Potential for Better Tomorrow</span>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>ORGANIC FOOD &amp; LIFESTYLE</p>
                    <h1>16.15%</h1>
                    <ul className="list-unstyled pricing-one__list">
                      <li>$262.25 Billion by 2022</li>
                      <li>CAGR of 16.15%, in value terms, during 2017 – 2022</li>
                      <li>Application users are increasing exponentially during past few years</li>
                      <li>Karma Pluss helps users in knowing healthy food habits documented with benefits of Organic lifestyle suggestions and reports.</li>
                    </ul>
                    <a href="https://www.techsciresearch.com/report/global-organic-food-market-by-product-type-organic-meat-poultry-and-dairy-organic-fruits-and-vegetables-organic-processed-food-etc-by-region-europe-north-america-asia-pacific-etc-competition-forecast-and-opportunities/833.html"  target="_blanck" className="thm-btn pricing-one__btn">
                      <span>Source Link</span>
                    </a>

                    <span>Huge Potential for Better Tomorrow</span>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>CARBON FOOTPRINT</p>
                    <h1>6.2%</h1>
                    <ul className="list-unstyled pricing-one__list">
                      <li>USD 12.2 billion by 2025</li>
                      <li>(CAGR) of 6.2% during the forecast period of 2020-25</li>
                      <li>To save Earth from Global Warming, people are looking for more sustainable solutions and Carbon tracking and Carbon offset methods.</li>
                      <li>Karma Pluss not only helps in tracking a user 'Carbon Footprint' (Emissions) but also, helps them with sustainable solutions to Offset (reduce) their Carbon.</li>
                    </ul>
                    <a href="https://www.marketsandmarkets.com/Market-Reports/carbon-footprint-management-market-136375712.html" target="_blanck" className="thm-btn pricing-one__btn">
                      <span>Source Link</span>
                    </a>

                    <span>Huge Potential for Better Tomorrow</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div id="month">
            <Row>
            <Col lg={3}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>RECYCLING</p>
                    <h1>$377 Bn</h1>
                    <ul className="list-unstyled pricing-one__list">
                      <li>$377 Billion by 2024</li>
                      <li>20%+ CAGR rate yearly wise</li>
                      <li>Asian Market has Huge Potential</li>
                      <li>More than 90% untapped market</li>
                      <li>Karma Pluss is one of the most unique platform for users to recycle their unwanted plastic, metal, waste from their door-step by just a click to connect with vendors locally. Also, a platform for exchanging products which they are not using anymore to those in need around.</li>
                    </ul>
                    <a href="https://www.statista.com/statistics/239662/size-of-the-global-recycling-market/" target="_blanck" className="thm-btn pricing-one__btn">
                      <span>Source Link</span>
                    </a>

                    <span>Huge Potential for Better Tomorrow</span>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>HEALTH &amp; WELLNESS</p>
                    <h1>$1271.2 Bn</h1>
                    <ul className="list-unstyled pricing-one__list">
                      <li>$4.2 Trillion Market Potential</li>
                      <li>Healthy eating, nutrition and weight loss: $702.1 billion
</li>
<li>Wellness tourism: $639.4 billion</li>
<li>Fitness / mind-body: $595.4 billion</li>
<li>Preventive and personalized medicine and public health: $574.8 billion
</li>
                      <li>Application users are increasing annually</li>
                      <li>Karma Pluss helps users in developing their mental, physical, emotional and networking skills through continous ground level support to advance analytics and guidance.</li>
                    </ul>
                    <a href="https://www.fastcompany.com/90247896/these-10-market-trends-turned-wellness-into-a-4-2-trillion-global-industry" target="_blanck" className="thm-btn pricing-one__btn">
                      <span>Source Link</span>
                    </a>

                    <span>Huge Potential for Better Tomorrow</span>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>ORGANIC FOOD &amp; LIFESTYLE</p>
                    <h1>$262.25 Bn</h1>
                    <ul className="list-unstyled pricing-one__list">
                      <li>$262.25 Billion by 2022</li>
                      <li>CAGR of 16.15%, in value terms, during 2017 – 2022</li>
                      <li>Application users are increasing exponentially during past few years</li>
                      <li>Karma Pluss helps users in knowing healthy food habits documented with benefits of Organic lifestyle suggestions and reports.</li>
                    </ul>
                    <a href="https://www.techsciresearch.com/report/global-organic-food-market-by-product-type-organic-meat-poultry-and-dairy-organic-fruits-and-vegetables-organic-processed-food-etc-by-region-europe-north-america-asia-pacific-etc-competition-forecast-and-opportunities/833.html"  target="_blanck" className="thm-btn pricing-one__btn">
                      <span>Source Link</span>
                    </a>

                    <span>Huge Potential for Better Tomorrow</span>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>CARBON FOOTPRINT</p>
                    <h1>$12.2 Bn</h1>
                    <ul className="list-unstyled pricing-one__list">
                      <li>$12.2 billion by 2025</li>
                      <li>(CAGR) of 6.2% during the forecast period of 2020-25</li>
                      <li>To save Earth from Global Warming, people are looking for more sustainable solutions and Carbon tracking and Carbon offset methods.</li>
                      <li>Karma Pluss not only helps in tracking a user 'Carbon Footprint' (Emissions) but also, helps them with sustainable solutions to Offset (reduce) their Carbon.</li>
                    </ul>
                    <a href="https://www.marketsandmarkets.com/Market-Reports/carbon-footprint-management-market-136375712.html" target="_blanck" className="thm-btn pricing-one__btn">
                      <span>Source Link</span>
                    </a>

                    <span>Huge Potential for Better Tomorrow</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Pricing;
