// import style
import "./App.css";

// react router
import { Routes, Route } from "react-router-dom";

// import navbar & footer
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import pages
import Home from "./components/pages/Home";
import Project from "./components/pages/Projects";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PorscheRentalExperience from "./components/pages/projects/PorscheRentalExperience"
import TaxiAllan from "./components/pages/projects/TaxiAllan"
import RoadArt from "./components/pages/projects/RoadArt"
import WeeklyDesign from "./components/pages/projects/WeeklyDesign"

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/porscherentalexperience" element={<PorscheRentalExperience />} />
        <Route path="/taxiallan" element={<TaxiAllan />} />
        <Route path="/roadart" element={<RoadArt />} />
        <Route path="/weeklydesign" element={<WeeklyDesign />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
