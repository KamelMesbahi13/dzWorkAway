import ImgOne from "../../../assets/Globe.jpg";
import ImgTwo from "../../../assets/Canada.jpg";

const data = [
  {
    id: 1,
    header: "All The World",
    icon: ImgOne,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    button: "Apply",
  },
  {
    id: 2,
    header: "Canada",
    icon: ImgTwo,
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
          <div className="mb-8">
            <h1 className="relative w-full p-0 mb-4 sm:mb-12 lg:mb-4 lg:pl-20 md:w-1/2 md:headingStyleMd lg:headingStyleLg">
              Discover a Comprehensive Online Immigration Platform
            </h1>
            <p className="w-full md:w-3/4">
              Step into an online platform tailored to meet your immigration
              needs. Explore personalized solutions designed to guide you
              through every step of your journey, ensuring a seamless transition
              to your new destination.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 textCenter">
            {data.map(({ id, header, icon, description, button }) => {
              return (
                <div key={id}>
                  <div className="duration-500 hover:scale-[1.01] hover:shadow-2xl card rounded-md p-8 w-[70%] shadow-xl bg-white">
                    <div className="h-[40vh] pt-8 card-content">
                      <div>
                        <img className="w-24 h-16" src={icon} alt="" />
                      </div>
                      <div>
                        <div>
                          <h6 className="my-4">{header}</h6>
                        </div>
                        <div>
                          <p className="w-3/4 mb-4">{description}</p>
                        </div>
                      </div>
                      <div>
                        <button className="buttonCust">{button}</button>
                      </div>
                    </div>
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
