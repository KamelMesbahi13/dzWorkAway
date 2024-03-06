import ImgOne from "../../../assets/Arrima.png";
import ImgTwo from "../../../assets/EntréeExpress.jpg";
import ImgThree from "../../../assets/NewBrunswick.png";
import ImgFour from "../../../assets/Flag_of_New_Zealand.svg.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import Header from "./PlatformDetailHeader";

const data = [
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
  {
    id: 2,
    headerOne: "New Zélande",
    headerTwo: "New Brunswick",
    ImgThree: ImgThree,
    ImgFour: ImgFour,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    button: "Apply",
  },
];

const PlatformDetails = () => {
  const { platformId } = useParams();
  const platform = data.find((platform) => platform.id == platformId);
  const { id, description, headerOne, headerTwo } = platform;

  return (
    <>
      <div>
        <Header headerOne={headerOne} headerTwo={headerTwo} />
        <div className="container">
          <div className="mt-20">
            <div>
              <div className="w-full md:w-3/4">
                <div>
                  <h1 className="relative mb-2 headingStyleLg">
                    {headerOne} <span className="text-secondColor"> / </span>{" "}
                    {headerTwo}
                  </h1>
                </div>
                <div>
                  <p>
                    Welcome to our form page! Please fill out the form below
                    with your details and any inquiries you may have. Your
                    information is secure and will only be used to assist you.
                    If you need help, just let us know. Thank you for reaching
                    out!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformDetails;
