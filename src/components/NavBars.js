import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const NavBarOne = () => {
  const [show, setShow] = useState(false);

  useEffect(()=>{

  },[show])
  return (
    <header
      className="position_top"
      style={{
        marginBottom: "40px",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-sm-3 col-md-3 col-lg-3 col-xl-2">
            <div className="logo">
              <img src="img/logo.png" alt="" />
            </div>
          </div>
          <div className="col col-sm-5 col-md-6 col-lg-6 col-xl-8 text-end">
            <nav className={"main-nav" + (show ? " slidenav" : "")}>
              <div className="mobile-menu-logo">
                <img src="img/logo.png" alt="" />
              </div>
              <ul>
                <li className="has-child active">
                  <Link to="/">Home</Link>
                </li>
                <li className="has-child">
                  <Link  to="/about">About us</Link>
                </li>
                <li className="has-child">
                  <Link to="/trade">Trades</Link>
                </li>

                <li className="has-child">
                  <Link to="/services">Services</Link>
                </li>
                <li className="has-child">
                  <Link to="/procedure">Emmigration</Link>
                </li>

                <li className="has-child">
                  <Link to="/job_oppurtunities">Jobs</Link>
                </li>
                <li className="has-child">
                  <Link to="/contact_us">Contact us</Link>
                </li>
              </ul>
            </nav>
            <div className="mobile-menu">
              <button
                className="navbar-toggler"
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? (
                  <CloseIcon style={{ color: "#000" }} fontSize="24" />
                ) : (
                  <MenuIcon style={{ color: "#000" }} fontSize="24px" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
