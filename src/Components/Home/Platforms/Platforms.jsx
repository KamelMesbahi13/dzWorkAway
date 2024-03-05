import ImgOne from "../../../assets/Globe.png";
import ImgTwo from "../../../assets/Canada.jpg";
import Plane from "../../../assets/Plane.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    header: "All The World",
    Img: ImgOne,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    button: "Apply",
  },
  {
    id: 2,
    header: "Canada",
    Img: ImgTwo,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    button: "Apply",
  },
];

const Platforms = () => {
  return (
    <>
      <div className="mt-16 md:mt-28">
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
            className="mb-8"
          >
            <h1 className="relative w-full mb-4 sm:mb-12 lg:mb-4 md:w-1/2 md:headingStyleMd lg:headingStyleLg">
              Discover a Comprehensive Online Immigration Platform
            </h1>
            <p className="w-full md:w-3/4">
              Step into an online platform tailored to meet your immigration
              needs. Explore personalized solutions designed to guide you
              through every step of your journey, ensuring a seamless transition
              to your new destination.
            </p>
          </motion.div>

          <div className="relative hidden md:block">
            <LazyLoadImage
              className="absolute left-[60%] w-[40%] bottom-12 md:left-[70%] md:w-[25%]"
              src={Plane}
              alt="plane"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 textCenter">
            {data.map(({ id, header, Img, description, button }) => {
              return (
                <div key={id}>
                  <div className="duration-500 hover:scale-[1.01] hover:shadow-2xl card rounded-md p-8 w-full md:w-[60%] shadow-xl md:h-[60vh] bg-white">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="md:pt-8 card-content"
                    >
                      <div>
                        <LazyLoadImage
                          className="w-20 h-16"
                          src={Img}
                          alt={header}
                        />
                      </div>
                      <div className="w-full h-[2px] mt-4 bg-grey"></div>
                      <div>
                        <div>
                          <p className="my-4 text-lg font-bold md:text-xl">
                            {header}
                          </p>
                        </div>
                        <div>
                          <p className="md:w-[90%] mb-4">{description}</p>
                        </div>
                      </div>

                      <div>
                        <a href={`/Nos-Platform/${id}`}>
                          <button className="buttonCust">{button}</button>
                        </a>{" "}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Platforms;
