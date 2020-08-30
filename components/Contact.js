import React from "react";
import BlockTitle from "./BlockTitle";
import ContactBgShape from "../assets/images/shapes/contact-bg-shape-1-1.png";
import ContactImage from "../assets/images/resources/contact-1-1.jpg";

const Contact = () => {
  return (
    <section className="contact-one" id="contactUs">
      <img src={ContactBgShape} className="contact-one__bg-shape-1" alt="Karma Pluss Productivity Benefits and Healthy Lifestyle" />
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <form className="contact-form-validated contact-one__form" method="POST"  data-email="karmapluss2020@gmail.com"
          action="https://script.google.com/macros/s/AKfycbwdGY48GrYlwWI8pME5Gjzg68XXmMRbZ-CX2pCtKw/exec">
              <BlockTitle
                textAlign="left"
                paraText="Contact Now"
                titleText={`Have Question? Write \n a Message`}
              />
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="Name" required={true} name="name" id="name" />
                </div>
                <div className="col-lg-6">
                  <input type="email" className="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email Address" required={true} name="email" id="email" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Subject" required={true} name="subject" id="subject" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Phone Number" required={true} name="phone" id="phone" />
                </div>
                <div className="col-lg-12">
                  <textarea
                    placeholder="Write Message"
                    name="message" id="message"
                  ></textarea>
                </div>
                <div className="col-lg-12 text-left">
                  <button type="submit" className="thm-btn contact-one__btn">
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </div>
          <div
            className="col-lg-5 d-flex wow fadeInRight"
            data-wow-duration="1500ms"
          >
            <div className="my-auto">
              <div className="contact-one__image">
                <img src={ContactImage} alt="Karma Pluss Productivity Benefits and Healthy Lifestyle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
