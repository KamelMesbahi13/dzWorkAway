import Logo from "../../assets/Logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = () => {
  return (
    <>
      <div className="relative w-full mt-8 h-96 footerBack">
        <div className="container">
          <div className="absolute -translate-y-1/2 top-1/2">
            <div>
              <div className="w-1/2 bg-white">
                <div>
                  <LazyLoadImage className="w-28" src={Logo} alt="Logo" />
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio quae aut et. Impedit, repudiandae voluptatibus? Nisi
                    ut quam dolore voluptatum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
