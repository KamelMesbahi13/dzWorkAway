import ImgOne from "../../../assets/OurMissionImgOne.jpg";
import ImgTwo from "../../../assets/OurMissionImgTwo.jpg";
import ImgThree from "../../../assets/OurMissionImgThree.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";

const OurMission = () => {
  return (
    <>
      <div className="w-full mt-12">
        <div className="container">
          <div className="w-1/2">
            <img src={ImgOne} alt="" />
            <div className="flex">
              <img src={ImgTwo} alt="" />
              <img src={ImgThree} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
