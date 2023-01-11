import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel_3 = (props) => {
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
    <div>
      <Slider {...sliderSettings}>
        {props.data.map((slide, i) => {
          return (
            <div className="swiper-slide">
              <div className="testimonial-content">
                <div className="quote">
                  <i className="fas fa-quote-left"></i>
                </div>
                <div className="client-info">
                  <div className="client-pic">
                    <img src={slide.image} alt="" />
                  </div>
                  <div className="client-details">
                    <h4>{slide.heading}</h4>
                    <span>{slide.span}</span>
                  </div>
                </div>
                <p>
                  <i className="fas fa-quote-left"></i> {slide.paragraph}
                  <i className="fas fa-quote-right"></i>
                </p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div class="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal" >
                <span class="swiper-pagination-current">{i+1}</span> /{" "}
                <span class="swiper-pagination-total">{props.data.length}</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
