import React from "react";
import { Container } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import AccordionItem from "./AccordionItem";
import faqBG from "../assets/images/shapes/faq-bg-1-1.png";

const FAQ = (props) => {
  return (
    <section className="faq-one" id="FAQs">
      <img src={faqBG} className="faq-one__bg-shape-1" alt="Karma Pluss Productivity Benefits and Healthy Lifestyle" />
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Frequently Asked Questions"
          titleText={`Want to Ask Something \n From Karma Pluss?`}
        />
        <div className="accrodion-grp faq-accrodion">
          <AccordionItem
            title="When is the Application Launching?"
            content="Planning to Launch Karma Pluss application by January, 2021"
            status={false}
          />
          <AccordionItem
            title="Karma Pluss is available on App store?"
            content="Yes, we are planning to launch application both on IOS, Android Platform. Also, we will release a web application version of the Karma Pluss app. It becomes easy for any user to access from any electronic devices."
            status={true}
          />
          <AccordionItem
            title="What all features does Karma Pluss contains?"
            content="As we have already explained in our launching website (above), we have added Carbon Footprint to know your Green House Gas Emissions and ways to avoid or reduce it. We have added, Self Development Tasks/ Challenges for users to help themselves, others and nature by improving in holistic way. We have added, recycle feature for users to recycle their waste or products that they don't want. We have added, Organic &amp; Healthy Lifesyle choices for people to know, track and buy items in most calculated, healthiest way possible. Lot more features are on the way."
            status={false}
          />
          <AccordionItem
            title="How Karma Points help in Karma Pluss App?"
            content="Karma points can be earned by finishing tasks, donating trees, donating for social causes, buying groceries (organic), sharing on social media, reducing Carbon Footprint. Gain 'Karma Points' for every activity you do over in our APP and 'EARN' lots of BENEFITS..."
            status={false}
          />
          <AccordionItem
            title="Karma Pluss App helps me in anyway?"
            content="'Karma Pluss' APP can HELP YOU with Many Other Benefits like, Staying Healthy, Eating Healthy, Living Healthy"
            status={false}
          />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
