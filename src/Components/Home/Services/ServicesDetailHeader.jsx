import Img from "../../../assets/PlatformDetailsBack.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ServicesDetailsHeader = ({ headerOne, headerTwo }) => {
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
      <div className="absolute text-white rtl:pr-8 ltr:pl-8 ltr:md:pl-20 rtl:md:pr-20 -translate-y-1/4 md:pl-24 top-1/2">
        <div>
          <h1>
            {headerOne} <span className="text-secondColor">/</span> {headerTwo}
          </h1>
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

ServicesDetailsHeader.propTypes = {
  headerOne: PropTypes.string.isRequired,
  headerTwo: PropTypes.string.isRequired,
};

export default ServicesDetailsHeader;
