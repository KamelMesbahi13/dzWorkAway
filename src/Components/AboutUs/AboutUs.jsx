import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import OurStory from "./OurStory/OurStory";

const AboutUs = () => {
  return (
    <>
      <div>
        <Header />
        <Introduction />
        <div className="container">
          <OurStory />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
