import React from "react";
import {ShowProgress} from "./ShowProgress";

const CoreValues = () => {
  return (
    <section className="why-choose-us sec-mar">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="title">
              <span>Why Choose Finibus</span>
              <h2 className="mb-15">
                success is just around the next online corner
              </h2>
            </div>
            <div className="video-demo">
              <img src="img/play-video.jpg" alt="" />
             
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="valuable-skills">
              <img src="img/valuable-skill.jpg" alt="" />
              <div className="signle-bar">
                <h6>Web Design</h6>
                <ShowProgress percentage={90} bar={true} />
              </div>
              <div className="signle-bar">
                <h6>App Development</h6>
                <ShowProgress percentage={90} bar={true} />
              </div>
              <div className="signle-bar">
                <h6>Backend</h6>
                <ShowProgress percentage={90} bar={true} />
              </div>
              <div className="signle-bar">
                <h6>Video Animation</h6>
                <ShowProgress percentage={90} bar={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
