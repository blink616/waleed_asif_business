import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const JobCards = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
      }}
    >
      <Slider {...settings}>
        {props.data.map((slide, i) => {
          return (
            <>
              <div class="swiper-slide">
                <div class="single-portfolio">
                  <div class="portfolio-data">
                    <a href="#">
                      <img src={slide.image_url} alt="" />
                    </a>
                  </div>
                  <div class="portfolio-inner">
                    <span>Template</span>
                    <h4>Creative Agency</h4>
                    <div class="portfolio-hover">
                      <div>
                        <span>Template</span>
                        <h4>Creative Agency</h4>
                        <span>Template</span>
                        <h4>Creative Agency</h4>
                        <span>Template</span>
                        <h4>Creative Agency</h4>
                      </div>
                      <a class="case-btn">Case Study</a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};
