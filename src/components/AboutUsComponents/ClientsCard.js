import React, { useEffect } from "react";

const DisplayNumber = (props) => {
  return (
    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
      <div className="single-count">
        <i>
          <img src={props.image} alt="" />
        </i>
        <div className="counter">
          <span className="odometer">{props.number}</span>
          <sup>+</sup>
        </div>
        <p>{props.name}</p>
      </div>
    </div>
  );
};
const ClientsCard = () => {
  return (
    <div className="features-count">
      <div className="row">
        <DisplayNumber
          name="Project Completed"
          number={150}
          image="img/icons/count-1.png"
        />
        <DisplayNumber
          name="Satisfied Clients"
          number={200}
          image="img/icons/count-2.png"
        />
        <DisplayNumber
          name="Win Awards"
          number={300}
          image="img/icons/count-3.png"
        />
        <DisplayNumber
          name="Expert Teams"
          number={400}
          image="img/icons/count-4.png"
        />
      </div>
    </div>
  );
};

export default ClientsCard;
