import React from "react";
import { JobCards } from "../components/JobCards";
const JobOppurtunities = () => {
  const data_carousel_2 = [
    {
      image_url: "img/portfolio/portfolio-1.jpg",
      span: "Template",
      heading: "Creative Agency",
    },
    {
      image_url: "img/portfolio/portfolio-2.jpg",
      span: "UI Kit",
      heading: "E-Shop Commerce",
    },
    {
      image_url: "img/portfolio/portfolio-3.jpg",
      span: "Software",
      heading: "Desktop Mockup",
    },
    {
      image_url: "img/portfolio/portfolio-4.jpg",
      span: "Graphic",
      heading: "Art Deco Cocktails",
    },
    {
      image_url: "img/portfolio/portfolio-4.jpg",
      span: "Graphic",
      heading: "Art ahsdkh Cocktails",
    },
    {
      image_url: "img/portfolio/portfolio-4.jpg",
      span: "Graphic",
      heading: "Art Deco Cocktails",
    },
  ];
  return (
    <div className="swiper portfolio-slider">
      <div>
        <JobCards data={data_carousel_2} />
      </div>
    </div>
  );
};

export default JobOppurtunities;
