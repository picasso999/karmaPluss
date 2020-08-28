import React from "react";

import FooterLogo from "../assets/images/logo-1-1.png";

const Footer = () => {
  return (
    <div>
      <section className="mailchimp-one">
        <div className="container wow fadeInUp">
          <div className="inner-container">
            <div className="mailchimp-one__icon">
              <i className="apton-icon-mail"></i>
            </div>
            <form action="#" className="mailchimp-one__form" method="POST"  data-email="karmapluss2020@gmail.com"
          action="https://script.google.com/macros/s/AKfycbwdGY48GrYlwWI8pME5Gjzg68XXmMRbZ-CX2pCtKw/exec">
              <input
                type="text" className="email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required="true"
                placeholder="Enter your email address"
                name="emailSubscribe" id="emailSubscribe"
              />
              <button className="thm-btn mailchimp-one__btn" type="submit">
                <span>Subscribe Now</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget footer-widget__about">
                  <a href="index.html">
                    <img src={FooterLogo} width="279" alt="Karma Pluss Productivity Benefits and Healthy Lifestyle" />
                  </a>
                  <p>
                  Karma Pluss helps you in becoming <br/>"Best version of Yourself" by guiding you <br/>in doing good deeds to maximize your mind, body, soul potential.
                  </p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h1 className="footer-widget__title">Follow/ Subscribe/ Like Us</h1>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="https://www.facebook.com/pluss.karma.1">Facebook
                          {/* <i className="fab fa-facebook-square"></i> */}
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/KarmaPluss">Twitter
                          {/* <i className="fab fa-twitter"></i> */}
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/karmapluss_/">Instagram
                          {/* <i className="fab fa-instagram"></i> */}
                        </a>
                      </li>
                      <li>
                        <a href="https://in.pinterest.com/karmapluss/">Pinterest
                          {/* <i className="fab fa-pinterest-p"></i> */}
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/karmapluss">Linkedin
                          {/* <i className="fab fa-linkedin"></i> */}
                        </a>
                      </li>
                      <li>
                        <a href="https://www.tumblr.com/blog/karmapluss">Tumblr
                          {/* <i className="fab fa-tumblr"></i> */}
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UCfFC8U8_ZanYSAW27kLNaTg?view_as=subscriber">YouTube
                          {/* <i className="fab fa-youtube"></i> */}
                        </a>
                      </li>
                    </ul> 
                  </div>
                  <div className="footer-widget">
                    <h1 className="footer-widget__title">Company</h1>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#home">About</a>
                      </li>
                      <li>
                        <a href="#services">Features</a>
                      </li>
                      <li>
                        <a href="#contactUs">Contact</a>
                      </li>
                      <li>
                        <a href="#screens">Application Screens</a>
                      </li>
                      <li>
                        <a href="#team">Our Team</a>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="footer-widget">
                    <h1 className="footer-widget__title">Links</h1>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#">Help</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms of Use</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center">
                <div className="footer-widget">
                  <div className="footer-widget__social">
                    
          
                  <a href="https://www.facebook.com/pluss.karma.1">
              <i className="fab fa-facebook-square"></i>
            </a>
            
            <a href="https://www.instagram.com/karmapluss_/">
              <i className="fab fa-instagram"></i>
            </a>
            
            
            <a href="https://www.linkedin.com/company/karmapluss">
              <i className="fab fa-linkedin"></i>
            </a>
            
            <a href="https://www.tumblr.com/blog/karmapluss">
              <i className="fab fa-tumblr"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCfFC8U8_ZanYSAW27kLNaTg?view_as=subscriber">
              <i className="fab fa-youtube"></i>
            </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container text-center">
            <p>© copyright 2020-22 by karmapluss.com | karmapluss.io</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
