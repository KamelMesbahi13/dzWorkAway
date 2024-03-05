import Img from "../../../assets/AboutUsImg.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <>
      <div className="py-8 md:pt-8 bg-grey">
        <div className="container">
          <div className="flex-col justify-between md:flex-row md:flex">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="w-full md:w-[45%]"
            >
              <h1 className="relative md:headingStyleMd lg:headingStyleLg">
                Welcome To{" "}
                <span className="italic font-bold">Dz Work Away</span>
              </h1>
              <p className="mt-4">
                Welcome to our immigration agency! We are passionate about
                helping individuals and families achieve their dreams of living
                and working in Canada and other countries.
              </p>
            </motion.div>
            <div className="block w-1/2 h-1 mx-auto my-8 bg-secondColor md:hidden"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="w-full md:w-[45%]"
            >
              <p>
                At <span className="italic font-bold">Dz Work Away</span>, we
                are dedicated to helping individuals and families achieve their
                dreams of living and working in Canada and beyond. With our
                expert team and personalized approach, we are here to guide you
                every step of the way. From consultations to applications, trust
                us to make your immigration journey smooth and successful.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-4 md:mt-8"
          >
            <div>
              <LazyLoadImage
                className="rounded-xl"
                src={Img}
                alt="About Us Image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
