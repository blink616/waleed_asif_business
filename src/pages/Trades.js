import { BreadCrumbMenu } from "../components/BreadCrumb";
import TradeCard from "../components/TradeCard";
export const Trades = () => {
  const trade_data = [
    {
      image: "img/portfolio/portfolio-1.jpg",
      span: "UI KiT",
      heading: "E-Shop Ecommerce",
    },
    {
      image: "img/portfolio/portfolio-2.jpg",
      span: "UI KiT",
      heading: "E-Shop Ecommerce",
    },
    {
      image: "img/portfolio/portfolio-3.jpg",
      span: "UI KiT",
      heading: "E-Shop Ecommerce",
    },
    {
      image: "img/portfolio/portfolio-4.jpg",
      span: "UI KiT",
      heading: "E-Shop Ecommerce",
    },
    {
      image: "img/portfolio/portfolio-5.jpg",
      span: "UI KiT",
      heading: "E-Shop Ecommerce",
    },
    {
      image: "img/portfolio/portfolio-6.jpg",
      span: "UI KiT",
      heading: "E-Shop Ecommerce",
    },
    {
      image: "img/portfolio/portfolio-7.jpg",
      span: "UI KiT",
      heading: "E-Shop Ecommerce",
    },
  ];
  return (
    <>
      <BreadCrumbMenu name="Trades" />
      <section className="project-area sec-mar">
        <div className="container">
          <div className="row g-4 project-items-wrapper">
            <TradeCard data={trade_data} />
          </div>
        </div>
      </section>
    </>
  );
};
