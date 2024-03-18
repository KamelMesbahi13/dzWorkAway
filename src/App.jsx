import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Home = lazy(() => import("./Components/Home/Home"));
const AboutUs = lazy(() => import("./Components/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./Components/ContactUs/ContactUs"));
const OurServices = lazy(() => import("./Components/OurServices/OurServices"));
const ServicesDetails = lazy(() =>
  import("./Components/Home/Services/ServicesDetails")
);
const PlatformDetails = lazy(() =>
  import("./Components/Home/Platforms/PlatformsDetails")
);
const Privacy = lazy(() => import("./Components/Privacy/Privacy"));
import Loader from "./Ui/Loader/Loader";
import Up from "./Ui/Up/Up";
const Footer = lazy(() => import("./Ui/Footer/Footer"));

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="mt-20 textCenter">
            <Loader />
          </div>
        }
      >
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/À Propos-de-Nous" element={<AboutUs />} />
            <Route path="/Contactez-Nous" element={<ContactUs />} />
            <Route path="/Nos-Services" element={<OurServices />} />
            <Route
              path="/Nos-Services/:servicesId"
              element={<ServicesDetails />}
            />
            <Route
              path="/Nos-Platforms/:platformId"
              element={<PlatformDetails />}
            />
            <Route path="/Confidentialité" element={<Privacy />} />
          </Routes>
          <Up />
          <Footer />
        </div>
      </Suspense>
    </>
  );
};

export default App;
