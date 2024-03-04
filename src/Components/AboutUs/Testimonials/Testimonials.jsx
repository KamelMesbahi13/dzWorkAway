import Swiper from "./Swiper/Swiper";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="mt-12 md:mt-28">
      <div>
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="w-full md:w-3/4"
          >
            <div>
              <h1 className="relative mb-2 lg:headingStyleLg">
                What Our Clients Said About US
              </h1>
            </div>
            <div>
              <p>
                Thanks to <span className="italic font-bold">Dz Work Away</span>
                my immigration process was smooth and stress-free. Their
                personalized support and expertise made all the difference.
                Highly recommend!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Swiper />
    </div>
  );
};

export default Testimonials;
