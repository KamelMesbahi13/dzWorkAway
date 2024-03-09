import { lazy } from "react";
const Header = lazy(() => import("./Header/Header"));
const Introduction = lazy(() => import("./Introduction/Introduction"));
const HighService = lazy(() => import("./HighService/HighService"));
const ChooseUs = lazy(() => import("./ChooseUs/ChooseUs"));
const Platforms = lazy(() => import("./PlatformsAndServices/Platforms"));
const Services = lazy(() => import("./Services/Services"));
import Title from "../../GeneralFunctions/Title";

const OurServices = () => {
  Title("Dz Work Away | Nos-Services");

  return (
    <>
      <div>
        <Header />
        <div className="container">
          <Introduction />
        </div>
        <div>
          <HighService />
        </div>
        <div className="container">
          <ChooseUs />
        </div>
        <Services />
        <div className="container">
          <Platforms />
        </div>
      </div>
    </>
  );
};

export default OurServices;
