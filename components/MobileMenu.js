import React from "react";
import NavLinks from "./NavLinks";
import CloseBtn from "../assets/images/shapes/close-1-1.png";

const MobileMenu = () => {
  return (
    <div className="side-menu__block">
      <div className="side-menu__block-overlay custom-cursor__overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
      <div className="side-menu__block-inner ">
        <div className="side-menu__top justify-content-end">
          <a href="#" className="side-menu__toggler side-menu__close-btn">
            <img src={CloseBtn} alt="Karma Pluss Productivity Benefits and Healthy Lifestyle" />
          </a>
        </div>

        <nav className="mobile-nav__container">
          <NavLinks />
        </nav>
        <div className="side-menu__sep"></div>
        <div className="side-menu__content">
          <p>
          Karma Pluss helps you in becoming <br/>"Best version of Yourself" by guiding you <br/>in doing good deeds to maximize your mind, body, soul potential.
          </p>
          <p>
            <a href="mailto:karmapluss1@gmail.com">contact@karmapluss.com</a> <br />
            {/* <a href="tel:888-999-0000">888 999 0000</a> */}
          </p>
          <div className="side-menu__social">
            <a href="https://www.facebook.com/karmapluss">
              <i className="fab fa-facebook"></i>
            </a>
            
            <a href="https://www.instagram.com/karmapluss1/">
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
  );
};

export default MobileMenu;
