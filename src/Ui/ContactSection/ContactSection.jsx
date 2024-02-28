import Img from "../../assets/ContactSection.png";
import Check from "../../assets/check.png";

const paragraphs = [
  {
    id: 1,
    paragraph: "Entering & Leaving From Country",
  },
  {
    id: 2,
    paragraph: "Entering & Leaving From Country",
  },
  {
    id: 3,
    paragraph: "Entering & Leaving From Country",
  },
];

const ContactSection = () => {
  return (
    <>
      <div className="mt-20 border-2 shadow-xl md:mt-40 border-grey">
        <div>
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="p-4">
              <h1>Fly Your Dream Destination</h1>
              <p className="mt-2">
                Idea of denouncing pleasure & praising pain was born.
              </p>
              <div>
                <div className="mt-4 md:mt-6">
                  {paragraphs.map(({ id, paragraph }) => {
                    return (
                      <div key={id}>
                        <div className="flex items-center my-4">
                          <div>
                            <img
                              className="!w-6 h-6 mr-2"
                              src={Check}
                              alt="Check"
                            />
                          </div>
                          <div>
                            <p>{paragraph}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="mt-4 md:mt-6">
                    <button className="buttonCust">Contact US</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-0 textRight md:mt-8">
              <img className="w-full lg:w-[80%]" src={Img} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
