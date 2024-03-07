import Data from "../../../data.json";
import ImgOne from "../../../assets/Team.png";
import ImgTwo from "../../../assets/Checklist.png";
import ImgThree from "../../../assets/Support.png";
import ImgFour from "../../../assets/QualityService.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const HeadingsAndParagraphsOne =
  Data.OurServices_ChooseUs__Heading_Paragraph_One.map(
    ({ id, header, description }) => {
      return (
        <div key={id}>
          <div>
            {" "}
            <div>
              <h1 className="relative headingStyleLg">{header}</h1>
            </div>
            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      );
    }
  );

const HeadingsAndParagraphsTwo =
  Data.OurServices_ChooseUs__Heading_Paragraph_Two.map(
    ({ id, header, description }) => {
      return (
        <div key={id}>
          <div>
            <div>
              <h6>{header}</h6>
            </div>
            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      );
    }
  );

const data = [
  {
    id: 1,
    Icon: ImgOne,
    Heading: "Team",
  },

  {
    id: 2,
    Icon: ImgTwo,
    Heading: "CheckList",
  },

  {
    id: 3,
    Icon: ImgThree,
    Heading: "Support",
  },

  {
    id: 4,
    Icon: ImgFour,
    Heading: "Quality",
  },
];

const ChooseUs = () => {
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
        className="mt-12 md:mt-20"
      >
        <div>
          <div className="w-full md:w-2/4">{HeadingsAndParagraphsOne}</div>
          <div className="flex flex-col justify-between py-4 mt-12 duration-500 shadow-lg md:py-0 hover:shadow-xl bg-grey md:mt-16 md:flex-row">
            <div className="w-full pl-4 md:w-1/2 md:mt-20">
              {HeadingsAndParagraphsTwo}
            </div>

            <div className="grid grid-cols-1 md:p-4 md:gap-y-8 md:grid-cols-2 md:gap-x-52 textCenter">
              {data.map(({ id, Icon, Heading }) => {
                return (
                  <div key={id}>
                    <div className="mt-12 md:mt-0">
                      <div>
                        <div>
                          <LazyLoadImage
                            className="w-12 h-12"
                            src={Icon}
                            alt={Heading}
                          />
                        </div>
                        <div>
                          <h6 className="text-base md:text-lg">{Heading}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ChooseUs;
