import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel_One = (props) => {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <Slider {...sliderSettings}>
        {props.data.map((slide, i) => {
          return (
            <div className="swiper-slide" key={i}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="hero-content-wrapper">
                      <div className="hero-content-wrap">
                        <div className="hero-content-img">
                          <img src={slide.image_url} alt="" />
                        </div>
                        <div className="hero-content">
                          <h2 >Creative</h2>
                          <h1>
                            Best solution for your <span>{slide.span}</span>
                          </h1>
                          <p>
                            Curabitur sed facilisis erat. Vestibulum pharetra eros
                            eget fringilla an Duis a orci nunc. Suspendisse ac
                            convallis sapien, quis commodosani libero. Donec nec
                            dui luctus, pellentesque lacus sed, mollis leo.
                          </p>
                          <div className="slider-num">
                            <span>0{i + 1}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    );
  };