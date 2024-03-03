import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import OurStory from "./OurStory/OurStory";
import Questions from "./Question/Questions";
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
          <Questions />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
