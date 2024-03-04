import Header from "./Header/Header";
import GetInTouch from "./GetInTouch/GetInTouch";
import Map from "./Map/Map";

const ContactUs = () => {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <GetInTouch />
          <Map />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
