import ChooseUs from "./ChooseUs/ChooseUs";
import Header from "./Header/Header";
import HighService from "./HighService/HighService";
import Introduction from "./Introduction/Introduction";
import Platforms from "./PlatformsAndServices/Platforms";
import Services from "./Services/Services";

const OurServices = () => {
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
