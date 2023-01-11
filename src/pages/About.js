import React from "react";
import AboutUs from "../components/AboutUsComponents/AboutUs";
import CoreValues from "../components/CoreValues";
const About = () => {
  return (
    <>
      <AboutUs show={false} />;
      <CoreValues />
    </>
  );
};

export default About;
