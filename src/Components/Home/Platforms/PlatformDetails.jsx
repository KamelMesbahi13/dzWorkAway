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
        <div className="container">
          <div>
            <div>
              <div>
                <div>
                  <h1></h1>
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
