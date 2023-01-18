import { BreadCrumbMenu } from "../components/BreadCrumb";
import ServicesCards from "../components/ServicesCards";

export const Services = () => {
  const servicesCardData = [
    {
      name: "Web Design",
      image: "img/post/post-2.jpg",
      detail: "Sed vel nibh ut ligula enim blandit finibus vita.",
    },
    {
      name: "Web Design",
      image: "img/post/post-2.jpg",
      detail: "Sed vel nibh ut ligula enim blandit finibus vita.",
    },
    {
      name: "Web Design",
      image: "img/post/post-2.jpg",
      detail: "Sed vel nibh ut ligula enim blandit finibus vita.",
    },
    {
      name: "Web Design",
      image: "img/post/post-2.jpg",
      detail: "Sed vel nibh ut ligula enim blandit finibus vita.",
    },
    {
      name: "Web Design",
      image: "img/post/post-2.jpg",
      detail: "Sed vel nibh ut ligula enim blandit finibus vita.",
    },
    {
      name: "Web Design",
      image: "img/post/post-2.jpg",
      detail: "Sed vel nibh ut ligula enim blandit finibus vita.",
    },
  ];
  return (
    <>
      <BreadCrumbMenu name="Services" />
      <section className="blog-news sec-mar">
        <div className="blog-wrapper" >
          <div className="row">
            <div className="col-md-8 col-lg-8 col-xl-8" id="services">
              <div className="row g-4" style={{
                textAlign: "center"
              }}>
              <h1>Services</h1>
                <ServicesCards data={servicesCardData} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>
    </>
  );
};
