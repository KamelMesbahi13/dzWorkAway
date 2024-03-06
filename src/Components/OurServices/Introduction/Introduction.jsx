import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="mt-12 md:mt-20"
      >
        <div>
          <div className="w-full md:w-3/4">
            <div>
              <h1 className="relative headingStyleLg">
                Welcome to DZ Work Away Immigration Services
              </h1>
            </div>
            <div>
              <p>
                At DZ Work Away, we are your trusted guide through immigration.
                Whether it is a work visa, family reunion, or residency, we are
                here to simplify the process with expertise and personalized
                support.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Introduction;
