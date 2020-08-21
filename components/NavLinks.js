import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavLinks = () => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
    console.log(dropdownStatus);
  };
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <ScrollLink
          activeClass="current"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Features
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Market
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="videoOne"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          App Intro
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="screens"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Screens
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="FAQs"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          FAQs'
        </ScrollLink>
      </li>
      {/* <li className="dropdown">
        <Link href="/blog">
          <>
            <a>News</a>
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className={dropdownStatus === true ? "active" : null}>
          <li>
            <Link href="/blog">
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="/blog-post">
              <a>News Details</a>
            </Link>
          </li>
        </ul>
      </li> */}
    </ul>
  );
};

export default NavLinks;
