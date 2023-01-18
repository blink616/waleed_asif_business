import React from "react";

const ServicesCards = (props) => {
  return (
    <>
      {props.data.map((content, i) => {
        return (
          <div className="col-12 col-lg-3 col-xl-3">
            <div className="signle-news">
              <div className="tag">
                <a href="#">{content.name}</a>
              </div>
              <div className="post-img">
                <img src={content.image} alt="" />
              </div>
              <div
                className="news-content"
                style={{
                  color: "white",
                }}
              >
                <h6>
                  <span>{content.detail}</span>
                </h6>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ServicesCards;
