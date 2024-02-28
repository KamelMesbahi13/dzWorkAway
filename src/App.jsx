import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import ServicesDetails from "./Components/Home/Services/ServicesDetails";
import Footer from "./Ui/Footer/Footer";
import PlatformDetails from "./Components/Home/Platforms/PlatformDetails";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:servicesId" element={<ServicesDetails />} />
          <Route path="/platform/:platformId" element={<PlatformDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
