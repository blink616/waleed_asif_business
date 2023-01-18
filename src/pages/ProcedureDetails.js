import { BreadCrumbMenu } from "../components/BreadCrumb";
import { Procedure } from "../components/Procedure";

export const ProcedureDetails = () => {
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
  return (
    <>
      <BreadCrumbMenu name="Emmigration Procedure" />
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
    </>
  );
};
