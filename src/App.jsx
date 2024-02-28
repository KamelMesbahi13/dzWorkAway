import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Home = lazy(() => import("./Components/Home/Home"));
const ServicesDetails = lazy(() =>
  import("./Components/Home/Services/ServicesDetails")
);
const PlatformDetails = lazy(() =>
  import("./Components/Home/Platforms/PlatformDetails")
);
const Footer = lazy(() => import("./Ui/Footer/Footer"));
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
            <Route path="/services/:servicesId" element={<ServicesDetails />} />
            <Route path="/platform/:platformId" element={<PlatformDetails />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </>
  );
};

export default App;
