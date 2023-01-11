
export const CommunityCards = (props) => {
    {
      return props.data.map((content, index) => {
        return (
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3" key={index}>
            <div className="single-client">
              <img src={content.image} alt="" />
              <div className="client-hover">
                <span>www.example.com</span>
              </div>
            </div>
          </div>
        );
      });
    }
  };