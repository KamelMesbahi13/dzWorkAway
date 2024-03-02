import ImgOne from "../../../assets/Experience.png";
import ImgTwo from "../../../assets/Priority.png";
import ImgThree from "../../../assets/Advice.png";
import ImgFour from "../../../assets/Support.png";

const data = [
  {
    id: 1,
    Img: ImgOne,
    Heading: "Experience",
    Description:
      "With extensive experience guiding countless clients, we offer seasoned expertise to navigate your journey seamlessly. Trust in our track record and let us streamline your path to success.",
  },

  {
    id: 2,
    Img: ImgTwo,
    Heading: "Priority",
    Description:
      "Your needs come first. We prioritize understanding your goals, challenges, and aspirations to deliver tailored solutions and exceptional service, ensuring your satisfaction and success.",
  },

  {
    id: 3,
    Img: ImgThree,
    Heading: "Advice",
    Description:
      "Trust our guidance. We offer tailored advice to help you navigate life's complexities with confidence and clarity.",
  },

  {
    id: 4,
    Img: ImgFour,
    Heading: "Support",
    Description:
      "Our support is unwavering. We're here to guide you through challenges and celebrate your successes, offering personalized assistance every step of the way.",
  },
];

const WhyUs = () => {
  return (
    <>
      <div className="mt-16">
        <div className="flex justify-between">
          <div className="w-1/2">
            <div>
              <h1 className="relative md:headingStyleMd lg:headingStyleLg">
                Why We Are The Best
              </h1>
            </div>
            <div>
              <p>
                At DZ Work Away, we understand that the decision to immigrate is
                one of the most significant steps you will ever take. That is
                why we are committed to making your journey as smooth and
                successful as possible. Here is why you should choose us:
              </p>
            </div>
          </div>
          <div>
            <div className="grid w-1/2 grid-cols-4 md:grid-cols-2">
              {data.map(({ id, Img, Heading, Description }) => {
                return (
                  <div key={id}>
                    <div>
                      <div>
                        <div>
                          <img src={Img} alt="" />
                        </div>
                        <div>
                          <div>
                            <h6>{Heading}</h6>
                          </div>
                          <div>
                            <p>{Description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
