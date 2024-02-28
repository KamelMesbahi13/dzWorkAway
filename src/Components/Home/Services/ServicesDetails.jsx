import ImgOne from "../../../assets/Arrima.png";
import ImgTwo from "../../../assets/EntréeExpress.jpg";
import ImgThree from "../../../assets/NewBrunswick.png";
import ImgFour from "../../../assets/Flag_of_New_Zealand.svg.png";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";

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
    headerThree: "New Zélande",
    headerFour: "New Brunswick",
    ImgThree: ImgThree,
    ImgFour: ImgFour,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    button: "Apply",
  },
];

const ServicesDetails = () => {
  const { servicesId } = useParams();
  const services = data.find((service) => service.id == servicesId);
  const { id, description } = services;

  return (
    <>
      <div>
        <div>
          <div>
            <h1>{id}</h1>
            <h1>{description}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetails;
