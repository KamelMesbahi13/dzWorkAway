import ImgOne from "../../../assets/Arrima.png";
import ImgTwo from "../../../assets/EntréeExpress.jpg";
import ImgThree from "../../../assets/NewBrunswick.png";
import ImgFour from "../../../assets/Flag_of_New_Zealand.svg.png";
import PlaneTwo from "../../../assets/PlaneTwo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const dataOne = [
  {
    id: 1,
    headerOne: "Arrima",
    headerTwo: "Entrée Express",
    ImgOne: ImgOne,
    ImgTwo: ImgTwo,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    button: "Apply",
  },
];

const dataTwo = [
  {
    id: 2,
    headerThree: "New Zélande ",
    headerFour: "New Brunswick",
    ImgThree: ImgThree,
    ImgFour: ImgFour,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    button: "Apply",
  },
];

const Platforms = () => {
  const dataOneRendering = dataOne.map(
    ({ id, headerOne, headerTwo, ImgOne, ImgTwo, description, button }) => {
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
              <div className="flex items-center justify-center">
                <div>
                  <LazyLoadImage
                    className="w-20 h-16"
                    src={ImgOne}
                    alt={headerOne}
                  />
                </div>
                <div>
                  <span className="mx-4 text-4xl font-bold text-secondColor">
                    /
                  </span>
                </div>
                <div>
                  <LazyLoadImage
                    className="w-20 h-16"
                    src={ImgTwo}
                    alt={headerTwo}
                  />
                </div>
              </div>
              <div className="w-full h-[2px] mt-4 bg-grey"></div>
              <div>
                <div className="flex items-center justify-center">
                  <p className="my-4 text-lg font-bold md:text-xl">
                    {headerOne}
                  </p>
                  <div>
                    <span className="mx-4 text-2xl font-bold text-secondColor">
                      -
                    </span>
                  </div>
                  <p className="my-4 text-lg font-bold md:text-xl">
                    {headerTwo}
                  </p>
                </div>
                <div>
                  <p className="md:w-[90%] mb-4">{description}</p>
                </div>
              </div>
              <div>
                <a href={`/Nos-Platform/${id}`}>
                  <button className="buttonCust">{button}</button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }
  );

  const dataTwoRendering = dataTwo.map(
    ({
      id,
      headerThree,
      headerFour,
      ImgThree,
      ImgFour,
      description,
      button,
    }) => {
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
              <div className="flex items-center justify-center">
                <div>
                  <LazyLoadImage
                    className="w-20 h-16"
                    src={ImgThree}
                    alt={headerFour}
                  />
                </div>
                <div>
                  <span className="mx-4 text-4xl font-bold text-secondColor">
                    /
                  </span>
                </div>
                <div>
                  <LazyLoadImage
                    className="w-20 h-16"
                    src={ImgFour}
                    alt={headerThree}
                  />
                </div>
              </div>
              <div className="w-full h-[2px] mt-4 bg-grey"></div>
              <div>
                <div className="flex items-center justify-center">
                  <p className="my-4 text-lg font-bold md:text-xl">
                    {headerThree}
                  </p>
                  <div>
                    <span className="mx-4 text-2xl font-bold text-secondColor">
                      -
                    </span>
                  </div>
                  <p className="my-4 text-lg font-bold md:text-xl">
                    {headerFour}
                  </p>
                </div>
                <div>
                  <p className="md:w-[90%] mb-4">{description}</p>
                </div>
              </div>
              <div>
                <a href={`/Nos-Platform/${id}`}>
                  <button className="buttonCust">{button}</button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }
  );

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
              className="absolute left-[60%] w-[40%] bottom-4 md:left-[50%] md:w-[25%]"
              src={PlaneTwo}
              alt="plane"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 textCenter">
            {dataOneRendering}
            {dataTwoRendering}
          </div>
        </div>
      </div>
    </>
  );
};

export default Platforms;
