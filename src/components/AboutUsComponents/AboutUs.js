import React from "react";
import ClientsCard from "./ClientsCard";

const AboutUs = (props) => {
  return (
    <section className="about-area sec-mar">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6">
            <div className="about-left">
              <div className="title black">
                <span style={{
                  color: "black"
                }}>About us</span>
                <h2 className="mb-15">Direction with our company.</h2>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <div className="our-mission">
                <div className="msn-icon">
                  <i>
                    <img src="/img/icons/mission-icon.png" alt="" />
                  </i>
                </div>
                <div className="msn-content">
                  <h5>Our Mission</h5>
                  <p>Mission statement</p>
                </div>
              </div>
              <div className="cmn-btn">
                <a href="">About more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="about-right">
              <div className="group-images">
                <img src="/img/home-3/about/about-2.jpg" alt="" />
                <div className="about-top">
                  <img src="/img/home-3/about/about-3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {props.show && <ClientsCard />}
      </div>
    </section>
  );
};

export default AboutUs;
