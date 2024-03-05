import ImgOne from "../../../assets/Team.png";
import ImgTwo from "../../../assets/Checklist.png";
import ImgThree from "../../../assets/Support.png";
import ImgFour from "../../../assets/QualityService.png";

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
      <div className="mt-12 md:mt-20">
        <div>
          <div className="w-full md:w-2/4">
            <div>
              <h1 className="relative headingStyleLg">Why Choose Us</h1>
            </div>
            <div>
              <p>
                Choose us for unparalleled quality and value. Our commitment to
                excellence and dedicated team ensure top-notch service and
                innovative solutions. Trust us as your reliable partner for
                success.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between py-4 mt-12 duration-500 shadow-lg md:py-0 hover:shadow-xl bg-grey md:mt-16 md:flex-row">
            <div className="w-full pl-4 md:w-1/2 md:mt-20">
              <div>
                <h6>We offer a great variety of features and services</h6>
              </div>
              <div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                  itaque, fugit voluptatum earum dolor iure animi officia vero
                  explicabo rem?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:p-4 md:gap-y-8 md:grid-cols-2 md:gap-x-52 textCenter">
              {data.map(({ id, Icon, Heading }) => {
                return (
                  <div key={id}>
                    <div className="mt-12 md:mt-0">
                      <div>
                        <div>
                          <img className="w-12 h-12" src={Icon} alt="" />
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
      </div>
    </>
  );
};

export default ChooseUs;
