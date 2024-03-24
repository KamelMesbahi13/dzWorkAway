import { lazy } from "react";
const Header = lazy(() => import("./Header/Header"));
const GetInTouch = lazy(() => import("./GetInTouch/GetInTouch"));
const Map = lazy(() => import("./Map/Map"));
import Title from "../../GeneralFunctions/Title";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  Title(`Dz Work Away | ${t("contactus")}`);

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
