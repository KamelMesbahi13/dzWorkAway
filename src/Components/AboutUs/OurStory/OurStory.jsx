import ImgOne from "../../../assets/OurStoryImg.jpg";
import ImgTwo from "../../../assets/OurStoryShape.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <LazyLoadImage src={ImgOne} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
