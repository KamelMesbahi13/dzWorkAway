import Img from "../../../assets/ContactUsBack.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      className="relative"
    >
      <div>
        <LazyLoadImage
          src={Img}
          className="w-full h-[20rem] md:h-[40rem]"
          alt="About US Background"
        />
      </div>
      <div className="absolute pl-8 text-white -translate-y-1/4 md:pl-24 top-1/2">
        <div>
          <h1>Contact Us</h1>
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
    </motion.div>
  );
};

export default Header;
