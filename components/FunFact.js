import React, { useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FunFact = () => {
  const [counter, setCounter] = useState({
    startCounter: false,
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="funfact-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h1 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 55005 : 0} />
                </VisibilitySensor>
              </h1>
              <p>Lifestyle Surveys</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h1 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 360 : 0} />
                </VisibilitySensor>
              </h1>
              <p>Experts Consult</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h1 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 740 : 0} />
                </VisibilitySensor>
              </h1>
              <p>Research Articles/ Books Studied</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h1 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 266 : 0} />
                </VisibilitySensor>
              </h1>
              <p>A.I. Methods used</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
