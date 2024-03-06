import ImgOne from "../../../assets/Arrima.png";
import ImgTwo from "../../../assets/EntréeExpress.jpg";
import ImgThree from "../../../assets/NewBrunswick.png";
import ImgFour from "../../../assets/Flag_of_New_Zealand.svg.png";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { motion } from "framer-motion";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import Header from "./PlatformDetailHeader";
import PlatformsForm from "./PlatformsForm";

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
    ImgOne: ImgThree,
    ImgTwo: ImgFour,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    button: "Apply",
  },
];

const PlatformDetails = () => {
  const { platformId } = useParams();
  const platform = data.find((platform) => platform.id == platformId);
  const { headerOne, headerTwo } = platform;

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
            <div>
              <div className="mt-12">
                <div className="relative pl-4 before:absolute lg:pl-8 before:md:block before:h-full before:w-2 before:left-0 before:bg-hoverColor before:top-1/2 before:-translate-y-1/2">
                  <p>
                    ARRIMA and Entrée express are both systems used in the
                    province of Quebec, Canada, for managing immigration
                    applications. ARRIMA stands for Arrima System, which is
                    Quebec s Expression of Interest (EOI) system for managing
                    applications to the Quebec Skilled Worker Program (QSWP). It
                    allows candidates to submit an expression of interest online
                    and enter a pool of candidates. The Quebec government then
                    selects candidates from this pool based on their skills,
                    qualifications, and the labor market needs of the province.
                    Entrée express, on the other hand, is not specific to Quebec
                    but rather a federal system used across Canada. It manages
                    applications for the Federal Skilled Worker Program, Federal
                    Skilled Trades Program, and Canadian Experience Class.
                    Applicants create an online profile, enter a pool of
                    candidates, and are then ranked based on various factors
                    such as age, education, work experience, and language
                    proficiency. The Canadian government regularly invites
                    top-ranked candidates to apply for permanent residence. In
                    summary, ARRIMA is specific to Quebec s immigration system,
                    while Entrée express is part of Canada s federal immigration
                    system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <PlatformsForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformDetails;
