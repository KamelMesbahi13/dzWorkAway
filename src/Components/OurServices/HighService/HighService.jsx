import Quality from "../../../assets/Quality.png";
import Speed from "../../../assets/Speed.png";
import Reliability from "../../../assets/Reliability.png";

const data = [
  {
    id: 1,
    Title: "Quality",
    Content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur earum laborum quisquam nihil. Itaque consectetur neque consequuntur et fuga dignissimos, eos rem! Provident veniam temporibus non beatae laudantium consectetur error!",
    Icon: Quality,
  },

  {
    id: 2,
    Title: "Speed",
    Content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur earum laborum quisquam nihil. Itaque consectetur neque consequuntur et fuga dignissimos, eos rem! Provident veniam temporibus non beatae laudantium consectetur error!",
    Icon: Speed,
  },

  {
    id: 3,
    Title: "Reliability",
    Content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur earum laborum quisquam nihil. Itaque consectetur neque consequuntur et fuga dignissimos, eos rem! Provident veniam temporibus non beatae laudantium consectetur error!",
    Icon: Reliability,
  },
];

const HighService = () => {
  return (
    <>
      <div className="py-8 mt-16 text-white md:py-16 md:mt-28 bestServicesBack">
        <div>
          <div>
            <div className="w-full px-20 mx-auto md:w-3/4">
              <h1 className="textCenter">
                We offer our customers the highest level of services
              </h1>
            </div>
            <div>
              <div>
                <div>
                  {data.map(({ id, Title, Content, Icon }) => {
                    return (
                      <div key={id}>
                        <div className="container my-3 md:my-6">
                          <div className="px-4 py-6 duration-500 md:border-b-2 md:border-opacity-0 md:py-12 md:border-b-grey md:hover:border-opacity-100">
                            <div className="flex flex-col items-center justify-between p-4 shadow-sm md:shadow shadow-grey md:p-0 border-grey md:border-0 md:flex-row">
                              <div>
                                <img src={Icon} alt={Title} />
                              </div>
                              <div className="w-full md:w-1/2">
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
