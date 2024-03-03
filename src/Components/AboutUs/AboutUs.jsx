import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import OurMission from "./OurMission/OurMission";
import OurStory from "./OurStory/OurStory";
import WhyUs from "./WhyUs/WhyUs";

const AboutUs = () => {
  return (
    <>
      <div>
        <Header />
        <Introduction />
        <div className="container">
          <OurStory />
          <WhyUs />
        </div>
        <OurMission />
      </div>
    </>
  );
};

export default AboutUs;
