import { lazy } from "react";
const Header = lazy(() => import("./Header/Header"));
const AboutUs = lazy(() => import("./AboutUs/AboutUs"));
const Platforms = lazy(() => import("./Platforms/Platforms"));
const Services = lazy(() => import("./Services/Services"));
const ContactSection = lazy(() =>
  import("../../Ui/ContactSection/ContactSection")
);
import Title from "../../GeneralFunctions/Title";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  Title(`Dz Work Away | ${t("home")}`);

  return (
    <>
      <div>
        <Header />
        <AboutUs />
        <div className="container">
          <Platforms />
          <Services />
          <ContactSection />
        </div>
      </div>
    </>
  );
};

export default Home;
