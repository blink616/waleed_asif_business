import { NavBarOne } from "./components/NavBars";
import { Route, Routes } from "react-router-dom";
import { HomeOne } from "./pages/Home/Home";
import { FooterOne } from "./components/Footer";
import About from "./pages/About";
import { Services } from "./pages/Services";
import { Trades } from "./pages/Trades";
import { ProcedureDetails } from "./pages/ProcedureDetails";
import JobOppurtunities from "./pages/JobOppurtunities";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <NavBarOne />
      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trade" element={<Trades />} />
        <Route path="/procedure" element={<ProcedureDetails />} />
        <Route path="/job_oppurtunities" element={<JobOppurtunities />} />
        <Route path="/contact_us" element={<Contact />} />
      </Routes>
      <FooterOne />
    </>
  );
}

export default App;
