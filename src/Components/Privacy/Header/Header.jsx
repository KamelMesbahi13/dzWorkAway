import Data from "../../../data.json";
import Img from "../../../assets/PrivacyBack.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  const modifiedDataTitle = Data.Privacy_Header.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        header: data.header_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        header: data.header_fr,
      };
    }
    return data;
  });

  const Title = modifiedDataTitle.map(({ id, header }) => {
    return (
      <div key={id}>
        <h1>{header}</h1>
      </div>
    );
  });

  return (
    <motion.div
      name="services"
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
        <div>{Title}</div>

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
