export const Procedure = (props) => {
    {
      return props.data.map((content, index) => {
        return (
          <div key={index}className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="single-service">
              <span className="count">0{index + 1}</span>
              <div className="service-icon">
                <i>
                  <img src="img/icons/service-icon-1.png" alt="" />
                </i>
              </div>
              <div className="service-content">
                <h4>{content.heading}</h4>
                <p>{content.paragraph}</p>
              </div>
            </div>
          </div>
        );
      });
    }
  };