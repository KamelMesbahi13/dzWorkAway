import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AboutUs from "./Components/AboutUs/AboutUs";

const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Home = lazy(() => import("./Components/Home/Home"));
const ServicesDetails = lazy(() =>
  import("./Components/Home/Services/ServicesDetails")
);
const PlatformDetails = lazy(() =>
  import("./Components/Home/Platforms/PlatformDetails")
);
// const Footer = lazy(() => import("./Ui/Footer/Footer"));
const Loader = lazy(() => import("./Ui/Loader/Loader"));

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="mt-20 text-center">
            <Loader />
          </div>
        }
      >
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Nos-Services/:servicesId"
              element={<ServicesDetails />}
            />
            <Route
              path="/Nos-Platform/:platformId"
              element={<PlatformDetails />}
            />
            <Route path="/À Propos-de-Nous" element={<AboutUs />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Suspense>
    </>
  );
};

export default App;
