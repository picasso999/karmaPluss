import React from "react";
import BlockTitle from "./BlockTitle";

const Services = () => {
  return (
    <section className="service-one" id="features">
      <div className="container">
        <BlockTitle
          textAlign="center"
          paraText="Feature List"
          titleText={`Karma Pluss gives you a platform to fulfill your life with "lots of gratitude" which ultimately leads to a successful lifestyle.`}
        />
        <div className="row">
          {/* <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-computer-graphic"></i>
                </div>
                <h1>Easy to Edit</h1>
                <p>Lorem ipsum is are many variations of pass majy.</p>
              </div>
            </div>
          </div> */}
          <div className="col-lg-4 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="fa fa-hands-helping"></i>
                </div>
                <h1>Karma To Others</h1>
                <p>Platform to guide others and support who are in need in systematic, documented formula for tracking our deeds. <br/> <br/> A sweet gift to surprise your loved ones with books, plants specially crafted for various occasions.
<br/> <br/> Help others in teaching your finest skills at just one click away to make you improve your skills / practical knowledge.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="fa fa-hands-heart"></i>
                </div>
                <h1>karma To Self</h1>
                <p>We provide tasks / challenges to help you start with 1 min activities to 21 day challenges, making you gradually become an expert in your chosen habits. <br/> <br/> Learn from professionals and experts in the industry, finest crafts at just one click away to make you improve your skills / practical knowledge. <br/> <br/> Read amazing content about most interesting topics and discover the latest trends in your field of interest.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="fa fa-globe-asia"></i>
                </div>
                <h1>Karma To Nature</h1>
                <p>Helps you help out nature by making you aware of your CO2 emissions, how to reduce it by plantation or many others ways. <br/> <br/>Recycle your waste from your doorstep, by just a click away to connect with local vendors. <br/> <br/> Buy things from others to save the environment by not making new purchases and create more CO2 emissions into air. This will help us in building reusable-lifestyle. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
