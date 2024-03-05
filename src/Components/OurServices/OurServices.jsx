import ChooseUs from "./ChooseUs/ChooseUs";
import Header from "./Header/Header";
import HighService from "./HighService/HighService";
import Introduction from "./Introduction/Introduction";

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
      </div>
    </>
  );
};

export default OurServices;
