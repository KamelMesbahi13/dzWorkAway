import Swiper from "./Swiper/Swiper";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <div>
          <Swiper />
        </div>
      </motion.div>
    </>
  );
};

export default Header;
