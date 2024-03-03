import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import OurStory from "./OurStory/OurStory";
import Questions from "./Question/Questions";
import Testimonials from "./Testimonials/Testimonials";
import WhyUs from "./WhyUs/WhyUs";

const AboutUs = () => {
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
