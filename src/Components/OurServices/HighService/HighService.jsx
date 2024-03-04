import Quality from "../../../assets/Quality.png";
import Speed from "../../../assets/Speed.png";
import Reliability from "../../../assets/Reliability.png";
import ImgOne from "../../../assets/ServicesOne.jpg";

const data = [
  {
    id: 1,
    Title: "Quality",
    Content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur earum laborum quisquam nihil. Itaque consectetur neque consequuntur et fuga dignissimos, eos rem! Provident veniam temporibus non beatae laudantium consectetur error!",
    Icon: Quality,
    Img: ImgOne,
  },

  {
    id: 2,
    Title: "Speed",
    Content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur earum laborum quisquam nihil. Itaque consectetur neque consequuntur et fuga dignissimos, eos rem! Provident veniam temporibus non beatae laudantium consectetur error!",
    Icon: Speed,
    Img: ImgOne,
  },

  {
    id: 3,
    Title: "Reliability",
    Content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur earum laborum quisquam nihil. Itaque consectetur neque consequuntur et fuga dignissimos, eos rem! Provident veniam temporibus non beatae laudantium consectetur error!",
    Icon: Reliability,
    Img: ImgOne,
  },
];

const HighService = () => {
  return (
    <>
      <div className="py-8 mt-16 shadow-lg md:mt-28 bg-grey">
        <div className="">
          <div>
            <div className="container w-full md:w-3/4">
              <h1 className="relative headingStyleLg">
                We offer our customers the highest level of services
              </h1>
            </div>
            <div>
              <div>
                <div>
                  {data.map(({ id, Title, Img, Content, Icon }) => {
                    return (
                      <div key={id}>
                        <div className="relative text-white">
                          <div className="duration-500 lg:opacity-0 lg:hover:opacity-100">
                            <img
                              className="w-full h-[20rem]"
                              src={Img}
                              alt={Title}
                            />
                          </div>
                          <div className="absolute pl-8 -translate-y-1/4 md:pl-24 top-1/2">
                            <div className="flex items-center justify-between">
                              <div>
                                <img src={Icon} alt={Title} />
                              </div>
                              <div className="w-1/2">
                                <div>
                                  <h6>{Title}</h6>
                                </div>
                                <div>
                                  <p>{Content}</p>
                                </div>
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
        </div>
      </div>
    </>
  );
};

export default HighService;
