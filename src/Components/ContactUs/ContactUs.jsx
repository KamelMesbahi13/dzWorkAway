import { lazy } from "react";
const Header = lazy(() => import("./Header/Header"));
const GetInTouch = lazy(() => import("./GetInTouch/GetInTouch"));
const Map = lazy(() => import("./Map/Map"));

const ContactUs = () => {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <GetInTouch />
          <Map />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
