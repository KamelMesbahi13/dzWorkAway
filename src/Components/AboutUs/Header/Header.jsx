import Img from "../../../assets/AboutUsBack.jpg";

const Header = () => {
  return (
    <div className="relative">
      <div>
        <img
          src={Img}
          className="w-full md:h-[35rem]"
          alt="About US Background"
        />
      </div>
      <div className="absolute pl-8 text-white -translate-y-1/4 md:pl-24 top-1/2">
        <div>
          <h1>About Us</h1>
        </div>
        <div className="flex mt-1 md:mt-2">
          <div className="w-8 h-1 md:w-12 bg-secondColor"></div>
          <div className="flex ml-1">
            <div className="w-[3px] h1 bg-secondColor"></div>
            <div className="w-[3px] mx-1 h1 bg-secondColor"></div>
            <div className="w-[3px] h1 bg-secondColor"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
