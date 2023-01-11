import { Link } from "react-router-dom";
export const NavBarOne = () => {
  return (
    <header
      className="position_top"
      style={{
        marginBottom: "40px",
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col col-sm-3 col-md-3 col-lg-3 col-xl-2">
            <div className="logo">
              <img src="img/logo.png" alt="" />
            </div>
          </div>
          <div className="col col-sm-5 col-md-6 col-lg-6 col-xl-8 text-end">
            <nav className="main-nav">
              <div className="mobile-menu-logo">
                <img src="img/logo.png" alt="" />
              </div>
              <ul>
                <li className="has-child active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="#">About us</a>
                  <i className="bi bi-chevron-down"></i>
                  <ul className="sub-menu">
                  <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/trade">Trades</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-child">
                  <Link to="/services">Services</Link>
                </li>
                <li className="has-child">
                  <a href="#">Emmigration</a>
                  <i className="bi bi-chevron-down"></i>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/procedure">Procedure</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-child">
                  <Link to="/job_oppurtunities">Jobs</Link>                  
                </li>
                <li>
                  <Link to="/contact_us">Contact us</Link>
                </li>
              </ul>
              <div className="get-quate dn">
                <div className="cmn-btn">
                  <Link to="/contact_us">Get a quote</Link>
                </div>
              </div>
            </nav>
            <div className="mobile-menu">
              <a href="javascript:void(0)" className="cross-btn">
                <span className="cross-top"></span>
                <span className="cross-middle"></span>
                <span className="cross-bottom"></span>
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2 text-end">
            <div className="get-quate">
              <div className="cmn-btn">
                <a href="contact.html">Get a quote</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
