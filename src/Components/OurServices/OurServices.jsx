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
        <HighService />
      </div>
    </>
  );
};

export default OurServices;
