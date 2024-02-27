import ImgOne from "../../../assets/ServicesOne.png";
import ImgTwo from "../../../assets/ServicesTwo.png";

const data = [
  {
    id: 1,
    header: "System One",
    icon: ImgOne,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    button: "Apply",
  },
  {
    id: 2,
    header: "System One",
    icon: ImgTwo,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    button: "Apply",
  },
];

const Services = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <h1>Explore Our Immigration Services</h1>
            <p>
              Embark on your immigration journey with confidence. Our platform
              offers a range of personalized services to guide you through every
              step of the process, ensuring a smooth and successful transition
              to your new destination.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4 place-content-center">
            {data.map(({ id, header, icon, description, button }) => {
              return (
                <div key={id}>
                  <div className="w-full md:w-3/4">
                    <div>
                      <img src={icon} alt="" />
                    </div>
                    <div>
                      <div>
                        <h1>{header}</h1>
                      </div>
                      <div>
                        <p>{description}</p>
                      </div>
                    </div>
                    <div>
                      <button className="buttonCust">{button}</button>
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

export default Services;
