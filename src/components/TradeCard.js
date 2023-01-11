import React from "react";

const TradeCard = (props) => {
  return props.data.map((content, i) => {
    return (
      <div className="col-md-6 col-lg-4 col-xl-4 project-single-item uiux">
        <div className="single-portfolio">
          <div className="portfolio-data">
            <a href="#">
              <img src={content.image} alt="" />
            </a>
          </div>
          <div className="portfolio-inner">
            <span>{content.span}</span>
            <h4>{content.heading}</h4>
          </div>
        </div>
      </div>
    );
  });
};

export default TradeCard;
