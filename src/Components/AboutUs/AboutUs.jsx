import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import OurStory from "./OurStory/OurStory";

const AboutUs = () => {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <Introduction />
          <OurStory />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
