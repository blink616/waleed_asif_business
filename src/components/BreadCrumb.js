import { Link } from "react-router-dom";

export const BreadCrumbMenu = (props) => {
  return (
    <section className="breadcrumbs">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrapper">
              <h1>{props.name}</h1>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>{props.name}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
