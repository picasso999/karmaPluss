import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Pagination, Thumbs, Controller } from "swiper";
SwiperCore.use([Pagination, Thumbs, Controller]);
import Swiper from "react-id-swiper";
import BlockTitle from "./BlockTitle";

import TestiQoute from "../assets/images/shapes/testi-qoute-1-1.png";

import TestiImageOne from "../assets/images/resources/testi-1-1.jpg";
import TestiImageTwo from "../assets/images/resources/testi-1-2.jpg";
import TestiImageThree from "../assets/images/resources/testi-1-3.jpg";

const Testimonials = (props) => {
  const paramsTwo = {
    observer: true,
    observeParents: true,
    speed: 1400,
    mousewheel: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonials-one__pagination-wrap .swiper-pagination",
      clickable: true,
    },
  };

  const paramsOne = {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    speed: 1400,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <section className="testimonials-one">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="testimonials-one__thumb-carousel-wrap">
              <div className="testimonials-one__icon">
                <div className="testimonials-one__icon-inner">
                  <img src={TestiQoute} alt="Karma Pluss Productivity Benefits and Healthy Lifestyle" />
                </div>
              </div>
              <div className="testimonials-one__thumb-carousel">
                <Swiper {...paramsOne}>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img src={TestiImageOne} alt="Awesome Image" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img src={TestiImageTwo} alt="Awesome Image" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img src={TestiImageThree} alt="Awesome Image" />
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </Col>
          <Col xl={6} className="d-flex">
            <div className="my-auto">
              <BlockTitle
                textAlign="left"
                paraText="Our Feedbacks"
                titleText={`What Our Pre-Launch \n Users Are Talking About`}
              />
              <div className="testimonials-one__carousel">
                <Swiper {...paramsTwo}>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                      The application has many amazing features that can help out people like me who loves to document my good deeds to know how far I have developed over years. It's a great way to control emitting CO2 while we know the cause for it. Thanks to the idea of healthy diet and check how much of my goods are organic and less carbon emitted production products, boosts me morally and mentally. Love to check out their beta version. 
                      </p>

                      <h1 className="testimonials-one__title">Joe Kolmer</h1>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                      A lot food, plastic waste stays at home. Many times, my children throw many of their old toys even if they are in good condition, just because they got bored of them or something new came up in their games trend. Luckily, I can use Karma Pluss to solve my problems. I can recycle paper, plastic, metal, old things to local vendors. Can share extra food with poor people or bachelores nearby for free. I can also, exchange toys, items I have with other people for free or for certain price. Thanks to Karma Pluss app . Looking forward to try it soon.
                      </p>

                      <h1 className="testimonials-one__title">Darrin Jenna</h1>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        Connecting with nature is something I give outmost importance to. Karma Pluss really has something that fetches my attention for controlling global warming from just a use of my mobile. Finally! I got my guilt free to use Mobile without worrying to pollute the environment, and amazing thing about Carbon Offset methods is that, we have lots of options provided in Karma Pluss app. Want to try it out soon. 
                      </p>

                      <h1 className="testimonials-one__title">Abdul Kalis</h1>
                    </div>
                  </div>
                </Swiper>
                <div className="testimonials-one__pagination-wrap">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
