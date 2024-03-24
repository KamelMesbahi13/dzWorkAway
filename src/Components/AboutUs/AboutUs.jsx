import { lazy } from "react";
const Header = lazy(() => import("./Header/Header"));
const Introduction = lazy(() => import("./Introduction/Introduction"));
const Questions = lazy(() => import("./Question/Questions"));
const OurStory = lazy(() => import("./OurStory/OurStory"));
const WhyUs = lazy(() => import("./WhyUs/WhyUs"));
const Testimonials = lazy(() => import("./Testimonials/Testimonials"));
import Title from "../../GeneralFunctions/Title";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  Title(`Dz Work Away | ${t("aboutUs")}`);

  return (
    <>
      <div>
        <Header />
        <Introduction />
        <Questions />
        <div className="container">
          <OurStory />
          <WhyUs />
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
