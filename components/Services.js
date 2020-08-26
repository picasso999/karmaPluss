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
                <p>Platform to guide others and support who are in need of systematic, documented formula for tracking deeds. <br/> <br/> A great gift to delight your loved ones with the books, plants and other wonderful items specially designed for different occasions.
<br/> <br/> Assist others with a simple click, to teach your finest skills and develop your abilities through guiding.</p>
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
                <h1>Karma To Self</h1>
                <p>Tasks / challenges are provided to help you get started with 1 minute activities to face 21 days of challenges. <br/> <br/> Learn from industry leaders and experts to develop your skills / practical knowledge in just one click from here. <br/> <br/> Learn excellent articles about the most fascinating subjects and explore the new trends.</p>
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
                <p>Helps you help out nature by making you aware of your CO<sub>2</sub> emissions, how to reduce it by plantation or many others ways. <br/> <br/>Recycle your waste from your doorstep, by just a click away to connect with local vendors. <br/> <br/> Buy things from others to save the environment by not making new purchases and create more CO<sub>2</sub> emissions into air. This will help us in building reusable-lifestyle. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
