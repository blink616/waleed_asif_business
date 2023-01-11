import { Carousel_1 } from "./homeComponents/Carousel_1";
import { Carousel_2 } from "../../components/JobCards";
import { Procedure } from "../../components/Procedure";
import { CommunityCards } from "../../components/CommunityCards";
import { Carousel_3 } from "./homeComponents/Carousel_3";
import { Latest_News } from "../../components/Latest_News";
import AboutUs from "../../components/AboutUsComponents/AboutUs";
export const HomeOne = () => {
  const data_carousel_1 = [
    {
      image_url: "img/hero-slider-1.jpg",
      span: "Business.",
    },
    {
      image_url: "img/hero-slider-2.png",
      span: "Finances.",
    },
    { image_url: "img/hero-slider-3.png", span: "Markets." },
  ];

  

  const data_card_1 = [
    {
      heading: "web design",
      paragraph:
        "Fusce ornare mauris nisi, id fringilla turpis vehicula lectus, ultricies nec sem",
    },
    {
      heading: "web design",
      paragraph:
        "Fusce ornare mauris nisi, id fringilla turpis vehicula lectus, ultricies nec sem",
    },
    {
      heading: "web design",
      paragraph:
        "Fusce ornare mauris nisi, id fringilla turpis vehicula lectus, ultricies nec sem",
    },
    {
      heading: "web design",
      paragraph:
        "Fusce ornare mauris nisi, id fringilla turpis vehicula lectus, ultricies nec sem",
    },
    {
      heading: "web design",
      paragraph:
        "Fusce ornare mauris nisi, id fringilla turpis vehicula lectus, ultricies nec sem",
    },
    {
      heading: "web design",
      paragraph:
        "Fusce ornare mauris nisi, id fringilla turpis vehicula lectus, ultricies nec sem",
    },
  ];

  const community_data = [
    {
      image: "img/partner-icons/partner-1.png",
    },
    {
      image: "img/partner-icons/partner-1.png",
    },
    {
      image: "img/partner-icons/partner-1.png",
    },
    {
      image: "img/partner-icons/partner-1.png",
    },
    {
      image: "img/partner-icons/partner-1.png",
    },
    {
      image: "img/partner-icons/partner-1.png",
    },
    {
      image: "img/partner-icons/partner-1.png",
    },
    {
      image: "img/partner-icons/partner-1.png",
    },
    {
      image: "img/partner-icons/partner-1.png",
    },
    {
      image: "img/partner-icons/partner-1.png",
    },
  ];

  const data_carousel_3 = [
    {
      image: "img/client.jpg",
      heading: "Savannah Nguyen",
      span: "Executive CEO",
      paragraph:
        "Curabitur magna nisi,  egestas quis est in, finibus pulvinar ipsum. Nunc sit amet odiointerdum, maximus dolor quis, ullamcorper lectus. Mauris vitaefaucibus libero. Curabitur eu convallis purus. Nunc accumsandiam in arcu pellentesque sagittis. Curabitur dolor odio,aliquam vitae noday backowner condimentum this fire ongon then only on",
    },
    {
      image: "img/client.jpg",
      heading: "Savannah Nguyen",
      span: "Executive CEO",
      paragraph:
        "Curabitur magna nisi,  egestas quis est in, finibus pulvinar ipsum. Nunc sit amet odiointerdum, maximus dolor quis, ullamcorper lectus. Mauris vitaefaucibus libero. Curabitur eu convallis purus. Nunc accumsandiam in arcu pellentesque sagittis. Curabitur dolor odio,aliquam vitae noday backowner condimentum this fire ongon then only on",
    },
    {
      image: "img/client.jpg",
      heading: "Savannah Nguyen",
      span: "Executive CEO",
      paragraph:
        "Curabitur magna nisi,  egestas quis est in, finibus pulvinar ipsum. Nunc sit amet odiointerdum, maximus dolor quis, ullamcorper lectus. Mauris vitaefaucibus libero. Curabitur eu convallis purus. Nunc accumsandiam in arcu pellentesque sagittis. Curabitur dolor odio,aliquam vitae noday backowner condimentum this fire ongon then only on",
    },
  ];
  return (
    <>
      <section className="hero-area">
        <div className="swiper hero-slider">
          <div>
            <Carousel_1 data={data_carousel_1} />
          </div>
        </div>
      </section>

      <section className="service-area sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-4">
              <div className="title">
                <span>Why Us</span>
                <h2>we work performed for client happy.</h2>
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-8">
              <div className="row g-4">
                <Procedure data={data_card_1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutUs show={true}/>

      <section className="our-partner">
        <div className="container-fluid g-0 overflow-hidden">
          <div className="row align-items-center g-0">
            <div className="col-12 col-xl-12">
              <div className="our-clients">
                <div className="row align-items-center">
                  <div className="col-12 col-xl-6">
                    <div className="title">
                      <span>Our partner</span>
                      <h2>Join our Finibus community.</h2>
                    </div>
                  </div>
                  <CommunityCards data={community_data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="portfolio-area sec-mar-top">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 col-xl-5">
              <div className="title black">
                <span>Case Study</span>
                <h2>A diversified resilient portfolio.</h2>
              </div>
            </div>
          </div>
        </div>
        
      </div> */}

      {/* 

      <section className="testimonial-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="swiper testimonial-slider">
                <div>
                  <Carousel_3 data={data_carousel_3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Latest_News /> */}
    </>
  );
};
